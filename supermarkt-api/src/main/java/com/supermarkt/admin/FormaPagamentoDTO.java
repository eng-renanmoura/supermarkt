package com.supermarkt.admin;

import com.supermarkt.admin.TipoPagamento.Forma;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FormaPagamentoDTO {
	
	private String valor;
	private String descricao;
	
	public FormaPagamentoDTO(Forma forma) {
		this(forma.getCodigo(), forma.getDescricao());
	}
}
