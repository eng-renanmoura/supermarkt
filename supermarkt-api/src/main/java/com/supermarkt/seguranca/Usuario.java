package com.supermarkt.seguranca;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotBlank;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Usuario implements UserDetails {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank @JsonIgnore
	private String nome;

	@NotBlank @JsonIgnore
	private String senha;

	@ManyToMany(fetch = FetchType.EAGER) @JsonIgnore
	private List<Perfil> perfis = new ArrayList<>();
	
	public Usuario(String nome, String senha) {
		this.nome = nome;
		this.senha = senha;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return perfis;
	}
	
	public List<String> getPerfis() {
		return perfis.stream().map(Perfil::getPerfil).collect(Collectors.toList());
	}

	@Override
	public String getPassword() {
		return senha;
	}

	@Override
	public String getUsername() {
		return nome;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public boolean isInPerfil(Perfil.PERFIS perfil) {
		return getPerfis().contains(perfil.name());
	}

	public void addPerfil(Perfil.PERFIS perfil) {
		this.perfis.add(new Perfil(perfil.asAuthority()));
	}

}



