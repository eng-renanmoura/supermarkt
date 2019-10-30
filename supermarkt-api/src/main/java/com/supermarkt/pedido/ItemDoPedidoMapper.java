package com.supermarkt.pedido;

import java.util.List;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemDoPedidoMapper {
	
	ItemDoPedido paraItemDoPedido(ItemDoPedidoDto itemDoPedidoDto);
	
	ItemDoPedidoDto paraItemDoPedidoDto(ItemDoPedido itemDoPedido);
	
	List<ItemDoPedidoDto> paraItemDoPedidoDto(List<ItemDoPedido> itensDoPedido);
	
	List<ItemDoPedido> paraItensDoPedido(List<ItemDoPedidoDto> itensDoPedidoDto);
	
}
