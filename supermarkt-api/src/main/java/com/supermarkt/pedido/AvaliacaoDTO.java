package com.supermarkt.pedido;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AvaliacaoDTO {

	private Long id;
	private Integer nota;
	private String comentario;

}
