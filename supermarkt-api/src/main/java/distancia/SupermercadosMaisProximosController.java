package distancia;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
class SupermercadosMaisProximosController {

	private DistanciaServico distanciaService;

	@GetMapping("/restaurantes/mais-proximos/{cep}")
	public List<SupermercadoComDistanciaDto> maisProximos(@PathVariable("cep") String cep) {
		return distanciaService.restaurantesMaisProximosAoCep(cep);
	}

	@GetMapping("/restaurantes/{cep}/restaurante/{restauranteId}")
	public SupermercadoComDistanciaDto comDistanciaPorId(@PathVariable("cep") String cep,
			@PathVariable("restauranteId") Long restauranteId) {
		return distanciaService.supermercadoComDistanciaDoCep(restauranteId, cep);
	}

}
