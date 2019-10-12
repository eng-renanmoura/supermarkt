package com.supermarkt.admin;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ItemDto {

	private Long id;
	private String nome;
	private String descricao;

	public ItemDto(Item item) {
		this(item.getId(), item.getNome(), item.getDescricao());
	}

}
