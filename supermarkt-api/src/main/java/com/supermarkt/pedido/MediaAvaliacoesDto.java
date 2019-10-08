package com.supermarkt.pedido;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
class MediaAvaliacoesDto {

	private Long supermercadoId;
	private Double media;

}