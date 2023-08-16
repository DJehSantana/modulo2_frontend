const { categoriaCarros } = require("./enums.js");

const Carros = [
  {
    modelo: "Gol",
    marca: "Wolkswagem",
    ano: 2010,
    preco: 20500,
    categoria: [
      categoriaCarros.MAISVENDIDOS,
      categoriaCarros.POPULARES
    ]
  },
  {
    modelo: "Celta",
    marca: "Chevrolet",
    ano: 2018,
    preco: 32800,
    categoria: [
      categoriaCarros.NOVOS,
      categoriaCarros.POPULARES
    ]
  },
  {
    modelo: "Astra",
    marca: "Chevrolet",
    ano: 2008,
    preco: 22800,
    categoria: [
      categoriaCarros.MELHORESPRECOS,
      categoriaCarros.POPULARES
    ]
  },
  {
    modelo: "VolvoXC40",
    marca: "Volvo",
    ano: 2020,
    preco: 128900,
    categoria: [
      categoriaCarros.IMPORTADOS
    ]
  },
  {
    modelo: "Palio",
    marca: "Fiat",
    ano: 2018,
    preco: 37500,
    categoria: [
      categoriaCarros.MELHORESPRECOS
    ]
  },
  {
    modelo: "Gol",
    marca: "Wolkswagem",
    ano: 2009,
    preco: 21600,
    categoria: [
      categoriaCarros.POPULARES,
      categoriaCarros.MELHORESPRECOS
    ]
  },
  {
    modelo: "Classic",
    marca: "Chevrolet",
    ano: 2012,
    preco: 23500,
    categoria: [
      categoriaCarros.NOVOS
    ]
  },
  {
    modelo: "Golf",
    marca: "Wolkswagem",
    ano: 2009,
    preco: 34700,
    categoria: [
      categoriaCarros.POPULARES
    ]
  },
  {
    modelo: "Civic",
    marca: "Honda",
    ano: 2013,
    preco: 39800,
    categoria: [
      categoriaCarros.MELHORESPRECOS,
      categoriaCarros.MAISVENDIDOS
    ]
  },
  {
    modelo: "HB20",
    marca: "Hyundai",
    ano: 2018,
    preco: 41500,
    categoria: [
      categoriaCarros.MAISVENDIDOS
    ]
  },
  {
    modelo: "Sandero",
    marca: "Renault",
    ano: 2019,
    preco: 39700,
    categoria: [
      categoriaCarros.POPULARES
    ]
  },
];

const Clientes = [
  {
    nome: "José da Silva",
    email: "josedasilva@email.com",
    telefone: 19988076543,
    ultimaVisita: new Date("2022-12-03"),
    desejaReceberComunicacao: false
  },
  {
    nome: "Henrique Souza",
    email: "henrique_souza@email.com",
    telefone: null,
    ultimaVisita: new Date("2023-08-02"),
    desejaReceberComunicacao: true
  },
  {
    nome: "Jaquelina Silveira",
    email: "jaqueline_silveira@email.com",
    telefone: 119980761234,
    ultimaVisita: new Date("2023-07-12"),
    desejaReceberComunicacao: true
  },
  {
    nome: "Rebeca Pereira",
    email: "rebeca_pereira@email.com",
    telefone: null,
    ultimaVisita: new Date("2023-08-07"),
    desejaReceberComunicacao: false
  },
  {
    nome: "Mariana Silva",
    email: "mariana_silva@email.com",
    telefone: 19998076543,
    ultimaVisita: new Date("2023-08-03"),
    desejaReceberComunicacao: true
  },
  {
    nome: "Renato Gonçalves",
    email: "renato_goncalves@email.com",
    telefone: null,
    ultimaVisita: new Date("2023-07-22"),
    desejaReceberComunicacao: false
  },
  {
    nome: "Yuri Marques",
    email: "yuri_marques@email.com",
    telefone: 19998762345,
    ultimaVisita: new Date("2023-04-13"),
    desejaReceberComunicacao: true
  },
  {
    nome: "Joana Bernardes",
    email: "joana_bernardes@email.com",
    telefone: null,
    ultimaVisita: new Date("2023-07-23"),
    desejaReceberComunicacao: false
  },
  {
    nome: "Marcos Dias",
    email: "marcos_dias@email.com",
    telefone: null,
    ultimaVisita: new Date("2023-08-10"),
    desejaReceberComunicacao: true
  }
];

module.exports = {
  Carros,
  Clientes
}