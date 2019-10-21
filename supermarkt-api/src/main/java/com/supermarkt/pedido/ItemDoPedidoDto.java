package com.supermarkt.pedido;

import com.supermarkt.supermercado.ItemEstoqueDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
class ItemDoPedidoDto {

	private Long id;
	private Integer quantidade;
	private String observacao;
	private ItemEstoqueDto itemEstoque;

	public ItemDoPedidoDto(ItemDoPedido item) {
		this(item.getId(), item.getQuantidade(), item.getObservacao(), new ItemEstoqueDto(item.getItemEstoque()));
	}

}
