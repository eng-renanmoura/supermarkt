package com.supermarkt.supermercado;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ItemEstoqueDto {
	
	private Long id;
	private String nome;
	private String descricao;
	private Integer quantidade;
	private BigDecimal preco;
	private BigDecimal precoPromocional;

	public ItemEstoqueDto(ItemEstoque estoque) {
		this(estoque.getId(), estoque.getNome(), estoque.getDescricao(), estoque.getQuantidade(), 
				estoque.getPreco(), estoque.getPrecoPromocional());
	}

}
