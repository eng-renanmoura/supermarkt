package pedido;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.Data;
import supermercado.Supermercado;

@Data
@AllArgsConstructor
public class PedidoDto {

	private Long id;
	private LocalDateTime dataHora;
	private Pedido.Status status;
	private Supermercado supermercado;
	private EntregaDto entrega;
	private List<ItemDoPedidoDto> itens = new ArrayList<>();
	
	public PedidoDto(Pedido pedido) {
		this(pedido.getId(), pedido.getDataHora(), pedido.getStatus(), pedido.getSupermercado(), new EntregaDto(pedido.getEntrega()), trataItens(pedido.getItens()));
	}

	private static List<ItemDoPedidoDto> trataItens(List<ItemDoPedido> itens) {
		return itens.stream().map(ItemDoPedidoDto::new).collect(Collectors.toList());
	}

	public BigDecimal getTotal() {
		BigDecimal total = supermercado.getTaxaDeEntregaEmReais() != null ? supermercado.getTaxaDeEntregaEmReais() : BigDecimal.ZERO;
		for (ItemDoPedidoDto item : itens) {
			BigDecimal preco = item.getItem().getPrecoPromocional() != null ? item.getItem().getPrecoPromocional() : item.getItem().getPreco() ;
			total = total.add(preco.multiply(new BigDecimal(item.getQuantidade())));
		}
		return total;
	}
}
