package com.supermarkt.supermercado;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
class CategoriaDto {

	private Long id;
	private String nome;
	private List<ItemDto> itens = new ArrayList<>();

	public CategoriaDto(Categoria categoria) {
		this(categoria.getId(), categoria.getNome(), trataItens(categoria.getItens()));
	}

	private static List<ItemDto> trataItens(List<Item> itens) {
		return itens.stream().map(ItemDto::new).collect(Collectors.toList());
	}

}
