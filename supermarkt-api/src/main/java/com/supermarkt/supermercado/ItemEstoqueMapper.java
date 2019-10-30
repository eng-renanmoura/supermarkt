package com.supermarkt.supermercado;

import java.util.List;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemEstoqueMapper {
	
	ItemEstoque paraItemEstoque(ItemEstoqueDTO itemEstoqueDto);
	
	ItemEstoqueDTO paraItemEstoqueDto(ItemEstoque itemEstoque);
	
	List<ItemEstoqueDTO> paraItemEstoqueDto(List<ItemEstoque> itensEstoque);
	
	List<ItemEstoque> paraItemEstoque(List<ItemEstoqueDTO> itensEstoqueDto);

}
