package br.com.supermarkt.seguranca;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Perfil implements GrantedAuthority {

	private static final long serialVersionUID = 1L;

	public static enum PERFIS {
		ADMIN, SUPERMERCADO;
		public String asAuthority() {
			return "PERFIL_" + name();
		}
	}

	@Id
	private String authority;

	public String getPerfil() {
		return authority.replace("PERFIL_", "");
	}
}
