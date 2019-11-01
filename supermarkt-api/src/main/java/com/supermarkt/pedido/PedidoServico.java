package com.supermarkt.pedido;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.supermarkt.excecao.RecursoNaoEncontradoException;
import com.supermarkt.supermercado.SupermercadoDTO;
import com.supermarkt.supermercado.SupermercadoMapper;
import com.supermarkt.supermercado.SupermercadoRepositorio;

import lombok.RequiredArgsConstructor;
import lombok.experimental.Delegate;

@Service
@RequiredArgsConstructor
public class PedidoServico {

	@Delegate
	private final PedidoRepositorio pedidoRepo;
	private final AvaliacaoRepositorio avaliacaoRepo;
	private final SupermercadoRepositorio supermercadoRepo;
	private final SimpMessagingTemplate websocket;
	private final PedidoMapper pedidoMapper;
	private final SupermercadoMapper supermercadoMapper;
	
	public List<PedidoDTO> lista() {
		return pedidoMapper.paraPedidoDto(pedidoRepo.findAll());
	}

	public PedidoDTO porId(Long id) {
		Pedido pedido = pedidoRepo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return pedidoMapper.paraPedidoDto(pedido);
	}

	public PedidoDTO adiciona(PedidoDTO pedidoDto) {
		Pedido pedido = pedidoMapper.paraPedido(pedidoDto);
		pedido.setDataHora(LocalDateTime.now());
		pedido.setSituacao(Pedido.Situacao.REALIZADO);
		pedido.getItens().forEach(item -> item.setPedido(pedido));
		pedido.getEntrega().setPedido(pedido);
		Pedido salvo = pedidoRepo.save(pedido);
		return pedidoMapper.paraPedidoDto(salvo);
	}

	public PedidoDTO atualizaStatus(PedidoDTO pedidoDto) {
		Pedido pedido = pedidoMapper.paraPedido(pedidoDto);
		pedidoRepo.atualizaStatus(pedido.getSituacao(), pedido);
		websocket.convertAndSend("/pedidos/"+pedido.getId()+"/situacao", pedido);
		return pedidoMapper.paraPedidoDto(pedido);
	}

	public List<PedidoDTO> pendentes(Long supermercadoId) {
		return pedidoMapper.paraPedidoDto(pedidoRepo.doSupermercadoSemSituacao(supermercadoId, Arrays.asList(Pedido.Situacao.REALIZADO, Pedido.Situacao.ENTREGUE)));
	}
	
	public List<SupermercadoComAvaliacaoDTO> listaSupermercadosAvaliados(){
		List<SupermercadoDTO> supermercados = supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findAll());
		List<SupermercadoComAvaliacaoDTO> supermercadosComAvaliacaoDto = new ArrayList<SupermercadoComAvaliacaoDTO>();
		for (SupermercadoDTO supermercado : supermercados) {
			Double media = avaliacaoRepo.mediaDoSupermercadoPeloId(supermercado.getId());
			SupermercadoComAvaliacaoDTO superComAvaliacao = new SupermercadoComAvaliacaoDTO(supermercado, media);
			supermercadosComAvaliacaoDto.add(superComAvaliacao);
		}
		return supermercadosComAvaliacaoDto;
	}
	
	public SupermercadoComAvaliacaoDTO supermercadosAvaliados(Long supermercadoId){
		SupermercadoDTO supermercado =  supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findById(supermercadoId).get());
		Double media = avaliacaoRepo.mediaDoSupermercadoPeloId(supermercado.getId());
		SupermercadoComAvaliacaoDTO superComAvaliacao = new SupermercadoComAvaliacaoDTO(supermercado, media);
		superComAvaliacao.setSupermercado(supermercado);
		superComAvaliacao.setMediaDasAvaliacoes(media);
		return superComAvaliacao;
	}


}
