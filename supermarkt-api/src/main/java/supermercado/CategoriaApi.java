package supermercado;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import excecao.RecursoNaoEncontradoException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
class CategoriaApi {

	private CategoriaDoCardapioRepository repo;

	@GetMapping("/supermercados/{idSupermercado}/categoria/{idCategoria}")
	public CategoriaDto categoriaPorId(@PathVariable("idCategoria") Long idCategoria) {
		Categoria categoria = repo.findById(idCategoria).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new CategoriaDto(categoria);
	}

	@PostMapping("/supermercados/{idSupermercado}/categoria/{idCategoria}")
	public Categoria categoriasDoSupermercado(@PathVariable("idCategoria") Long idCardapio,
			@RequestBody Categoria categoria) {
		return repo.save(categoria);
	}

}
