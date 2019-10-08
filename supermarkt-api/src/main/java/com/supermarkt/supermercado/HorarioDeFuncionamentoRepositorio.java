package com.supermarkt.supermercado;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

interface HorarioDeFuncionamentoRepositorio extends JpaRepository<HorarioDeFuncionamento, Long> {

	List<HorarioDeFuncionamento> findAllBySupermercado(Supermercado supermercado);

}
