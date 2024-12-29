// TRABALHANDO COM .REDUCE() 
/*
    O método reduce() em JavaScript é usado para reduzir (ou "agregar") os elementos de um array a um único valor.
    Ele executa uma função de callback em cada elemento do array, resultando em um único valor de retorno.
    Esse método é muito poderoso e flexível, podendo ser usado para uma variedade de operações de redução em arrays,
    como soma, multiplicação, concatenação, entre outras.
*/

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

var soma = 0;
for (let i = 0; i < precos.length; i++) {
    soma = soma + precos[i];
}
// console.log(soma);

soma = 0; 
precos.forEach(function(valor){
    soma += valor; // soma = soma + valor
});
// console.log(soma);

function somar(anterior, atual) {
    return anterior + atual;
}
var ret = precos.reduce(somar);
// console.log(ret);

/*
    Como funciona o reduce?
    [4.66, 3.78, 9.78, 1.34, 5.32]

    primeira execução:
        - pega os dois primeiros valores, soma e retorna o valor da soma;
    Nas demais execuções:
        - pega o returno da execução anterior e o próximo valor (indice 2)

    1 execução = indice1 (4.66) + indice2 (3.78) -> (8.44);
    2 execução = 8.44 + indice3 (9.78) -> (18.22);
    3 execução = 18.22 + indice4 (1.34) -> (19.56);
    4 execução = 19.56 + indice5 (5.32) -> (24.88);
*/

// exemplo map/reduce
function adicionar_taxa(valor) {
    return valor + 5;   
}
var ret = precos.map(adicionar_taxa).reduce(somar);
// console.log(ret);


// exemplo filter/map/reduce
function preco_maior_que_4(valor) {
    return valor > 4;
}
var ret = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
console.log(ret)

