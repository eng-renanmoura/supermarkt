package com.supermarkt.supermercado;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SupermercadoDto {

	private Long id;

	private String cnpj;

	private String nome;

	private String descricao;

	private String cep;

	private String endereco;

	private BigDecimal taxaDeEntregaEmReais;

	private Integer tempoDeEntregaMinimoEmMinutos;

	private Integer tempoDeEntregaMaximoEmMinutos;

	private Boolean aprovado;
	
	public SupermercadoDto(Supermercado supermercado) {
		this(supermercado.getId(), supermercado.getCnpj(), supermercado.getNome(), supermercado.getDescricao(), supermercado.getCep(), supermercado.getEndereco(),
				supermercado.getTaxaDeEntregaEmReais(), supermercado.getTempoDeEntregaMinimoEmMinutos(),
				supermercado.getTempoDeEntregaMaximoEmMinutos(), supermercado.getAprovado());
	}


}
