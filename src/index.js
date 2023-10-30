require("dotenv").config();
const express = require("express");
// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./util/swagger.json");

const rotasAluno = require("./router/rotasAluno");

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (res, req) => res.json({ Menssagem: "tudo OK!" }));

app.use("/aluno", rotasAluno);

app.listen(process.env.PORT, console.log("Servidor Inicializado..."));
