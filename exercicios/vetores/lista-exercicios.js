//EXERCICIO PUSH()
console.log('\n** EX 01 ** \n');
const meuArray = [];
let lenght;

lenght = meuArray.push('grape');
console.log(lenght);
lenght = meuArray.push('orange');
console.log(lenght);
console.log(meuArray);

//EXECICIO POP()
console.log('\n** EX 02 ** \n');
const numeros = [1, 2, 3, 4];
numeros.pop();
console.log(numeros.length);
numeros.pop();
console.log(numeros.length);

//EXERCICIO SHIFT()
console.log('\n** EX 03 ** \n');
const linguagens = ['javascript', 'python', 'golang', 'java'];
let itemRemovido = linguagens.shift();
console.log(linguagens.length);
console.log(itemRemovido);
itemRemovido = linguagens.shift();
console.log(linguagens.length);
console.log(itemRemovido);

//EXERCICIO AT()
// console.log('\n** EX 04 ** \n');
const produtos = ['sabao', 'detergente', 'amaciante', 'alvejante', 'sapolio'];

let itemAcessado = produtos.at(0);
console.log(itemAcessado);
itemAcessado = produtos.at(2);
console.log(itemAcessado);
itemAcessado = produtos.at(-1);
console.log(itemAcessado);

//EXERCICIO CONCAT()
console.log('\n** EX 05 ** \n');

const lista1 = ['banana', 'pera', 'melancia'];
const lista2 = ['alface', 'tomate', 'rucula'];
const lista3 = ['limao', 'laranja', 'acerola'];
const lista4 = ['pimenta', 'pimentao', 'alho'];

const novaLista = lista1.concat(lista2);
console.log(novaLista);
console.log(novaLista.length);
const novaLista2 = novaLista.concat(lista3, lista4);
console.log(novaLista2);
console.log(novaLista2.length);

//EXERCICIO EVERY()
console.log('\n** EX 06 ** \n');

const pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 }
];

const todosSaoMaioresDeIdade = pessoas.every(pessoa => pessoa.idade >= 18);
console.log(todosSaoMaioresDeIdade);
const nomesMaisDeQuatroLetras = pessoas.every(pessoa => pessoa.nome.length > 3);
console.log(nomesMaisDeQuatroLetras);
const nomesEIdadesNaoVazios = pessoas.every(pessoa => pessoa.nome && pessoa.idade);
console.log(nomesEIdadesNaoVazios);

//EXERCICIO FILTER()
console.log('\n** EX 07 ** \n');

const alunos = [
  { nome: 'Ana', idade: 20 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Maria', idade: 22 },
  { nome: 'João', idade: 17 },
  { nome: 'Lucas', idade: 19 },
  { nome: 'Julia', idade: 21 }
];

const alunosMaioresDeIdade = alunos.filter(aluno => aluno.idade >= 18);
console.log(alunosMaioresDeIdade);
const alunosComMenosVinteAnos = alunos.filter(aluno => aluno.idade < 20);
console.log(alunosComMenosVinteAnos);
const alunosNomeComecaComJ = alunos.filter(aluno => aluno.nome.startsWith('J'));
console.log(alunosNomeComecaComJ);

//EXERCICIO FIND()
console.log('\n** EX 08 ** \n');

const lugares = [
  { nome: 'Sala de Reuniões', capacidade: 8 },
  { nome: 'Auditório', capacidade: 50 },
  { nome: 'Sala de Treinamento', capacidade: 20 },
  { nome: 'Sala de Conferências', capacidade: 30 },
  { nome: 'Sala de Estudos', capacidade: 12 }
]

const maisDe10 = lugares.find(lugar => lugar.capacidade >= 10);
console.log(maisDe10);
const maisDe25 = lugares.find(lugar => lugar.capacidade >= 25);
console.log(maisDe25);
const maisDe40 = lugares.find(lugar => lugar.capacidade >= 40);
console.log(maisDe40);

//EXERCICIO FOREACH()
console.log('\n** EX 09 ** \n');

const pizzas = [
  { sabor: 'Mussarela', valor: 20 },
  { sabor: 'Calabresa', valor: 25 },
  { sabor: 'Marguerita', valor: 28 },
  { sabor: 'Frango com Catupiry', valor: 32 },
  { sabor: 'Portuguesa', valor: 30 }
];

pizzas.forEach(pizza => console.log(`Pizza ${pizza.sabor} - R$${pizza.valor},00`));

//EXERCICIO MAP()
console.log('\n** EX 10 ** \n');

const listaPessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
];

const listaPessoasImc = listaPessoas.map(({ nome, altura, peso }) => {
  return {
    nome,
    imc: (peso / (altura * altura)).toFixed(1)
  }
});

console.log(listaPessoasImc);

//EXERCICIO REDUCE()
console.log('\n** EX 11 ** \n');

const listaAlunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] }
];

const listaMedias = listaAlunos.map((aluno) => {
  const totalNotas = aluno.notas.reduce((acc, soma) => {
    return acc + soma;
  }, 0);
  const nome = aluno.nome;
  const resultado = {
    nome,
    media: totalNotas / (aluno.notas.length)
  }
  return resultado;
});

console.log(listaMedias);

//EXERCICIO REVERSE()
console.log('\n** EX 12 ** \n');

const numeros2 = [1, 2, 3, 4, 5];
console.log(numeros2.reverse());

//EXERCICIO SOME()
console.log('\n** EX 13 ** \n');

const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
];

const salarioMaiorQue1500 = empregados.some(empregado => empregado.salario >= 1500);
const salarioMenorQue1000 = empregados.some(empregado => empregado.salario <= 1000);

console.log({ salarioMaiorQue1500, salarioMenorQue1000 });

//EXERCICIO SORT()
console.log('\n** EX 14 ** \n');

const atletas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
];

atletas.sort((a, b) => a.peso - b.peso);
console.log("\n Lista ordenada por peso - ordem crescente \n");
console.log(atletas);
atletas.sort((a, b) => b.altura - a.altura);
console.log("\n Lista ordenada por altura - ordem decrescente \n");
console.log(atletas);
atletas.sort((a, b) => a.nome.localeCompare(b.nome));
console.log("\n Lista em ordem alfabética \n");
console.log(atletas);
