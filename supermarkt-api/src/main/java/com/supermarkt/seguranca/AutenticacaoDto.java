package com.supermarkt.seguranca;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AutenticacaoDto {
	
	private String username;
	private List<String> roles;
	private String token;
	private Long targetId;

	public AutenticacaoDto(Usuario usuario, String jwtToken, Long targetId) {
		this(usuario.getName(), usuario.getRoles(), jwtToken, targetId);
	}

}
