package com.supermarkt.pedido;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.supermarkt.supermercado.Supermercado;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PedidoDto {

	private Long id;
	private LocalDateTime dataHora;
	private Pedido.Situacao situacao;
	private Supermercado supermercado;
	private EntregaDto entrega;
	private List<ItemDoPedidoDto> itens = new ArrayList<>();
	
	public PedidoDto(Pedido pedido) {
		this(pedido.getId(), pedido.getDataHora(), pedido.getSituacao(), pedido.getSupermercado(), new EntregaDto(pedido.getEntrega()), trataItens(pedido.getItens()));
	}

	private static List<ItemDoPedidoDto> trataItens(List<ItemDoPedido> itens) {
		return itens.stream().map(ItemDoPedidoDto::new).collect(Collectors.toList());
	}

	public BigDecimal getTotal() {
		BigDecimal total = supermercado.getTaxaDeEntregaEmReais() != null ? supermercado.getTaxaDeEntregaEmReais() : BigDecimal.ZERO;
		for (ItemDoPedidoDto item : itens) {
			BigDecimal preco = item.getEstoque().getPrecoPromocional() != null ? item.getEstoque().getPrecoPromocional() : item.getEstoque().getPreco() ;
			total = total.add(preco.multiply(new BigDecimal(item.getQuantidade())));
		}
		return total;
	}
}
