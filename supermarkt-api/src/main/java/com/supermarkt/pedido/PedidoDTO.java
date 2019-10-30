package com.supermarkt.pedido;

import java.time.LocalDateTime;
import java.util.List;

import com.supermarkt.supermercado.Supermercado;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PedidoDTO {

	private Long id;
	private LocalDateTime dataHora;
	private Pedido.Situacao situacao;
	private Supermercado supermercado;
	private EntregaDTO entrega;
	private List<ItemDoPedidoDTO> itens;
	
}
