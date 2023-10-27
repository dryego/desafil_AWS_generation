const teste = async (req, res) => {
  res.status(200).json({ mensagem: "tudo OK!" });
};

module.exports = teste;
