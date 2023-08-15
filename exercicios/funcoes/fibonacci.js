
const criarSequencia = (numero) => {
  const listaFibonacci = [0, 1];

  for (let i = 2; i <= numero; i++) {
    let num = listaFibonacci[i - 1] + listaFibonacci[i - 2];
    listaFibonacci.push(num);
  }
  return listaFibonacci;
}

console.log(criarSequencia(5));
console.log(criarSequencia(12));
console.log(criarSequencia(25));


