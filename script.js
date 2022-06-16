let idade = 18;
if (idade >= 18) {
  console.log('Você é maior de idade')
}


let maiorIdade = true;
let menorIdade = true;

if (maiorIdade && menorIdade == true) {
  console.log("É verdade")
} else {
  console.log('Não é verdade!')
}

let janeiro = true;
let dezembro = true;

if (janeiro || dezembro == true) {
  console.log('Você faz aniver em Janeiro ou Dezembro')
} else {
  console.log('Você NÃO faz aniver em Janeiro ou Dezembro')
}


let nome = 'Rafael'
let letra = nome[0]

if (letra === 'R') {
  console.log('Começa coma letra R')
} else {
  console.log('Não começa com a letra R')
}

let sobrenome = 'Monteiro';
let lengths = sobrenome.length;


if (lengths < 6 || nome === 'E') {
  console.log('Tem MAIS que 6 letras ou começa com a letra E')
} else {
  console.log('Tem MENOS que 6 letras e NÃO começa com a letra E')
}


