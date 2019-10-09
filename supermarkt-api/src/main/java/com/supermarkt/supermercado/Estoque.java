package com.supermarkt.supermercado;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Estoque {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotNull @Positive
	private Integer quantidade;
	
	@ManyToOne(optional=false)
	private Supermercado supermercado;

	@ManyToOne(optional=false)
	private Item item;

}
