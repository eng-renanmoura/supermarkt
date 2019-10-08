package com.supermarkt.pedido;

import com.supermarkt.supermercado.ItemDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
class ItemDoPedidoDto {

	private Long id;
	private Integer quantidade;
	private String observacao;
	private ItemDto item;

	public ItemDoPedidoDto(ItemDoPedido item) {
		this(item.getId(), item.getQuantidade(), item.getObservacao(), new ItemDto(item.getItem()));
	}

}
