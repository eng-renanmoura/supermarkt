package com.supermarkt.seguranca;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/autenticacao")
@AllArgsConstructor
public class AutenticacaoApi {
	
	private AuthenticationManager authManager;
	private GerenciadorJwtToken gerenciadorJwtToken;
	private UsuarioServico usuarioServico;
	private List<AutorizacaoTargetServico> autorizacaoTargetServicos;
	
	@PostMapping
	public ResponseEntity<AutenticacaoDto> authenticate(@RequestBody UsuarioDto login) {
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				login.getUsername(), login.getPassword());

		try {
			Authentication authentication = authManager.authenticate(authenticationToken);
			Usuario usuario = (Usuario) authentication.getPrincipal();
			String jwt = gerenciadorJwtToken.gerarToken(usuario);
			Long targetId = getTargetIdFor(usuario);
			AutenticacaoDto tokenResponse = new AutenticacaoDto(usuario, jwt, targetId);
			return ResponseEntity.ok(tokenResponse);
		} catch (AuthenticationException e) {
			return ResponseEntity.badRequest().build();
		}

	}
	
	@PostMapping("/supermercado")
	public Long register(@RequestBody UsuarioDto usuarioDto) {
		Usuario usuario = usuarioDto.toUsuario();
		usuario.addRole(Role.ROLES.SUPERMERCADO);
		Usuario salvo = usuarioServico.salvar(usuario);
		return salvo.getId();
	}

	private Long getTargetIdFor(Usuario usuario) {
		for (AutorizacaoTargetServico autorizacaoTargetServico : autorizacaoTargetServicos) {
			Long targetId = autorizacaoTargetServico.getTargetIdByUser(usuario);
			if (targetId != null) {
				return targetId;
			}
		}
		return null;
	}
}
