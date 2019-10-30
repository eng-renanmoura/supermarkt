package com.supermarkt.supermercado;

import java.util.List;

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
public class ItemEstoqueAPI {
	
	private ItemEstoqueRepositorio repo;
	private ItemEstoqueMapper itemEstoqueMapper;
	
	@GetMapping("/parceiros/supermercados/{idSupermercado}/estoque")
	public List<ItemEstoqueDTO> estoqueDoSupermercado(@PathVariable("idSupermercado") Long idSupermercado) {
		Supermercado supermercado = new Supermercado();
		supermercado.setId(idSupermercado);
		return itemEstoqueMapper.paraItemEstoqueDto(repo.findAllBySupermercado(supermercado));
	}
	
	@GetMapping("/parceiros/supermercados/{idSupermercado}/estoque/{idEstoque}")
	public ItemEstoqueDTO porId(@PathVariable("idEstoque") Long idEstoque) {
		ItemEstoque estoque = repo.findById(idEstoque).orElseThrow(() -> new RecursoNaoEncontradoException());
		return itemEstoqueMapper.paraItemEstoqueDto(estoque);
	}
	
	@PostMapping("/parceiros/supermercados/{idSupermercado}/estoque/")
	public ItemEstoqueDTO adiciona(@RequestBody ItemEstoque itemEstoque) {
		return itemEstoqueMapper.paraItemEstoqueDto(itemEstoque);
	}

	@PutMapping("/parceiros/supermercados/{idSupermercado}/estoque//{id}")
	public ItemEstoqueDTO atualiza(@RequestBody ItemEstoque itemEstoque) {
		return itemEstoqueMapper.paraItemEstoqueDto(itemEstoque);
	}

	@DeleteMapping("/supermercados/{idSupermercado}/estoque/{id}")
	public void remove(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	@GetMapping("/parceiros/supermercados/{idSupermercado}/estoque//{id}")
	public ItemEstoqueDTO itemEstoquePorId(@PathVariable("id") Long id) {
		ItemEstoque itemEstoque = repo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return itemEstoqueMapper.paraItemEstoqueDto(itemEstoque); 
	}
	
	@GetMapping("/parceiros/supermercados/{idSupermercado}/estoque/{nome}")
	public List<ItemEstoqueDTO> buscarPorNome(@PathVariable("nome") String nome) {
		return itemEstoqueMapper.paraItemEstoqueDto(repo.findByNomeContainingIgnoreCase(nome));
	}

}
