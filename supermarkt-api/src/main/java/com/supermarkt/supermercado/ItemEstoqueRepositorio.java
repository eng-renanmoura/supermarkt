package com.supermarkt.supermercado;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemEstoqueRepositorio extends JpaRepository<ItemEstoque, Long> {
	
	List<ItemEstoque> findAllBySupermercado(Supermercado supermercado);

}
