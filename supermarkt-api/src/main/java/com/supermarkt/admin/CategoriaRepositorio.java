package com.supermarkt.admin;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

interface CategoriaRepositorio extends JpaRepository<Categoria, Long> {

	List<Categoria> findAllByOrderByNomeAsc();
	
	List<Categoria> findByNomeContainingIgnoreCase(@Param("nome") String nome);
	
}
