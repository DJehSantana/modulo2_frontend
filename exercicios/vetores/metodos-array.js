//Exemplo com push()
//Adiciona items ao final do array e retorna o novo tamanho do array
const numbers = [1, 2, 3, 4, 5, 6];
const lenght = numbers.push(7, 8, 5);
console.log(numbers);
console.log(lenght);

//Exemplo com pop()
//Remove o ultimo item e retorna o item removido
const removedItem = numbers.pop();
console.log(numbers);
console.log(removedItem);

//Exemplo com at()
const fruits = ['apple', 'banana', 'orange', 'grape'];
const lastItem = fruits.at(-1);
console.log(lastItem);

//Exemplo método concat() 
//Concatena dois ou mais arrays e retorna um novo array. Não altera o array original
const newArray = numbers.concat(fruits);
console.log(newArray);

//Exemplo método every()
//Retorna true apenas se todos os items do array satisfizerem a condição
const isNumber = numbers.every(num => typeof (num) === "number");
console.log(isNumber);

//Exemplo método filter()
//Retorna um novo array com os items que satisfazem a condição
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//Exemplo método find()
//Retorna o primeiro elemento que satisfizer ao teste
const threeMultiple = numbers.find(num => num % 3 === 0 && num != 3);
console.log(threeMultiple);

//Exemplo método map()
//Retorna um novo array aplicando a alteração sobre cada elemento do array
const newMap = numbers.map((num, index) => num * numbers[index - 1] || num);
console.log(newMap);
console.log(numbers);

//Exemplo método sort()
//Modifica o array original, efetua uma ordenação nos elementos do array
//Se não for passado nenhum parâmetro, irá ordenar na ordem crescente
console.log(fruits.sort());
console.log(newMap.sort((a, b) => b - a));