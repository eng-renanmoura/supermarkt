package com.supermarkt.supermercado;

import java.util.List;

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
public class SupermercadoAPI {
	
	private SupermercadoRepositorio supermercadoRepo;
	private SupermercadoMapper supermercadoMapper;

	@GetMapping("/admin/supermercados")
	public List<SupermercadoDTO> lista() {
		return supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findAllByOrderByNomeAsc());
	}
	
	@GetMapping("/admin/supermercados/{nome}")
	public List<SupermercadoDTO> buscarPorNome(@PathVariable("nome") String nome) {
		return supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findByNomeContainingIgnoreCase(nome));
	}
	
	@GetMapping("/supermercados/{id}")
	public SupermercadoDTO detalha(@PathVariable("id") Long id) {
		Supermercado supermercado = supermercadoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return supermercadoMapper.paraSupermercadoDto(supermercado);
	}
	
	@GetMapping("/supermercados")
	public List<SupermercadoDTO> detalhePorIds(@RequestParam List<Long> ids) {
		return supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findAllById(ids));
	}
	
	@DeleteMapping("/admin/supermercados/{id}")
	public void remove(@PathVariable("id") Long id) {
		supermercadoRepo.deleteById(id);
	}
	
	@GetMapping("/parceiros/supermercados/{id}")
	public SupermercadoDTO detalhaParceiro(@PathVariable("id") Long id) {
		Supermercado supermercado = supermercadoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return supermercadoMapper.paraSupermercadoDto(supermercado);
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
	public List<SupermercadoDTO> emAprovacao() {
		return supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findAllByAprovado(false));
	}

	@Transactional
	@PatchMapping("/admin/supermercados/{id}")
	public void aprova(@PathVariable("id") Long id) {
		supermercadoRepo.aprovaPorId(id);
	}

}
