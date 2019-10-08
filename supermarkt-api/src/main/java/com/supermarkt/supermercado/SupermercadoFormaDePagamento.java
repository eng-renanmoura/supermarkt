package com.supermarkt.supermercado;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import com.supermarkt.admin.FormaDePagamento;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SupermercadoFormaDePagamento {
	
	@EmbeddedId
	SupermercadoFormaDePagamentoId id;
	
	@ManyToOne
	@MapsId("supermercadoId")
	private Supermercado supermercado;
	
	@ManyToOne
	@MapsId("formaDePagamentoId")
	private FormaDePagamento formaDePagamento;
	
	@Embeddable
	@NoArgsConstructor
	@AllArgsConstructor
	@Data
	public static class SupermercadoFormaDePagamentoId implements Serializable {
		private static final long serialVersionUID = 1L;

		@Column(name = "restaurante_id")
		private Long supermercadoId;

		@Column(name = "forma_de_pagamento_id")
		private Long formaDePagamentoId;
	}

}
