package com.supermarkt.supermercado;

import java.util.List;

import org.springframework.stereotype.Service;

import com.supermarkt.excecao.RecursoNaoEncontradoException;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ItemEstoqueServico {
	
	private final ItemEstoqueRepositorio repo;
	private final ItemEstoqueMapper itemEstoqueMapper;
	
	public List<ItemEstoqueDTO> estoqueDoSupermercado(Long idSupermercado) {
		Supermercado supermercado = new Supermercado();
		supermercado.setId(idSupermercado);
		return itemEstoqueMapper.paraItemEstoqueDto(repo.findAllBySupermercado(supermercado));
	}
	
	public ItemEstoqueDTO porId(Long idEstoque) {
		ItemEstoque estoque = repo.findById(idEstoque).orElseThrow(() -> new RecursoNaoEncontradoException());
		return itemEstoqueMapper.paraItemEstoqueDto(estoque);
	}
	
	public ItemEstoqueDTO adiciona(ItemEstoque itemEstoque) {
		return itemEstoqueMapper.paraItemEstoqueDto(itemEstoque);
	}

	public ItemEstoqueDTO atualiza(ItemEstoque itemEstoque) {
		return itemEstoqueMapper.paraItemEstoqueDto(itemEstoque);
	}

	public void remove(Long id) {
		repo.deleteById(id);
	}
	
	public ItemEstoqueDTO itemEstoquePorId(Long id) {
		ItemEstoque itemEstoque = repo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return itemEstoqueMapper.paraItemEstoqueDto(itemEstoque); 
	}
	
	public List<ItemEstoqueDTO> buscarPorNome(String nome) {
		return itemEstoqueMapper.paraItemEstoqueDto(repo.findByNomeContainingIgnoreCase(nome));
	}


}
