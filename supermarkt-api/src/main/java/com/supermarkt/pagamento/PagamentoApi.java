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
import com.supermarkt.pedido.PedidoMapper;
import com.supermarkt.pedido.PedidoServico;

@RestController
@RequestMapping("/pagamentos")
public class PagamentoApi {
	
	private PagamentoRepositorio pagamentoRepo;
	private PedidoServico pedidos;
	private SimpMessagingTemplate websocket;
	private PedidoMapper pedidoMapper;
	private PagamentoMapper pagamentoMapper;
	
	@GetMapping("/{id}")
	public PagamentoDto detalha(@PathVariable Long id) {
		Pagamento pagamento = pagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return pagamentoMapper.paraPagamentoDto(pagamento);
	}

	@PostMapping
	public ResponseEntity<PagamentoDto> cria(@RequestBody Pagamento pagamento, UriComponentsBuilder uriBuilder) {
		pagamento.setSituacao(Pagamento.Situacao.CRIADO);
		Pagamento salvo = pagamentoRepo.save(pagamento);
		URI path = uriBuilder.path("/pagamentos/{id}").buildAndExpand(salvo.getId()).toUri();
		return ResponseEntity.created(path).body(pagamentoMapper.paraPagamentoDto(salvo));
	}

	@PutMapping("/{id}")
	public PagamentoDto confirma(@PathVariable Long id) {
		Pagamento pagamento = pagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		pagamento.setSituacao(Pagamento.Situacao.CONFIRMADO);
		pagamentoRepo.save(pagamento);
		Long pedidoId = pagamento.getPedido().getId();
		Pedido pedido = pedidos.porIdComItens(pedidoId);
		pedido.setSituacao(Pedido.Situacao.PAGO);
		pedidos.atualizaStatus(Pedido.Situacao.PAGO, pedido);
		websocket.convertAndSend("/parceiros/supermercados/"+pedido.getSupermercado().getId()+"/pedidos/pendentes", pedidoMapper.paraPedidoDto(pedido));
		return pagamentoMapper.paraPagamentoDto(pagamento);
	}

	@DeleteMapping("/{id}")
	public PagamentoDto cancela(@PathVariable Long id) {
		Pagamento pagamento = pagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		pagamento.setSituacao(Pagamento.Situacao.CANCELADO);
		pagamentoRepo.save(pagamento);
		return pagamentoMapper.paraPagamentoDto(pagamento);
	}

}
