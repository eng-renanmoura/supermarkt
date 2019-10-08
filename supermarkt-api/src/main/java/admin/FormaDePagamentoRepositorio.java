package admin;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

interface FormaDePagamentoRepositorio extends JpaRepository<FormaDePagamento, Long> {

	List<FormaDePagamento> findAllByOrderByNomeAsc();

}
