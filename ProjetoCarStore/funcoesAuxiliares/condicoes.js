const { categoriaCarros } = require("../enums")

const condicoes = (categoria, valor) => {

  try {

    if (!categoria.includes(categoriaCarros.NOVOS) && !categoria.includes(categoriaCarros.MAISVENDIDOS)) {
      throw new Error("Favor inserir uma categoria válida!");
    }

    let condicaoFinanciamento;

    if (categoria.includes(categoriaCarros.NOVOS)) {
      const parcelas = 72;
      //calcula juros de 1,1% por parcela
      const juros = (valor * ((parcelas * 1.1) / 100));
      const valorTotal = valor + juros;
      const valorParcelas = ((valorTotal / parcelas).toFixed(2)).replace(".", ",");

      condicaoFinanciamento = {
        entrada: "ZERO",
        financiamento: `R$ ${valorParcelas} x ${parcelas}`,
      }

    } else if (categoria.includes(categoriaCarros.MAISVENDIDOS)) {
      const parcelas = 60;
      //calcula juros de 0.8% por parcela
      const juros = (valor * ((parcelas * 0.8) / 100));
      const entrada = Math.round((valor * 0.15)).toFixed(2);
      const valorTotal = valor - entrada + juros;
      const valorParcelas = ((valorTotal / parcelas).toFixed(2)).replace(".", ",");

      condicaoFinanciamento = {
        entrada: `R$ ${entrada.replace(".", ",")}`,
        financiamento: `R$ ${valorParcelas} x ${parcelas}`
      }
    }

    return condicaoFinanciamento;

  } catch (error) {
    console.log(error.message);
  }

}
module.exports = condicoes;