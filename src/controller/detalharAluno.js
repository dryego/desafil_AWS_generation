const knex = require("../connections/knex");

const detalharAluno = async (req, res) => {
  const { id } = req.params;

  try {
    const buscarAluno = await knex("alunos").where({ id }).returning("*");

    return res.json(buscarAluno);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = detalharAluno;
