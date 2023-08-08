// EXERCÍCIO
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pares = [];
const impares = [];

for (let i = 0; i < listaNumeros.length; i++) {
  const numero = listaNumeros[i];
  if (numero % 2 == 0) {
    pares[pares.length] = numero;
    //outra opção:
    //pares.push(numero);
  } else {
    impares[impares.length] = numero;
    //outra opção:
    //impares.push(numero);
  }

}

console.log(`Numeros: ${listaNumeros} \n
  Pares: ${pares} \n
  Impares: ${impares}\n`);

// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
// que contém nome, nota1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno
// Ao fonal, imprimir o nome do aluno e a sua média

const listaDeAlunos = [
  { nome: 'João', nota1: 8, nota2: 7, nota3: 5 },
  { nome: 'Maria', nota1: 9, nota2: 8, nota3: 6 },
  { nome: 'Carlos', nota1: 6, nota2: 5, nota3: 7 },
  { nome: 'Ana', nota1: 7, nota2: 6, nota3: 7 },
  { nome: 'Pedro', nota1: 10, nota2: 9, nota3: 8 },
  { nome: 'Lúcia', nota1: 8, nota2: 7, nota3: 5 },
  { nome: 'Fernando', nota1: 7, nota2: 6, nota3: 8 },
  { nome: 'Camila', nota1: 9, nota2: 8, nota3: 7 },
  { nome: 'Rafael', nota1: 6, nota2: 5, nota3: 4 },
  { nome: 'Juliana', nota1: 10, nota2: 9, nota3: 7 }
];

function calculaMediaAlunos(quantidadeNotas, lista) {
  lista.forEach(aluno => {
    let soma = 0;
    for (const prop in aluno) {
      if (prop.startsWith('nota')) {
        soma += aluno[prop];
      }
    }
    const media = soma / quantidadeNotas;
    console.log(`${aluno.nome} - média: ${media.toFixed(1)} \n`);
  });
}

calculaMediaAlunos(3, listaDeAlunos);

//Variação com array de notas

const alunos = [
  { nome: "João", notas: [8, 7, 9, 6] },
  { nome: "Maria", notas: [10, 9, 8, 7] },
  { nome: "Rosa", notas: [2, 6, 2, 3] },
  { nome: "José", notas: [3, 9, 2, 1] },
  { nome: "Pedro", notas: [6, 7, 8, 9] }
];

alunos.forEach((aluno) => {
  let soma = 0;
  for (const nota of aluno.notas) {
    soma += nota;
  }

  const media = soma / aluno.notas.length;
  console.log(`${aluno.nome} - Média: ${media} - ${media >= 6 ? 'Aprovado(a)' : 'Reprovado(a)'}`);
});