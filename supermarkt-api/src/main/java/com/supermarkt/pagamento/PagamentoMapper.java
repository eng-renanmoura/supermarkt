package com.supermarkt.pagamento;

import java.util.List;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PagamentoMapper {
	
	Pagamento paraPagamento(PagamentoDto pagamentoDto);
	
	PagamentoDto paraPagamentoDto(Pagamento pagamento);
	
	List<PagamentoDto> paraPagamentoDto(List<Pagamento> pagamento);
	
	List<Pagamento> paraPedido(List<PagamentoDto> pagamentoDto);

}
