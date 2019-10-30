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
class TipoPagamentoAPI {

	private TipoPagamentoRepositorio tipoPagamentoRepo;

	@GetMapping("/tipo-pagamento")
	public List<TipoPagamentoDTO> lista() {
		return tipoPagamentoRepo.findAllByOrderByNomeAsc().stream().map(TipoPagamentoDTO::new).collect(Collectors.toList());
	}

	@GetMapping("/admin/tipo-pagamento/formas")
	public List<FormaPagamentoDTO> formas() {
		return Arrays.asList(TipoPagamento.Forma.values()).stream()
				.map(forma -> new FormaPagamentoDTO(forma)).collect(Collectors.toList());
	}

	@PostMapping("/admin/tipo-pagamento")
	public TipoPagamentoDTO adiciona(@RequestBody TipoPagamento tipoPagamento) {
		return new TipoPagamentoDTO(tipoPagamentoRepo.save(tipoPagamento));
	}

	@PutMapping("/admin/tipo-pagamento/{id}")
	public TipoPagamentoDTO atualiza(@RequestBody TipoPagamento tipoPagamento) {
		return new TipoPagamentoDTO(tipoPagamentoRepo.save(tipoPagamento));
	}

	@DeleteMapping("/admin/tipo-pagamento/{id}")
	public void remove(@PathVariable("id") Long id) {
		tipoPagamentoRepo.deleteById(id);
	}
	
	@GetMapping("/admin/tipo-pagamento/{id}")
	public TipoPagamentoDTO tipoPorId(@PathVariable("id") Long id) {
		TipoPagamento tipoPagamento = tipoPagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new TipoPagamentoDTO(tipoPagamento); 
	}
	
	@GetMapping("/tipo-pagamento/{nome}")
	public List<TipoPagamentoDTO> buscarPorNome(@PathVariable("nome") String nome) {
		return tipoPagamentoRepo.findByNomeContainingIgnoreCase(nome).stream().map(TipoPagamentoDTO::new).collect(Collectors.toList());
	}
}
