package com.supermarkt.supermercado;

import java.math.BigDecimal;

import com.supermarkt.admin.ItemDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class EstoqueDto {
	
	private Long id;
	private Integer quantidade;
	private BigDecimal preco;
	private BigDecimal precoPromocional;
	private ItemDto item;
	
	public EstoqueDto(Estoque estoque) {
		this(estoque.getId(), estoque.getQuantidade(), estoque.getPreco(), estoque.getPrecoPromocional(), new ItemDto(estoque.getItem()));
	}

}
