const express = require("express");
const novoAluno = require("../controller/cadastroAluno");
const detalharAluno = require("../controller/detalharAluno");
const buscaAlunoSala = require("../controller/buscaAlunoSala");

const rotas = express.Router();

rotas.post("/cadastro", novoAluno);
rotas.get("/:id", detalharAluno);
rotas.get("/", buscaAlunoSala);

module.exports = rotas;
