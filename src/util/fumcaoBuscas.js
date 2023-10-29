const knex = require("../connections/knex");

const buscarAlunoID = async (id) => {
  const aluno = await knex("alunos").where({ id }).first();
  return aluno;
};

module.exports = {
  buscarAlunoID,
};
