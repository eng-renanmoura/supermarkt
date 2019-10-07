package br.com.supermarkt.seguranca;

import lombok.Data;

@Data
public class UsuarioDto {

	private String nome;
	private String senha;
	
	public Usuario toUsuario() {
		return new Usuario(nome, senha);
	}

}
