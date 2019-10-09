package com.supermarkt.distancia;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.supermarkt.excecao.RecursoNaoEncontradoException;
import com.supermarkt.supermercado.Supermercado;
import com.supermarkt.supermercado.SupermercadoServico;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
class DistanciaServico {

	private static final Pageable LIMIT = PageRequest.of(0,5);

	private SupermercadoServico supermercados;

	public List<SupermercadoComDistanciaDto> supermercadosMaisProximosAoCep(String cep) {
		List<Supermercado> aprovados = supermercados.findAllByAprovado(true, LIMIT).getContent();
		return calculaDistanciaParaOsSupermercados(aprovados, cep);
	}

	public SupermercadoComDistanciaDto supermercadoComDistanciaDoCep(Long supermercadoId, String cep) {
		Supermercado supermercado = supermercados.findById(supermercadoId).orElseThrow(() -> new RecursoNaoEncontradoException());
		String cepDoSupermercado = supermercado.getCep();
		BigDecimal distancia = distanciaDoCep(cepDoSupermercado, cep);
		return new SupermercadoComDistanciaDto(supermercadoId, distancia);
	}

	private List<SupermercadoComDistanciaDto> calculaDistanciaParaOsSupermercados(List<Supermercado> supermercados, String cep) {
		return supermercados
				.stream()
				.map(supermercado -> {
					String cepDoSupermercado = supermercado.getCep();
					BigDecimal distancia = distanciaDoCep(cepDoSupermercado, cep);
					Long supermercadoId = supermercado.getId();
					return new SupermercadoComDistanciaDto(supermercadoId, distancia);
				})
				.collect(Collectors.toList());
	}

	private BigDecimal distanciaDoCep(String cepDoSupermercado, String cep) {
		return calculaDistancia();
	}

	private BigDecimal calculaDistancia() {
		return new BigDecimal(Math.random()*15);
	}

}
