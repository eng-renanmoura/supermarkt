package com.supermarkt.supermercado;

import java.util.List;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SupermercadoMapper {

	Supermercado paraSupermercado(SupermercadoDto supermercadoDto);
	
	SupermercadoDto paraSupermercadoDto(Supermercado supermercado);
	
	List<SupermercadoDto> paraSupermercadoDto(List<Supermercado> supermercado);
	
	List<Supermercado> paraSupermercado(List<SupermercadoDto> supermercadoDto);
}
