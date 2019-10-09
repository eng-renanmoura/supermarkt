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

	public List<SupermercadoComDistanciaDto> restaurantesMaisProximosAoCep(String cep) {
		List<Supermercado> aprovados = supermercados.findAllByAprovado(true, LIMIT).getContent();
		return calculaDistanciaParaOsSupermercados(aprovados, cep);
	}

	public SupermercadoComDistanciaDto supermercadoComDistanciaDoCep(Long restauranteId, String cep) {
		Supermercado restaurante = supermercados.findById(restauranteId).orElseThrow(() -> new RecursoNaoEncontradoException());
		String cepDoRestaurante = restaurante.getCep();
		BigDecimal distancia = distanciaDoCep(cepDoRestaurante, cep);
		return new SupermercadoComDistanciaDto(restauranteId, distancia);
	}

	private List<SupermercadoComDistanciaDto> calculaDistanciaParaOsSupermercados(List<Supermercado> restaurantes, String cep) {
		return restaurantes
				.stream()
				.map(restaurante -> {
					String cepDoRestaurante = restaurante.getCep();
					BigDecimal distancia = distanciaDoCep(cepDoRestaurante, cep);
					Long restauranteId = restaurante.getId();
					return new SupermercadoComDistanciaDto(restauranteId, distancia);
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
