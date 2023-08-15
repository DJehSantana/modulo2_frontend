const somaImposto = (custo, taxa) => {
  if (!custo || !taxa) {
    return "Informe parâmetros válidos!"
  }

  let valorComImposto = custo + (custo * (taxa / 100));

  return {
    custo: custo.toFixed(2),
    taxa: taxa + "%",
    valorComImposto: valorComImposto.toFixed(2)
  }
}

console.log(somaImposto(155.60, 12.5));
console.log(somaImposto(1278.80, 7.5));