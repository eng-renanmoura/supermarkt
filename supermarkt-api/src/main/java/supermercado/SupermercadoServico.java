package supermercado;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.experimental.Delegate;

@Service
@AllArgsConstructor
public class SupermercadoServico {
	
	@Delegate
	SupermercadoRepositorio supermercadoRepositorio; 
	
}
