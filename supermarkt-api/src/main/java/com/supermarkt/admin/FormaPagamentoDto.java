package com.supermarkt.admin;

import com.supermarkt.admin.TipoPagamento.Forma;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FormaPagamentoDto {
	
	private String valor;
	private String descricao;
	
	public FormaPagamentoDto(Forma forma) {
		this(forma.getCodigo(), forma.getDescricao());
	}
}
