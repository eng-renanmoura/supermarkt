insert into perfil(autoridade) values ('PERFIL_ADMIN');
insert into perfil(autoridade) values ('PERFIL_SUPERMERCADO');

-- senha: 123456
insert into usuario (id, nome, senha) values (1, 'admin', '$2a$10$3Qrx0rv8qSmZ8s3RlD5qE.upleP7.Qzbg5EoIAm62evEkY4c023TK');
insert into usuario (id, nome, senha) values (2, 'lider', '$2a$10$3Qrx0rv8qSmZ8s3RlD5qE.upleP7.Qzbg5EoIAm62evEkY4c023TK');
insert into usuario (id, nome, senha) values (3, 'formosa', '$2a$10$3Qrx0rv8qSmZ8s3RlD5qE.upleP7.Qzbg5EoIAm62evEkY4c023TK');
insert into usuario (id, nome, senha) values (4, 'nazare', '$2a$10$3Qrx0rv8qSmZ8s3RlD5qE.upleP7.Qzbg5EoIAm62evEkY4c023TK');

insert into usuario_perfis (usuario_id, perfis_autoridade) values (1, 'PERFIL_ADMIN');
insert into usuario_perfis (usuario_id, perfis_autoridade) values (2, 'PERFIL_SUPERMERCADO');
insert into usuario_perfis (usuario_id, perfis_autoridade) values (3, 'PERFIL_SUPERMERCADO');
insert into usuario_perfis (usuario_id, perfis_autoridade) values (4, 'PERFIL_SUPERMERCADO');

update supermercado s set s.usuario_id = 2 where s.id = 1;
update supermercado s set s.usuario_id = 3 where s.id = 2;
update supermercado s set s.usuario_id = 4 where s.id = 3;
