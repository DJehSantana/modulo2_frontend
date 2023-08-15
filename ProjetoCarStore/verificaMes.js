const verificaMes = (data) => {
  const hoje = new Date();
  const mesAtual = hoje.getMonth();

  //Retornará o booleano resultante da comparação
  return mesAtual == data.getMonth();
}

module.exports = verificaMes;