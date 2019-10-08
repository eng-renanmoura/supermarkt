package supermercado;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.supermarkt.seguranca.Usuario;

public interface SupermercadoRepositorio extends JpaRepository<Supermercado, Long>{

	Supermercado findByUsuario(Usuario usuario);
	
	List<Supermercado> findAllByAprovado(boolean aprovado);

	Page<Supermercado> findAllByAprovado(boolean aprovado, Pageable limit);

	@Modifying(clearAutomatically = true)
	@Query("update Supermercado s set s.aprovado = true where s.id = :id")
	void aprovaPorId(@Param("id") Long id);
}
