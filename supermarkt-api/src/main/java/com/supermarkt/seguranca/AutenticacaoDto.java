package com.supermarkt.seguranca;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AutenticacaoDto {
	
	private String usuario;
	private List<String> perfis;
	private String token;
	private Long targetId;
	
	public AutenticacaoDto(Usuario usuario, String jwtToken, Long targetId) {
		this(usuario.getNome(), usuario.getPerfis(), jwtToken, targetId);
	}

}
