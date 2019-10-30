package com.supermarkt.pedido;

import java.util.List;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PedidoMapper {

	Pedido paraPedido(PedidoDto PedidoDto);
	
	PedidoDto paraPedidoDto(Pedido pedido);
	
	List<PedidoDto> paraPedidoDto(List<Pedido> pedido);
	
	List<Pedido> paraPedido(List<PedidoDto> pedidoDto);
	
}
