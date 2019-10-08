package com.supermarkt.supermercado;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class EstoqueDto {
	
	private Long id;
	
	public EstoqueDto(Estoque estoque) {
		this(estoque.getId());
	}

}
