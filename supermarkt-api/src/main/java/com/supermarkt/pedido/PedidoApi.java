package com.supermarkt.pedido;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.supermarkt.excecao.RecursoNaoEncontradoException;
import com.supermarkt.supermercado.SupermercadoDto;
import com.supermarkt.supermercado.SupermercadoRepositorio;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
class PedidoApi {

	private PedidoRepositorio repo;
	private AvaliacaoRepositorio avaliacaoRepo;
	private SupermercadoRepositorio supermercadoRepo;
	private SimpMessagingTemplate websocket;
	private PedidoMapper pedidoMapper;

	
	@GetMapping("/pedidos")
	public List<PedidoDto> lista() {
		return pedidoMapper.paraPedidoDto(repo.findAll());
	}

	@GetMapping("/pedidos/{id}")
	public PedidoDto porId(@PathVariable("id") Long id) {
		Pedido pedido = repo.findById(id).orElseThrow(() -> new RecursoNaoEncontradoException());
		return pedidoMapper.paraPedidoDto(pedido);
	}

	@PostMapping("/pedidos")
	public PedidoDto adiciona(@RequestBody Pedido pedido) {
		pedido.setDataHora(LocalDateTime.now());
		pedido.setSituacao(Pedido.Situacao.REALIZADO);
		pedido.getItens().forEach(item -> item.setPedido(pedido));
		pedido.getEntrega().setPedido(pedido);
		Pedido salvo = repo.save(pedido);
		return pedidoMapper.paraPedidoDto(salvo);
	}

	@PutMapping("/pedidos/{id}/situacao")
	public PedidoDto atualizaStatus(@RequestBody Pedido pedido) {
		repo.atualizaStatus(pedido.getSituacao(), pedido);
		websocket.convertAndSend("/pedidos/"+pedido.getId()+"/situacao", pedido);
		return pedidoMapper.paraPedidoDto(pedido);
	}

	@GetMapping("/parceiros/supermercados/{supermercadoId}/pedidos/pendentes")
	public List<PedidoDto> pendentes(@PathVariable("supermercadoId") Long supermercadoId) {
		return pedidoMapper.paraPedidoDto(repo.doSupermercadoSemSituacao(supermercadoId, Arrays.asList(Pedido.Situacao.REALIZADO, Pedido.Situacao.ENTREGUE)));
	}
	
	@GetMapping("/pedidos/supermercados-avaliados")
	public List<SupermercadoComAvaliacaoDto> listaSupermercadosAvaliados(){
		List<SupermercadoDto> supermercados = supermercadoRepo.findAll().stream().map(supermercado -> new SupermercadoDto(supermercado)).collect(Collectors.toList());
		List<SupermercadoComAvaliacaoDto> supermercadosComAvaliacaoDto = new ArrayList<SupermercadoComAvaliacaoDto>();
		for (SupermercadoDto supermercado : supermercados) {
			Double media = avaliacaoRepo.mediaDoSupermercadoPeloId(supermercado.getId());
			SupermercadoComAvaliacaoDto superComAvaliacao = new SupermercadoComAvaliacaoDto(supermercado, media);
			supermercadosComAvaliacaoDto.add(superComAvaliacao);
		}
		return supermercadosComAvaliacaoDto;
	}
	
	@GetMapping("/pedidos/supermercado-avaliado/{supermercadoId}")
	public SupermercadoComAvaliacaoDto supermercadosAvaliados(@PathVariable("supermercadoId") Long supermercadoId){
		SupermercadoDto supermercado =  new SupermercadoDto(supermercadoRepo.findById(supermercadoId).get());
		Double media = avaliacaoRepo.mediaDoSupermercadoPeloId(supermercado.getId());
		SupermercadoComAvaliacaoDto superComAvaliacao = new SupermercadoComAvaliacaoDto(supermercado, media);
		superComAvaliacao.setSupermercado(supermercado);
		superComAvaliacao.setMediaDasAvaliacoes(media);
		return superComAvaliacao;
	}

}
