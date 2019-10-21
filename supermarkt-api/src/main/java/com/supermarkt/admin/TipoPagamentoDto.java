package com.supermarkt.admin;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TipoPagamentoDto {
	
	private Long id;
	private String nome;
	private String forma;
	
	public TipoPagamentoDto(TipoPagamento tipoPagamento) {
		this(tipoPagamento.getId(), tipoPagamento.getNome(), tipoPagamento.getForma().getCodigo());
	}

}
