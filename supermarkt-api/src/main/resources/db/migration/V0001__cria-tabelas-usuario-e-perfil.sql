CREATE TABLE usuario (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  senha varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(nome)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE perfil (
  authority varchar(255) NOT NULL,
  PRIMARY KEY (authority)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE user_authorities (
  usuario_id bigint(20) NOT NULL,
  authorities_authority varchar(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES usuario(id),
  FOREIGN KEY (authorities_authority) REFERENCES perfil(authority)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
