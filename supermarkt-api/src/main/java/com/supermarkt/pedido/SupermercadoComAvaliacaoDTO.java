package com.supermarkt.pedido;

import com.supermarkt.supermercado.SupermercadoDto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SupermercadoComAvaliacaoDTO {
	
	SupermercadoDto supermercado;
	Double mediaDasAvaliacoes;

}
