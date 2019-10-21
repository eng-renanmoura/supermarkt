package com.supermarkt.supermercado;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.supermarkt.excecao.RecursoNaoEncontradoException;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class SupermercadoApi {
	
	private SupermercadoRepositorio supermercadoRepo;

	@GetMapping("/admin/supermercados")
	public List<SupermercadoDto> lista() {
		return supermercadoRepo.findAllByOrderByNomeAsc().stream().map(SupermercadoDto::new).collect(Collectors.toList());
	}
	
	@GetMapping("/admin/supermercados/{nome}")
	public List<SupermercadoDto> buscarPorNome(@PathVariable("nome") String nome) {
		return supermercadoRepo.findByNomeContainingIgnoreCase(nome).stream().map(SupermercadoDto::new).collect(Collectors.toList());
	}
	
	@GetMapping("/supermercados/{id}")
	public SupermercadoDto detalha(@PathVariable("id") Long id) {
		Supermercado supermercado = supermercadoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new SupermercadoDto(supermercado);
	}
	
	@GetMapping("/supermercados")
	public List<SupermercadoDto> detalhePorIds(@RequestParam List<Long> ids) {
		return supermercadoRepo.findAllById(ids).stream().map(SupermercadoDto::new).collect(Collectors.toList());
	}
	
	@DeleteMapping("/admin/supermercados/{id}")
	public void remove(@PathVariable("id") Long id) {
		supermercadoRepo.deleteById(id);
	}
	
	@GetMapping("/parceiros/supermercados/{id}")
	public SupermercadoDto detalhaParceiro(@PathVariable("id") Long id) {
		Supermercado restaurante = supermercadoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new SupermercadoDto(restaurante);
	}

	@PostMapping("/parceiros/supermercados")
	public Supermercado adiciona(@RequestBody Supermercado supermercado) {
		supermercado.setAprovado(false);
		Supermercado supermercadoSalvo = supermercadoRepo.save(supermercado);
		return supermercadoSalvo;
	}

	@PutMapping("/parceiros/supermercados/{id}")
	public Supermercado atualiza(@RequestBody Supermercado supermercado) {
		Supermercado doBD = supermercadoRepo.getOne(supermercado.getId());
		supermercado.setUsuario(doBD.getUsuario());
		supermercado.setAprovado(doBD.getAprovado());
		return supermercadoRepo.save(supermercado);
	}

	@GetMapping("/admin/supermercados/em-aprovacao")
	public List<SupermercadoDto> emAprovacao() {
		return supermercadoRepo.findAllByAprovado(false).stream().map(SupermercadoDto::new)
				.collect(Collectors.toList());
	}

	@Transactional
	@PatchMapping("/admin/supermercados/{id}")
	public void aprova(@PathVariable("id") Long id) {
		supermercadoRepo.aprovaPorId(id);
	}

}
