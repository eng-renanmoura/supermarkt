package com.supermarkt.pedido;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.supermarkt.supermercado.Supermercado;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoDto {

	private Long id;
	private LocalDateTime dataHora;
	private Pedido.Situacao situacao;
	private Supermercado supermercado;
	private EntregaDto entrega;
	private List<ItemDoPedidoDto> itens;
	
	public BigDecimal getTotal() {
		BigDecimal total = supermercado.getTaxaDeEntregaEmReais() != null ? supermercado.getTaxaDeEntregaEmReais() : BigDecimal.ZERO;
		for (ItemDoPedidoDto item : itens) {
			BigDecimal preco = item.getItemEstoque().getPrecoPromocional() != null ? item.getItemEstoque().getPrecoPromocional() : item.getItemEstoque().getPreco() ;
			total = total.add(preco.multiply(new BigDecimal(item.getQuantidade())));
		}
		return total;
	}
}
