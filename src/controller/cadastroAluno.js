const knex = require("../connections/knex");

const novoAluno = async (req, res) => {
  const { nome, nota1, nota2, professor, sala } = req.body;

  try {
    await knex("alunos").insert({
      nome,
      nota1,
      nota2,
      professor,
      sala,
    });
    return res
      .status(201)
      .json({ mensagem: "Cadastro realizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ menssagem: "Erro interno no servidor." });
  }
};

module.exports = novoAluno;
