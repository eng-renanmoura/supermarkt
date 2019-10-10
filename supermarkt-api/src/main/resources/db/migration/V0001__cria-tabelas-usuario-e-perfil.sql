CREATE TABLE usuario (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  senha varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(nome)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE perfil (
  autoridade varchar(255) NOT NULL,
  PRIMARY KEY (autoridade)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE usuario_perfis (
  usuario_id bigint(20) NOT NULL,
  perfis_autoridade varchar(255) NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id),
  FOREIGN KEY (perfis_autoridade) REFERENCES perfil(autoridade)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
