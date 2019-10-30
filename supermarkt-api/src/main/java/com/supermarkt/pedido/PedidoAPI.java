package com.supermarkt.pedido;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.supermarkt.excecao.RecursoNaoEncontradoException;
import com.supermarkt.supermercado.SupermercadoDTO;
import com.supermarkt.supermercado.SupermercadoMapper;
import com.supermarkt.supermercado.SupermercadoRepositorio;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
class PedidoAPI {

	private PedidoRepositorio repo;
	private AvaliacaoRepositorio avaliacaoRepo;
	private SupermercadoRepositorio supermercadoRepo;
	private SimpMessagingTemplate websocket;
	private PedidoMapper pedidoMapper;
	private SupermercadoMapper supermercadoMapper;

	@GetMapping("/pedidos")
	public List<PedidoDTO> lista() {
		return pedidoMapper.paraPedidoDto(repo.findAll());
	}

	@GetMapping("/pedidos/{id}")
	public PedidoDTO porId(@PathVariable("id") Long id) {
		Pedido pedido = repo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return pedidoMapper.paraPedidoDto(pedido);
	}

	@PostMapping("/pedidos")
	public PedidoDTO adiciona(@RequestBody Pedido pedido) {
		pedido.setDataHora(LocalDateTime.now());
		pedido.setSituacao(Pedido.Situacao.REALIZADO);
		pedido.getItens().forEach(item -> item.setPedido(pedido));
		pedido.getEntrega().setPedido(pedido);
		Pedido salvo = repo.save(pedido);
		return pedidoMapper.paraPedidoDto(salvo);
	}

	@PutMapping("/pedidos/{id}/situacao")
	public PedidoDTO atualizaStatus(@RequestBody Pedido pedido) {
		repo.atualizaStatus(pedido.getSituacao(), pedido);
		websocket.convertAndSend("/pedidos/"+pedido.getId()+"/situacao", pedido);
		return pedidoMapper.paraPedidoDto(pedido);
	}

	@GetMapping("/parceiros/supermercados/{supermercadoId}/pedidos/pendentes")
	public List<PedidoDTO> pendentes(@PathVariable("supermercadoId") Long supermercadoId) {
		return pedidoMapper.paraPedidoDto(repo.doSupermercadoSemSituacao(supermercadoId, Arrays.asList(Pedido.Situacao.REALIZADO, Pedido.Situacao.ENTREGUE)));
	}
	
	@GetMapping("/pedidos/supermercados-avaliados")
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
	
	@GetMapping("/pedidos/supermercado-avaliado/{supermercadoId}")
	public SupermercadoComAvaliacaoDTO supermercadosAvaliados(@PathVariable("supermercadoId") Long supermercadoId){
		SupermercadoDTO supermercado =  supermercadoMapper.paraSupermercadoDto(supermercadoRepo.findById(supermercadoId).get());
		Double media = avaliacaoRepo.mediaDoSupermercadoPeloId(supermercado.getId());
		SupermercadoComAvaliacaoDTO superComAvaliacao = new SupermercadoComAvaliacaoDTO(supermercado, media);
		superComAvaliacao.setSupermercado(supermercado);
		superComAvaliacao.setMediaDasAvaliacoes(media);
		return superComAvaliacao;
	}

}
