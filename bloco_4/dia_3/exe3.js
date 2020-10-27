// Exercicio 3
// Agora inverta o lado do triângulo.

let n = 5;
let asteriscos = '*';
let contatorLinha;
let contatorColuna;
let desenho = '';
let posicaoEntrada = n;

for(contatorLinha = 0; contatorLinha < n; contatorLinha +=1){
    for(contatorColuna =0; contatorColuna <= n; contatorColuna +=1){
        if (contatorColuna < posicaoEntrada){
            desenho = desenho + ' ';
        } else {
            desenho = desenho + asteriscos;
        }
    }
    console.log(desenho);
    desenho = '';
    posicaoEntrada -= 1;

}


