package com.supermarkt.distancia;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
class SupermercadosMaisProximosApi {

	private DistanciaServico distanciaServico;

	@GetMapping("/supermercados/mais-proximos/{cep}")
	public List<SupermercadoComDistanciaDto> maisProximos(@PathVariable("cep") String cep) {
		return distanciaServico.supermercadosMaisProximosAoCep(cep);
	}

	@GetMapping("/supermercados/{cep}/supermercado/{supermercadoId}")
	public SupermercadoComDistanciaDto comDistanciaPorId(@PathVariable("cep") String cep,
			@PathVariable("supermercadoId") Long supermercadoId) {
		return distanciaServico.supermercadoComDistanciaDoCep(supermercadoId, cep);
	}

}
