const condicoes = require("./condicoes");

const montarCorpoEmail = (listaCarros) => {

  let body = `\x1b[1m\n   Aproveite as condições imperdíveis da CarStore e compre agora mesmo seu carro novo!\x1b[0m\n`;

  //Adiciona ao corpo do email as condicoes de financiamento de cada carro da lista
  listaCarros.forEach(carro => {
    let condicao = condicoes(carro.categoria, carro.preco);

    body = body +=
      `
      \x1b[34m${carro.modelo} - ${carro.ano}\x1b[0m
      Entrada: ${condicao.entrada}
      Financiamento: ${condicao.financiamento}      
    `
  });

  return body;
}

module.exports = montarCorpoEmail;