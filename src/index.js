require("dotenv").config();
const express = require("express");

const rotasAluno = require("./router/rotasAluno");

const app = express();

app.use(express.json());

app.use("/aluno", rotasAluno);

app.listen(process.env.PORT, console.log("Servidor Inicializado..."));
