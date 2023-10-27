const knex = require("../connections/knex");

const buscaAlunoSala = async (req, res) => {
  const { sala } = req.body;
  try {
    const buscar = await knex("alunos").where({ sala }).returning("*");

    return res.json(buscar);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = buscaAlunoSala;
