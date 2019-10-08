package supermercado;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import excecao.RecursoNaoEncontradoException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class EstoqueApi {
	
	private EstoqueRepositorio repo;
	
	@GetMapping("/supermercados/{idSupermercado}/estoque")
	public List<EstoqueDto> estoqueDoSupermercado(@PathVariable("idSupermercado") Long idSupermercado) {
		Supermercado supermercado = new Supermercado();
		supermercado.setId(idSupermercado);
		return repo.findAllBySupermercado(supermercado).stream().map(e -> new EstoqueDto(e))
				.collect(Collectors.toList());
	}
	
	@GetMapping("/supermercados/{idSupermercado}/estoque/{idEstoque}")
	public EstoqueDto porId(@PathVariable("idEstoque") Long idEstoque) {
		Estoque estoque = repo.findById(idEstoque).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new EstoqueDto(estoque);
	}

}
