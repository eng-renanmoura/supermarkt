package com.supermarkt.pedido;

import java.util.ArrayList;
import java.util.List;

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
public class AvaliacaoAPI {
	
	private AvaliacaoRepositorio repo;
	private AvaliacaoMapper avaliacaoMapper;
	
	@GetMapping("/supermercados/{supermercadoId}/avaliacoes")
	public List<AvaliacaoDTO> listaDoSupermercado(@PathVariable("supermercadoId") Long supermercadoId) {
		Supermercado supermercado = new Supermercado();
		supermercado.setId(supermercadoId);
		return avaliacaoMapper.paraAvaliacaoDto(repo.findAllBySupermercado(supermercado));
	}

	@PostMapping("/supermercados/{supermercadoId}/avaliacoes")
	public AvaliacaoDTO adiciona(@RequestBody Avaliacao avaliacao) {
		Avaliacao salvo = repo.save(avaliacao);
		return avaliacaoMapper.paraAvaliacaoDto(salvo);
	}

	@GetMapping("/supermercados/media-avaliacoes")
	public List<MediaAvaliacoesDTO> mediaDasAvaliacoesDosSupermercados(@RequestParam List<Long> idsDosSupermercados) {
		List<MediaAvaliacoesDTO> medias = new ArrayList<>();
		for (Long supermercadoId : idsDosSupermercados) {
			Double media = repo.mediaDoSupermercadoPeloId(supermercadoId);
			medias.add(new MediaAvaliacoesDTO(supermercadoId, media));
		}
		return medias;
	}

}
