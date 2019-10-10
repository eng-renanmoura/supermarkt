package com.supermarkt.supermercado;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.supermarkt.excecao.RecursoNaoEncontradoException;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
class HorarioDeFuncionamentoApi {

	private HorarioDeFuncionamentoRepositorio repo;
	
	@GetMapping("/supermercados/{idSupermercado}/horarios-de-funcionamento/{id}")
	public HorarioDeFuncionamentoDto detalha(@PathVariable("id") Long id) {
		HorarioDeFuncionamento horario = repo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new HorarioDeFuncionamentoDto(horario);
	}

	@GetMapping("/supermercados/{idSupermercado}/horarios-de-funcionamento")
	public List<HorarioDeFuncionamentoDto> lista(@PathVariable("idSupermercado") Long idSupermercado) {
		Supermercado supermercado = new Supermercado();
		supermercado.setId(idSupermercado);
		List<HorarioDeFuncionamento> horariosDoSupermercado = repo.findAllBySupermercado(supermercado);
		return horariosDoSupermercado.stream().map(h -> new HorarioDeFuncionamentoDto(h)).collect(Collectors.toList());
	}

	@PostMapping("/parceiros/supermercados/{idSupermercado}/horarios-de-funcionamento")
	public HorarioDeFuncionamento adiciona(@RequestBody HorarioDeFuncionamento horarioDeFuncionamento) {
		return repo.save(horarioDeFuncionamento);
	}

	@PutMapping("/parceiros/supermercados/{idSupermercado}/horarios-de-funcionamento/{id}")
	public HorarioDeFuncionamento atualiza(@RequestBody HorarioDeFuncionamento horarioDeFuncionamento) {
		return repo.save(horarioDeFuncionamento);
	}

	@DeleteMapping("/parceiros/supermercados/{idSupermercado}/horarios-de-funcionamento/{id}")
	public void remove(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}

}
