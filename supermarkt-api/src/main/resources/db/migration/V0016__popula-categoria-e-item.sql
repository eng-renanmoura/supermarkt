INSERT INTO categoria (id, nome) values (1, 'BEBIDAS');
INSERT INTO categoria (id, nome) values (2, 'LIMPEZA');
INSERT INTO categoria (id, nome) values (3, 'HIGIENE PESSOAL');
INSERT INTO categoria (id, nome) values (4, 'PAPELARIA');
INSERT INTO categoria (id, nome) values (5, 'LATICÍNIOS');
INSERT INTO categoria (id, nome) values (6, 'ENLATADOS');

-- BEBIDAS
INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (1, 'Cerveja Heineken', 'Cerveja Heineken', 3.5, null, 1);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (2, 'Cerveja Bohemia', 'Cerveja Bohemia', 3.9, 2.9, 1);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (3, 'Refrigerante Coca-cola', 'Refrigerante Coca-cola', 2.9, null, 1);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (4, 'Refrigerante Jesus', 'Refrigerante Jesus', 2.9, null, 1);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (5, 'Suco Del Vale', 'Suco Del Vale', 4.9, null, 1);


-- LIMPEZA
INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (6, 'Detergente Ypê', 'Detergente Ypê', 1.9, 1.5, 2);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (7, 'Sabão em Pó Omo', 'Sabão em Pó Omo', 8.9, null, 2);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (8, 'Limpa Vidro Veja', 'Limpa Vidro Veja', 6.9, null, 2);

-- HIGIENE PESSOAL
INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (9, 'Pasta de Dente Colgate', null, 5.9, null, 3);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (10, 'Shampoo Dove', null, 5.9, null, 3);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (11, 'Sabonete Jhonson&Jhonson', null, 6.9, null, 3);

-- PAPELARIA
INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (12, 'Caderno Universitário Tilibra', null, 15.9, null, 4);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (13, 'Caneta Bic Azul', null, 1.10, null, 4);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (14, 'Lápis Faber Castell', null, 6.9, null, 4);

-- LATICÍNIOS
INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (15, 'Iogurte Natural Danone', null, 3.9, null, 5);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (16, 'Manteiga com sal Italac', null, 5.10, null, 5);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (17, 'Queijo Minas Tirolez', null, 20.9, null, 5);

-- ENLATADOS
INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (18, 'Milho Verde Quero', null, 5.9, null, 6);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (19, 'Sardinha em Óleo Coqueiro', null, 2.40, null, 6);

INSERT INTO item (
  id,
  nome,
  descricao,
  preco,
  preco_promocional,
  categoria_id
) values (20, 'Molho de Tomate Pomarola', null, 4.35, null, 6);