package com.supermarkt.supermercado;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.supermarkt.seguranca.Usuario;

public interface SupermercadoRepositorio extends JpaRepository<Supermercado, Long>{

	Optional<Supermercado> findByUsuario(Usuario usuario);
	
	Optional<List<Supermercado>> findAllByAprovado(boolean aprovado);

	Optional<Page<Supermercado>> findAllByAprovado(boolean aprovado, Pageable limit);

	@Modifying(clearAutomatically = true)
	@Query("update Supermercado s set s.aprovado = true where s.id = :id")
	void aprovaPorId(@Param("id") Long id);

	Optional<List<Supermercado>> findAllByOrderByNomeAsc();
	
	Optional<List<Supermercado>> findByNomeContainingIgnoreCase(@Param("nome") String nome);
}
