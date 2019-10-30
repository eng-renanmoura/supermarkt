package com.supermarkt.supermercado;

import java.util.List;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemEstoqueMapper {
	
	ItemEstoque paraItemEstoque(ItemEstoqueDto itemEstoqueDto);
	
	ItemEstoqueDto paraItemEstoqueDto(ItemEstoque itemEstoque);
	
	List<ItemEstoqueDto> paraItemEstoqueDto(List<ItemEstoque> itensEstoque);
	
	List<ItemEstoque> paraItemEstoque(List<ItemEstoqueDto> itensEstoqueDto);

}
