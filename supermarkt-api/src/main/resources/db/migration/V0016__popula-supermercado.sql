-- Líder
INSERT INTO supermercado (id, aprovado, cnpj, nome, descricao, cep, endereco, taxa_de_entrega_em_reais, tempo_de_entrega_minimo_em_minutos, tempo_de_entrega_maximo_em_minutos)
values (1, true, '26685813000156', 'Líder Praça Brasil', 'Líder em preços baixos', '66050100', 'R. Ferreira Pena, 1083 - Umarizal' , 9, 25, 40);

INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 1);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 2);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 3);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 4);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (1, 5);

INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (1, 1, 50, 1, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (2, 1, 100, 2, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (3, 1, 90, 3, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (4, 1, 200, 4, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (5, 1, 60, 5, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (6, 1, 80, 6, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (7, 1, 50, 7, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (8, 1, 30, 8, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (9, 1, 500, 15, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (10, 1, 500, 17, 3.5, 2.5);


-- Formosa
INSERT INTO supermercado (id, aprovado, cnpj, nome, descricao, cep, endereco, taxa_de_entrega_em_reais, tempo_de_entrega_minimo_em_minutos, tempo_de_entrega_maximo_em_minutos)
values (2, true, '47446715000136', 'Formosa Umarizal', 'Todo dia as melhores ofertas', '66050080', 'R. Curuçá, 580 - Telégrafo' , 7, 30, 50);

INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 1);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 2);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 3);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 4);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (2, 5);

INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (11, 2, 50, 4, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (12, 2, 100, 7, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (13, 2, 90, 8, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (14, 2, 200, 9, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (15, 2, 60, 10, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (16, 2, 80, 13, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (17, 2, 50, 14, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (18, 2, 30, 15, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (19, 2, 500, 16, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (20, 2, 500, 19, 3.5, 2.5);

-- Nazaré
INSERT INTO supermercado (id, aprovado, cnpj, nome, descricao, cep, endereco, taxa_de_entrega_em_reais, tempo_de_entrega_minimo_em_minutos, tempo_de_entrega_maximo_em_minutos)
values (3, true, '85714361000152', 'Nazaré Duque de Caxias', 'Lugar de comprar barato', '66093029', 'Av. Duque de Caxias, 1101 - Marco' , 12, 20, 60);

INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 1);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 2);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 3);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 4);
INSERT INTO supermercado_forma_de_pagamento (supermercado_id, forma_de_pagamento_id) values (3, 5);

INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (21, 3, 50, 11, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (22, 3, 100, 12, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (23, 3, 90, 13, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (24, 3, 200, 14, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (25, 3, 60, 15, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (26, 3, 80, 16, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (27, 3, 50, 17, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (28, 3, 30, 18, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (29, 3, 500, 5, 3.5, 2.5);
INSERT INTO estoque (id, supermercado_id, quantidade, item_id, preco, preco_promocional) values (30, 3, 500, 20, 3.5, 2.5);

