package com.supermarkt.pedido;

import com.supermarkt.supermercado.SupermercadoDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SupermercadoComAvaliacaoDto {
	
	SupermercadoDto supermercado;
	Double mediaDasAvaliacoes;

}
