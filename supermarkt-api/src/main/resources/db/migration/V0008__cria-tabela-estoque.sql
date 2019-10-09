CREATE TABLE estoque (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  quantidade int(11) NOT NULL,
  supermercado_id bigint(20) NOT NULL,
  item_id bigint(20) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (supermercado_id) REFERENCES supermercado(id),
  FOREIGN KEY (item_id) REFERENCES item(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
