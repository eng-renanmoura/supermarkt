package com.supermarkt.admin;

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
class ItemApi {

	private ItemRepositorio repo;

	@PostMapping("/parceiros/supermercados/{idSupermercado}/categoria/{idCategoria}/item")
	public ItemDto adicionaItem(@RequestBody Item item) {
		return new ItemDto(repo.save(item));
	}

	@PutMapping("/parceiros/supermercados/{idSupermercado}/categoria/{idCategoria}/item/{idItem}")
	public ItemDto atualizaItem(@RequestBody Item item) {
		return new ItemDto(repo.save(item));
	}

	@GetMapping("/parceiros/supermercados/{idSupermercado}/categoria/{idCategoria}/item/{idItem}")
	public ItemDto itemPorId(@PathVariable("idItem") Long idItem) {
		Item item = repo.findById(idItem).orElseThrow(() -> new RecursoNaoEncontradoException());
		return new ItemDto(item);
	}

	@DeleteMapping("/parceiros/supermercados/{idSupermercado}/categoria/{idCategoria}/item/{idItem}")
	public void removeItem(@PathVariable("idItem") Long idItem) {
		repo.deleteById(idItem);
	}

}
