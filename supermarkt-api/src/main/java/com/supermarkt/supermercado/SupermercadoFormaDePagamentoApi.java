package com.supermarkt.supermercado;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.supermarkt.admin.FormaDePagamento;
import com.supermarkt.supermercado.SupermercadoFormaDePagamento.SupermercadoFormaDePagamentoId;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class SupermercadoFormaDePagamentoApi {
	
	private SupermercadoFormaDePagamentoRepositorio supermercadoFormaDePagamentoRepo;
	
	@PostMapping("/supermercados/{idSupermercado}/formas-de-pagamento")
	public void adiciona(@PathVariable("idSupermercado") Long idRestaurante, @RequestBody FormaDePagamento formaDePagamento) {
		SupermercadoFormaDePagamentoId id = new SupermercadoFormaDePagamentoId(idRestaurante, formaDePagamento.getId());
		Supermercado restaurante = new Supermercado();
		restaurante.setId(idRestaurante);
		SupermercadoFormaDePagamento restauranteFormaDePagamento = new SupermercadoFormaDePagamento(id, restaurante,
				formaDePagamento);
		supermercadoFormaDePagamentoRepo.save(restauranteFormaDePagamento);
	}

	@DeleteMapping("/supermercados/{idSupermercado}/formas-de-pagamento/{idFormaDePagamento}")
	public void removeDoRestaurante(@PathVariable("idSupermercado") Long idRestaurante, @PathVariable("idFormaDePagamento") Long idFormaDePagamento) {
		SupermercadoFormaDePagamentoId id = new SupermercadoFormaDePagamentoId(idRestaurante, idFormaDePagamento);
		supermercadoFormaDePagamentoRepo.deleteById(id);
	}

	@GetMapping("/supermercados/{idSupermercado}/formas-de-pagamento")
	public List<FormaDePagamento> lista(@PathVariable("idSupermercado") Long idRestaurante) {
		Supermercado restaurante = new Supermercado();
		restaurante.setId(idRestaurante);
		return supermercadoFormaDePagamentoRepo.findAllBySupermercadoOrderByNomeAsc(restaurante);
	}
	

}
