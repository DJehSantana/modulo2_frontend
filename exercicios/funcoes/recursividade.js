// sem recursividade
const calculaFatorial = (numero) => {
  let num = 1;
  for (i = 1; i <= numero; i++) {
    num *= i;
  }
  console.log(num);
}
calculaFatorial(10);

//com recursividade
const calculaFatorialRecursivo = (numero) => {
  if (numero < 0) {
    return null;
  }
  return numero <= 1 ? 1 : numero * calculaFatorialRecursivo(--numero);
}

console.log(calculaFatorialRecursivo(3));