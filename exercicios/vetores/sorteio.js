// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

const numerosSorteados = [];

while (numerosSorteados.length <= 6) {
  const numero = Math.round(Math.random() * 100);

  let numeroJaSorteado = false;
  //Logica para evitar numeros repetidos
  for (const num of numerosSorteados) {
    if (numero == num) {
      numeroJaSorteado = true
    }
  }

  if (numero <= 60 && !numeroJaSorteado && numero != 0) {
    numerosSorteados.push(numero.toLocaleString('pt-br', { minimumIntegerDigits: 2 }));
  }
}

console.log(numerosSorteados);