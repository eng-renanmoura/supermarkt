package com.supermarkt.supermercado;

import com.supermarkt.seguranca.AutorizacaoTargetServico;
import com.supermarkt.seguranca.Role;
import com.supermarkt.seguranca.Usuario;

public class SupermercadoAuthorizationTargetService implements AutorizacaoTargetServico {
	
	private SupermercadoRepositorio supermercadoRepo;

	@Override
	public Long getTargetIdByUser(Usuario usuario) {
		if (usuario.isInRole(Role.ROLES.SUPERMERCADO)) {
			Supermercado supermercado = supermercadoRepo.findByUsuario(usuario);
			if (supermercado != null) {
				return supermercado.getId();
			}
		}
		return null;
	}

}
