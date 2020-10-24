// Variaveis

let a = 5;
let b = 10;
let c = 25;
let d = 15;

// Exercicio 1

console.log(a+b); // adicao
console.log(a-b); // subtracao
console.log(a*b); // mutiplicacao
console.log(a/b); // divisao
console.log(a%b); // modulo

// Exercicio 2

if (a > b) {
    console.log("a é maior que b");
  } else {
    console.log("b é maior que a");
  };

// Exercicio 3

if (a > b && a > c) {
    console.log("O maior número é (a): " + a);
  } else if (b > a && b > c) {
    console.log("O maior número é (b): " + b);
  } else {
    console.log("O maior número é (c): " + c);
  };


// Exercicio 4

if (d > 0) {
    console.log("positive");
  } else if (d < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  };

// Exercicio 5

let angT1 = 60; // 1 angulo triangulo
let angT2 = 60; // 2 angulo triangulo
let angT3 = 50; // 3 angulo triangulo


let somaAngulos = angT1 + angT2 + angT3;

if (somaAngulos === 180) {
  console.log("Angulos validos!");
} else {
  console.log("Angulos Invalidos!");
};

// Exercicio 6

let xadrezPeca = 'peao';

switch (xadrezPeca.toLowerCase()){
  case 'rei':
    console.log('Rei: Move-se apenas uma casa em todas as direções!');
    break;
  case 'rainha':
    console.log('Rainha: Move-se diagonal e horizonta!');
    break;
  case 'bispo':
    console.log('Bispo: Move-se diagonal!');
    break;
  case 'cavalo':
    console.log('Cavalo: Move-se em L!');
    break;
  case 'torre':
    console.log('Torre: Move-se vertical e horizonta!');
    break;
  case 'peao':
    console.log('Peao: Move-se vertical apenas uma casa!');
    break;
  default:
    console.log('Peca informada não existe no jogo de xadrez!')
    break;
}

// Exercicio 7

let notaProva = 101;

if(notaProva < 0 || notaProva > 100){
  console.log('Nota informada não válida!');
} else if(notaProva >= 90){
  console.log('Você é um aluno(a) classe A!');
} else if(notaProva >= 80){
  console.log('Você é um aluno(a) classe B!');
} else if(notaProva >= 70){
  console.log('Você é um aluno(a) classe C!');
} else if(notaProva >= 60){
  console.log('Você é um aluno(a) classe D!');
} else if(notaProva >= 50){
  console.log('Você é um aluno(a) classe E!');
} else {
  console.log('Você é um aluno(a) classe F!');
}

// Exercicio 8

let ehPar = false;

if( a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
  ehPar= true;
}
console.log(ehPar);

// Exercicio 9

let ehImpar = false;

if( a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
  ehImpar= true;
}
console.log(ehImpar);

// Exercicio 10

let custoProduto = 5;
let valorVenda = 10;
let numProdVEndidos = 1000;

if (custoProduto >= 0 && valorVenda > 0){
  let valorImposto = custoProduto * 0.2;
  let valorCustoTotal = custoProduto + valorImposto;
  let lucroEmpresa = (valorVenda - valorCustoTotal) * numProdVEndidos;
  console.log(lucroEmpresa);
} else {
  console.log('Erro! Valor não podem ser negativos e nem valor de venda igual ZERO!')
}

// Exercicio 11

let valorInss;
let valorIr;

let salario = 3000.00;

// calculo INSS
if (salario <= 1556.94){
  valorInss = salario * 0.08;
} else if (salario <= 2594.92){
  valorInss = salario * 0.09;
} else if (salario <= 5189.82){
  valorInss = salario * 0.11;
} else{
  valorInss = 570.88;
}

let salarioBaseIr = salario - valorInss;

// calculo IR
if (salarioBaseIr <= 1903.98){
  valorIr = salarioBaseIr * 0.0;
} else if (salarioBaseIr <= 2826.65){
  valorIr = (salarioBaseIr * 0.075) - 142.80;
} else if (salarioBaseIr <= 3751.05){
  valorIr = (salarioBaseIr * 0.15) - 354.80;
} else if (salarioBaseIr <= 4664.68){
  valorIr = (salarioBaseIr * 0.225) - 636.13;
} else{
  valorIr = (salario * 0.275) - 869.36;
}

console.log('Salario Liquido é: ' + (salarioBaseIr - valorIr));
console.log('Salario Base é: ' + salarioBaseIr);
console.log('Valor INSS é: ' + valorInss + ' e Valor IR é: ' + valorIr);