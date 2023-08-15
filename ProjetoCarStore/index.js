const { Clientes, Carros } = require("./Db.js");
const categoriaCarros = require("./enums.js");
const sendEmail = require("./sendEmail.js");
const verificaMes = require("./verificaMes.js");

const listaEmailClientes = [];

const listaCarros = Carros.filter(carro => {
  return carro.categoria.some(cat => cat.includes(categoriaCarros.MAISVENDIDOS || categoriaCarros.NOVOS))
});

console.log({ listaCarros });

Clientes.forEach(cliente => {
  const visitouLojaUltimoMes = verificaMes(cliente.ultimaVisita);
  const email = cliente.email;

  if (visitouLojaUltimoMes) {
    listaEmailClientes.push(email);
  }
});

console.log({ listaEmailClientes });

