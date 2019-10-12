package com.supermarkt.supermercado;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class EstoqueDto {
	
	private Long id;
	private Integer quantidade;
	private BigDecimal preco;
	private BigDecimal precoPromocional;
	
	public EstoqueDto(Estoque estoque) {
		this(estoque.getId(), estoque.getQuantidade(), estoque.getPreco(), estoque.getPrecoPromocional());
	}

}
