package com.supermarkt.supermercado;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.supermarkt.admin.TipoPagamento;
import com.supermarkt.supermercado.SupermercadoTipoPagamento.SupermercadoTipoPagamentoId;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class SupermercadoTipoPagamentoApi {
	
	private SupermercadoTipoPagamentoRepositorio supermercadoTipoPagamentoRepo;
	
	@PostMapping("/parceiros/supermercados/{idSupermercado}/tipo-pagamento")
	public void adiciona(@PathVariable("idSupermercado") Long idRestaurante, @RequestBody TipoPagamento tipoPagamento) {
		SupermercadoTipoPagamentoId id = new SupermercadoTipoPagamentoId(idRestaurante, tipoPagamento.getId());
		Supermercado supermercado = new Supermercado();
		supermercado.setId(idRestaurante);
		SupermercadoTipoPagamento supermercadoTipoPagamento = new SupermercadoTipoPagamento(id, supermercado,
				tipoPagamento);
		supermercadoTipoPagamentoRepo.save(supermercadoTipoPagamento);
	}

	@DeleteMapping("/parceiros/supermercados/{idSupermercado}/tipo-pagamento/{idTipoPagamento}")
	public void removeDoRestaurante(@PathVariable("idSupermercado") Long idRestaurante, @PathVariable("idTipoPagamento") Long idFormaDePagamento) {
		SupermercadoTipoPagamentoId id = new SupermercadoTipoPagamentoId(idRestaurante, idFormaDePagamento);
		supermercadoTipoPagamentoRepo.deleteById(id);
	}

	@GetMapping("/supermercados/{idSupermercado}/tipo-pagamento")
	public List<TipoPagamento> lista(@PathVariable("idSupermercado") Long idSupermercado) {
		Supermercado supermercado = new Supermercado();
		supermercado.setId(idSupermercado);
		return supermercadoTipoPagamentoRepo.findAllBySupermercadoOrderByNomeAsc(supermercado);
	}
	
}
