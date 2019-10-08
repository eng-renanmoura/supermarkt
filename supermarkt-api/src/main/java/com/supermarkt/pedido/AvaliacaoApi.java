package com.supermarkt.pedido;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.supermarkt.supermercado.Supermercado;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class AvaliacaoApi {
	
	private AvaliacaoRepositorio repo;
	
	@GetMapping("/supermercados/{supermercadoId}/avaliacoes")
	public List<AvaliacaoDto> listaDoSupermercado(@PathVariable("supermercadoId") Long supermercadoId) {
		Supermercado supermercado = new Supermercado();
		supermercado.setId(supermercadoId);
		return repo.findAllBySupermercado(supermercado).stream().map(a -> new AvaliacaoDto(a))
				.collect(Collectors.toList());
	}

	@PostMapping("/supermercados/{supermercadoId}/avaliacoes")
	public AvaliacaoDto adiciona(@RequestBody Avaliacao avaliacao) {
		Avaliacao salvo = repo.save(avaliacao);
		return new AvaliacaoDto(salvo);
	}

	@GetMapping("/supermercados/media-avaliacoes")
	public List<MediaAvaliacoesDto> mediaDasAvaliacoesDosSupermercados(@RequestParam List<Long> idsDosSupermercados) {
		List<MediaAvaliacoesDto> medias = new ArrayList<>();
		for (Long supermercadoId : idsDosSupermercados) {
			Double media = repo.mediaDoSupermercadoPeloId(supermercadoId);
			medias.add(new MediaAvaliacoesDto(supermercadoId, media));
		}
		return medias;
	}

}
