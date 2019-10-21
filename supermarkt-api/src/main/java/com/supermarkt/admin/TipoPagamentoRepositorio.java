package com.supermarkt.admin;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

interface TipoPagamentoRepositorio extends JpaRepository<TipoPagamento, Long> {

	List<TipoPagamento> findAllByOrderByNomeAsc();
	
	List<TipoPagamento> findByNomeContainingIgnoreCase(@Param("nome") String nome);

}
