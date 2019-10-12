package com.supermarkt.seguranca;

import lombok.Data;

@Data
public class UsuarioDto {

	private String username;
	private String password;
	
	public Usuario toUsuario() {
		return new Usuario(username, password);
	}

}
