package com.supermarkt.admin;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.supermarkt.excecao.RecursoNaoEncontradoException;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TipoPagamentoServico {
	
	private final TipoPagamentoRepositorio tipoPagamentoRepo;
	private final TipoPagamentoMapper tipoPagamentoMapper;
	
	public List<TipoPagamentoDTO> listaTodos() {
		return tipoPagamentoMapper.paraTipoPagamentoDto(tipoPagamentoRepo.findAllByOrderByNomeAsc());
	}
	
	public List<FormaPagamentoDTO> formas() {
		return Arrays.asList(TipoPagamento.Forma.values()).stream()
				.map(forma -> new FormaPagamentoDTO(forma)).collect(Collectors.toList());
	}
	
	public TipoPagamentoDTO adiciona(TipoPagamentoDTO tipoPagamentoDto) {
		TipoPagamento tipoPagamento = tipoPagamentoMapper.paraTipoPagamento(tipoPagamentoDto);
		return tipoPagamentoMapper.paraTipoPagamentoDto(tipoPagamentoRepo.save(tipoPagamento));
	}

	public TipoPagamentoDTO atualiza(TipoPagamentoDTO tipoPagamentoDto) {
		TipoPagamento tipoPagamento = tipoPagamentoMapper.paraTipoPagamento(tipoPagamentoDto);
		return tipoPagamentoMapper.paraTipoPagamentoDto(tipoPagamentoRepo.save(tipoPagamento));
	}
	
	public void remove(Long id) {
		tipoPagamentoRepo.deleteById(id);
	}
	
	public TipoPagamentoDTO tipoPorId(Long id) {
		TipoPagamento tipoPagamento = tipoPagamentoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return tipoPagamentoMapper.paraTipoPagamentoDto(tipoPagamento);
	}
	
	public List<TipoPagamentoDTO> buscarPorNome(String nome) {
		return tipoPagamentoMapper.paraTipoPagamentoDto(tipoPagamentoRepo.findByNomeContainingIgnoreCase(nome));
	}

}
