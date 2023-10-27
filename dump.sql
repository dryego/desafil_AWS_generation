create database desafio_aws;

create table alunos (
	id serial primary key,
  nome varchar(235) not null,
	nota1 varchar(10) not null,
  nota2 varchar(10) not null,
  professor varchar(235) not null,
  sala char (10) not null
);