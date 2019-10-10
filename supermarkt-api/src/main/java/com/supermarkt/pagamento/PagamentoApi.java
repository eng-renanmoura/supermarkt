package com.supermarkt.pagamento;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.supermarkt.excecao.RecursoNaoEncontradoException;
import com.supermarkt.pedido.Pedido;
import com.supermarkt.pedido.PedidoDto;
import com.supermarkt.pedido.PedidoServico;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/pagamentos")
@AllArgsConstructor
public class PagamentoApi {
	
	private PagamentoRepositorio pagamentoRepo;
	private PedidoServico pedidos;
	private SimpMessagingTemplate websocket;

	@GetMapping("/{id}")
	public PagamentoDto detalha(@PathVariable Long id) {
		Pagamento pagamento = pagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new PagamentoDto(pagamento);
	}

	@PostMapping
	public ResponseEntity<PagamentoDto> cria(@RequestBody Pagamento pagamento, UriComponentsBuilder uriBuilder) {
		pagamento.setStatus(Pagamento.Status.CRIADO);
		Pagamento salvo = pagamentoRepo.save(pagamento);
		URI path = uriBuilder.path("/pagamentos/{id}").buildAndExpand(salvo.getId()).toUri();
		return ResponseEntity.created(path).body(new PagamentoDto(salvo));
	}

	@PutMapping("/{id}")
	public PagamentoDto confirma(@PathVariable Long id) {
		Pagamento pagamento = pagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		pagamento.setStatus(Pagamento.Status.CONFIRMADO);
		pagamentoRepo.save(pagamento);
		Long pedidoId = pagamento.getPedido().getId();
		Pedido pedido = pedidos.porIdComItens(pedidoId);
		pedido.setStatus(Pedido.Status.PAGO);
		pedidos.atualizaStatus(Pedido.Status.PAGO, pedido);
		websocket.convertAndSend("/parceiros/supermercados/"+pedido.getSupermercado().getId()+"/pedidos/pendentes", new PedidoDto(pedido));
		return new PagamentoDto(pagamento);
	}

	@DeleteMapping("/{id}")
	public PagamentoDto cancela(@PathVariable Long id) {
		Pagamento pagamento = pagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		pagamento.setStatus(Pagamento.Status.CANCELADO);
		pagamentoRepo.save(pagamento);
		return new PagamentoDto(pagamento);
	}

}
