package com.supermarkt.pedido;

import com.supermarkt.supermercado.EstoqueDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
class ItemDoPedidoDto {

	private Long id;
	private Integer quantidade;
	private String observacao;
	private EstoqueDto estoque;

	public ItemDoPedidoDto(ItemDoPedido item) {
		this(item.getId(), item.getQuantidade(), item.getObservacao(), new EstoqueDto(item.getEstoque()));
	}

}
