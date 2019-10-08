package com.supermarkt.supermercado;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.supermarkt.admin.FormaDePagamento;

public interface SupermercadoFormaDePagamentoRepositorio extends JpaRepository<SupermercadoFormaDePagamento, SupermercadoFormaDePagamento.SupermercadoFormaDePagamentoId> {
	
	@Query("select f from SupermercadoFormaDePagamento rf join rf.supermercado r join rf.formaDePagamento f where r = :supermercado order by f.nome")
	List<FormaDePagamento> findAllBySupermercadoOrderByNomeAsc(Supermercado supermercado);

}
