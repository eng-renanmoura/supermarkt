CREATE TABLE supermercado_forma_de_pagamento (
  supermercado_id bigint(20) NOT NULL,
  forma_de_pagamento_id bigint(20) NOT NULL,
  FOREIGN KEY (supermercado_id) REFERENCES supermercado(id),
  FOREIGN KEY (forma_de_pagamento_id) REFERENCES forma_de_pagamento(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
