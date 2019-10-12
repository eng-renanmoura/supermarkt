package com.supermarkt.admin;

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
class CategoriaApi {

	private CategoriaRepositorio repo;
	
	@GetMapping("/categorias")
	public List<CategoriaDto> lista() {
		return repo.findAllByOrderByNomeAsc().stream().map(CategoriaDto::new).collect(Collectors.toList());
	}

	@PostMapping("/admin/categorias")
	public CategoriaDto adiciona(@RequestBody CategoriaDto categoria) {
		Categoria c = new Categoria();
		c.setNome(categoria.getNome());
		c = repo.save(c);
		return new CategoriaDto(c);
	}

	@PutMapping("/admin/categorias/{id}")
	public CategoriaDto atualiza(@RequestBody CategoriaDto categoriaDto) {
		Categoria categoria = repo.findById(categoriaDto.getId()).get();
		categoria.setNome(categoriaDto.getNome());
		categoria =  repo.save(categoria);
		return new CategoriaDto(categoria);
	}

	@DeleteMapping("/admin/categorias/{id}")
	public void remove(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	@GetMapping("/categorias/{nome}")
	public List<CategoriaDto> buscarPorNome(@PathVariable("nome") String nome) {
		return repo.findByNomeContainingIgnoreCase(nome).stream().map(CategoriaDto::new).collect(Collectors.toList());
	}
	
	@GetMapping("/admin/categorias/{idCategoria}")
	public CategoriaDto categoriaPorId(@PathVariable("idCategoria") Long idCategoria) {
		Categoria categoria = repo.findById(idCategoria).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new CategoriaDto(categoria);
	}


	@GetMapping("/supermercados/{idSupermercado}/categoria/{idCategoria}")
	public CategoriaDto categoriaPorIdSupermercado(@PathVariable("idCategoria") Long idCategoria) {
		Categoria categoria = repo.findById(idCategoria).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new CategoriaDto(categoria);
	}

}
