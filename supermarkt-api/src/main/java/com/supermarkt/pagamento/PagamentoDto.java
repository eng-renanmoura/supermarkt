package com.supermarkt.pagamento;

import java.math.BigDecimal;

import com.supermarkt.admin.TipoPagamento;
import com.supermarkt.pedido.PedidoDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PagamentoDto {

	private Long id;
	private BigDecimal valor;
	private String nome;
	private String numero;
	private String expiracao;
	private String codigo;
	private Pagamento.Situacao situacao;
	private TipoPagamento tipoPagamento;
	private PedidoDto pedido;

}
