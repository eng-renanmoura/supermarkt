package com.supermarkt.admin;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class TipoPagamentoDTO {
	
	private Long id;
	private String nome;
	private String forma;
	
	public TipoPagamentoDTO(TipoPagamento tipoPagamento) {
		this(tipoPagamento.getId(), tipoPagamento.getNome(), tipoPagamento.getForma().getCodigo());
	}

}
