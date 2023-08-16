const { Clientes, Carros } = require("./Db.js");
const { categoriaCarros, diasDaSemana } = require("./enums.js");
const montarCorpoEmail = require("./funcoesAuxiliares/corpoEmail.js");
const sendEmail = require("./funcoesAuxiliares/sendEmail.js");
const verificaDiaSemana = require("./funcoesAuxiliares/verificaDiaSemana.js");
const verificaMes = require("./funcoesAuxiliares/verificaMes.js");

const listaEmailClientes = [];
const hoje = new Date();

//Cria uma lista com os carros das categorias "novos" e "mais vendidos"
const listaCarros = Carros.filter(carro => {
  return carro.categoria.some(cat => cat.includes(categoriaCarros.MAISVENDIDOS) || cat.includes(categoriaCarros.NOVOS));
});

//Preenche a lista de emails com os emails dos clientes que atendem as condicoes
Clientes.forEach(cliente => {

  const visitouLojaUltimoMes = verificaMes(cliente.ultimaVisita);
  const receberComunicacoes = cliente.desejaReceberComunicacao;

  const email = cliente.email;

  if (visitouLojaUltimoMes && receberComunicacoes) {
    listaEmailClientes.push(email);
  }
});

const diaSemana = verificaDiaSemana(hoje);

if (diaSemana == diasDaSemana[3]) {
  const body = montarCorpoEmail(listaCarros);

  listaEmailClientes.forEach(email => {
    sendEmail(email, "OFERTAS DO MÊS", body);
  });
}


