-- Líder
INSERT INTO supermercado (id, aprovado, cnpj, nome, descricao, cep, endereco, taxa_de_entrega_em_reais, tempo_de_entrega_minimo_em_minutos, tempo_de_entrega_maximo_em_minutos)
values (1, true, '26685813000156', 'Líder Praça Brasil', 'Líder em preços baixos', '66050100', 'R. Ferreira Pena, 1083 - Umarizal' , 9, 25, 40);

INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 1);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 2);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 3);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 4);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 5);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (1, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (2, 'Cerveja Bohemia', 'Cerveja Bohemia 350ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (3, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (4, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (5, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (6, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (7, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (8, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (9, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (10, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (11, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 1);


-- Formosa
INSERT INTO supermercado (id, aprovado, cnpj, nome, descricao, cep, endereco, taxa_de_entrega_em_reais, tempo_de_entrega_minimo_em_minutos, tempo_de_entrega_maximo_em_minutos)
values (2, true, '47446715000136', 'Formosa Umarizal', 'Todo dia as melhores ofertas', '66050080', 'R. Curuçá, 580 - Telégrafo' , 7, 30, 50);

INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 1);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 2);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 3);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 4);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 5);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (12, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (13, 'Cerveja Bohemia', 'Cerveja Bohemia 350ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (14, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (15, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (16, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (17, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (18, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (19, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (20, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (21, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (22, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 2);


-- Nazaré
INSERT INTO supermercado (id, aprovado, cnpj, nome, descricao, cep, endereco, taxa_de_entrega_em_reais, tempo_de_entrega_minimo_em_minutos, tempo_de_entrega_maximo_em_minutos)
values (3, true, '85714361000152', 'Nazaré Duque de Caxias', 'Lugar de comprar barato', '66093029', 'Av. Duque de Caxias, 1101 - Marco' , 12, 20, 60);

INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 1);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 2);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 3);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 4);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 5);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (23, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (24, 'Cerveja Bohemia', 'Cerveja Bohemia 350ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (25, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (26, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (27, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (28, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (29, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (30, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (31, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (32, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

INSERT INTO item_estoque (
  id,
  nome,
  descricao,
  quantidade,
  preco,
  preco_promocional,
  supermercado_id
) values (33, 'Cerveja Heineken', 'Cerveja Heineken 600ml', 10, 3.5, 2.5, 3);

