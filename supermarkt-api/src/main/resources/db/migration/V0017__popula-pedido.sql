INSERT INTO pedido (id, data_hora, situacao, supermercado_id) values (1, NOW(), 'ENTREGUE', 1);

INSERT INTO item_do_pedido (id, quantidade, estoque_id, pedido_id) values (1, 1, 4, 1);
INSERT INTO item_do_pedido (id, quantidade, estoque_id, pedido_id) values (2, 1, 8, 1);
