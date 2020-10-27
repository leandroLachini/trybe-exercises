// Exercicio 1
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5;
let asteriscos = '*';
let contator;
let desenho = '';

for(contator = 0; contator < n; contator +=1){
    desenho = desenho + asteriscos;
}

for(contator = 0; contator < n; contator +=1){
    console.log(desenho);
}

