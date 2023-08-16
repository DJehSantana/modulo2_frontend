const { diasDaSemana } = require("../enums");

const verificaDiaSemana = (hoje) => {

  //Ajustando a data com o timezone da máquina
  const timezone = hoje.getTimezoneOffset();
  hoje.setMinutes(hoje.getMinutes() - timezone);

  const dia = hoje.getDay();

  return diasDaSemana[dia];
}

module.exports = verificaDiaSemana;
