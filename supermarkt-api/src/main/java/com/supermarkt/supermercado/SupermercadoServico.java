package com.supermarkt.supermercado;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.supermarkt.excecao.RecursoNaoEncontradoException;

import lombok.RequiredArgsConstructor;
import lombok.experimental.Delegate;

@Service
@RequiredArgsConstructor
public class SupermercadoServico {
	
	@Delegate
	private final SupermercadoRepositorio supermercadoRepo;
	private final SupermercadoMapper supermercadoMapper;

	public List<SupermercadoDTO> lista() {
		return supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findAllByOrderByNomeAsc());
	}
	
	public List<SupermercadoDTO> buscarPorNome(String nome) {
		return supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findByNomeContainingIgnoreCase(nome));
	}
	
	public SupermercadoDTO detalha(Long id) {
		Supermercado supermercado = supermercadoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return supermercadoMapper.paraSupermercadoDto(supermercado);
	}
	
	public List<SupermercadoDTO> detalhePorIds(List<Long> ids) {
		return supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findAllById(ids));
	}
	
	public void remove(Long id) {
		supermercadoRepo.deleteById(id);
	}
	
	public SupermercadoDTO detalhaParceiro(Long id) {
		Supermercado supermercado = supermercadoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return supermercadoMapper.paraSupermercadoDto(supermercado);
	}

	public Supermercado adiciona(Supermercado supermercado) {
		supermercado.setAprovado(false);
		Supermercado supermercadoSalvo = supermercadoRepo.save(supermercado);
		return supermercadoSalvo;
	}

	public Supermercado atualiza(Supermercado supermercado) {
		Supermercado doBD = supermercadoRepo.getOne(supermercado.getId());
		supermercado.setUsuario(doBD.getUsuario());
		return supermercadoRepo.save(supermercado);
	}

	public List<SupermercadoDTO> emAprovacao() {
		return supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findAllByAprovado(false));
	}

	@Transactional
	public void aprova(Long id) {
		supermercadoRepo.aprovaPorId(id);
	}

}
