package com.supermarkt.supermercado;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EstoqueRepositorio extends JpaRepository<Estoque, Long> {
	
	List<Estoque> findAllBySupermercado(Supermercado supermercado);

}
