package br.com.supermarkt;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import br.com.supermarkt.seguranca.FiltroAutenticacaoJwt;
import br.com.supermarkt.seguranca.JwtAuthenticationEntryPoint;
import br.com.supermarkt.seguranca.Perfil;
import br.com.supermarkt.seguranca.UsuarioServico;
import lombok.AllArgsConstructor;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class ConfiguracaoSeguranca extends WebSecurityConfigurerAdapter {

	private UsuarioServico usuarioServico;
	private FiltroAutenticacaoJwt filtroAutenticacaoJwt;
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
			.antMatchers("/supermercados/**", "/pedidos/**", "/pagamentos/**", "/formas-de-pagamento/**").permitAll()
			.antMatchers("/socket/**").permitAll()
			.antMatchers("/autenticacao/**").permitAll()
			.antMatchers("/admin/**").hasRole(Perfil.PERFIS.ADMIN.name())
			.antMatchers(HttpMethod.POST, "/supermercados").permitAll()
			.antMatchers("/supermercados/{supermercadoId}/**").access("@authorizationService.checaTargetId(authentication,#supermercadoId)")
			.antMatchers("/supermercados/**").hasRole(Perfil.PERFIS.SUPERMERCADO.name())
			.anyRequest().authenticated()
			.and().cors()
			.and().csrf().disable()
			.formLogin().disable()
			.httpBasic().disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.addFilterBefore(filtroAutenticacaoJwt, UsernamePasswordAuthenticationFilter.class)
			.exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint);
	}
	
	@Override
	protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(usuarioServico).passwordEncoder(bCryptPasswordEncoder);
	}

	@Override
	@Bean(BeanIds.AUTHENTICATION_MANAGER)
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
}
