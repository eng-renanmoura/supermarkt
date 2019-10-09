insert into role(authority) values ('PERFIL_ADMIN');
insert into role(authority) values ('PERFIL_SUPERMERCADO');

-- senha: 123456
insert into user (id, name, password) values (1, 'admin', '$2a$10$3Qrx0rv8qSmZ8s3RlD5qE.upleP7.Qzbg5EoIAm62evEkY4c023TK');
insert into user (id, name, password) values (2, 'lider', '$2a$10$3Qrx0rv8qSmZ8s3RlD5qE.upleP7.Qzbg5EoIAm62evEkY4c023TK');
insert into user (id, name, password) values (3, 'formosa', '$2a$10$3Qrx0rv8qSmZ8s3RlD5qE.upleP7.Qzbg5EoIAm62evEkY4c023TK');
insert into user (id, name, password) values (4, 'nazare', '$2a$10$3Qrx0rv8qSmZ8s3RlD5qE.upleP7.Qzbg5EoIAm62evEkY4c023TK');

insert into user_authorities (usuario_id, authorities_authority) values (1, 'PERFIL_ADMIN');
insert into user_authorities (usuario_id, authorities_authority) values (2, 'PERFIL_SUPERMERCADO');
insert into user_authorities (usuario_id, authorities_authority) values (3, 'PERFIL_SUPERMERCADO');
insert into user_authorities (usuario_id, authorities_authority) values (4, 'PERFIL_SUPERMERCADO');

update supermercado s set s.usuario_id = 2 where s.id = 1;
update supermercado s set s.usuario_id = 3 where s.id = 2;
update supermercado s set s.usuario_id = 4 where s.id = 3;
