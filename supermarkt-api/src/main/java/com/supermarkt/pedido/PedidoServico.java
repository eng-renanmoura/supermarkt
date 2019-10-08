package com.supermarkt.pedido;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.experimental.Delegate;

@Service
@AllArgsConstructor
public class PedidoServico {

	@Delegate
	private PedidoRepositorio repo;

}
