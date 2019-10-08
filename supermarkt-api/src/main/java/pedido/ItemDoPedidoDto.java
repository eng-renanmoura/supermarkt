package pedido;

import lombok.AllArgsConstructor;
import lombok.Data;
import supermercado.ItemDto;

@Data
@AllArgsConstructor
class ItemDoPedidoDto {

	private Long id;
	private Integer quantidade;
	private String observacao;
	private ItemDto item;

	public ItemDoPedidoDto(ItemDoPedido item) {
		this(item.getId(), item.getQuantidade(), item.getObservacao(), new ItemDto(item.getItem()));
	}

}
