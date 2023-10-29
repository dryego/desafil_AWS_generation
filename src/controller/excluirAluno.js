const knex = require("../connections/knex");
const { buscarAlunoID } = require("../util/fumcaoBuscas");

const excluirAluno = async (req, res) => {
  const { id } = req.params;

  try {
    if ((await buscarAlunoID(id)) === undefined) {
      return res.status(400).json({ menssagem: "Aluno não localizado." });
    }
    await knex("alunos").del().where({ id });
    return res.json({ menssagem: "Aluno excluido com sucesso!" });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = excluirAluno;
