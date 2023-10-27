create database desafil_aws;

create table alunos (
	id serial primary key,
  nome varchar(235) not null,
	nota1 char(10) not null,
  nota2 char(10) not null,
  professor varchar(235) not null,
  sala char (10) not null
);