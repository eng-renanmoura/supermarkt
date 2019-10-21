package com.supermarkt.admin;

import java.util.Arrays;
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
class TipoPagamentoApi {

	private TipoPagamentoRepositorio tipoPagamentoRepo;

	@GetMapping("/tipo-pagamento")
	public List<TipoPagamento> lista() {
		return tipoPagamentoRepo.findAllByOrderByNomeAsc();
	}

	@GetMapping("/admin/tipo-pagamento/formas")
	public List<FormaPagamentoDto> formas() {
		return Arrays.asList(TipoPagamento.Forma.values()).stream()
				.map(forma -> new FormaPagamentoDto(forma)).collect(Collectors.toList());
	}

	@PostMapping("/admin/tipo-pagamento")
	public TipoPagamento adiciona(@RequestBody TipoPagamento tipoDeCozinha) {
		return tipoPagamentoRepo.save(tipoDeCozinha);
	}

	@PutMapping("/admin/tipo-pagamento/{id}")
	public TipoPagamento atualiza(@RequestBody TipoPagamento tipoDeCozinha) {
		return tipoPagamentoRepo.save(tipoDeCozinha);
	}

	@DeleteMapping("/admin/tipo-pagamento/{id}")
	public void remove(@PathVariable("id") Long id) {
		tipoPagamentoRepo.deleteById(id);
	}
	
	@GetMapping("/admin/tipo-pagamento/{id}")
	public TipoPagamento tipoPorId(@PathVariable("id") Long id) {
		TipoPagamento categoria = tipoPagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return categoria; 
	}
	
	@GetMapping("/tipo-pagamento/{nome}")
	public List<TipoPagamento> buscarPorNome(@PathVariable("nome") String nome) {
		return tipoPagamentoRepo.findByNomeContainingIgnoreCase(nome);
	}
}
