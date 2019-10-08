package distancia;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
class SupermercadoComDistanciaDto {

	private Long restauranteId;

	private BigDecimal distancia;

}
