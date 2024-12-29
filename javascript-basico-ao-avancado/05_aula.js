// AULA 5 - COMO USAR O .FILTER()
/*
    2. filter:
    O método filter é usado para iterar sobre os elementos de um array e retornar um novo array contendo apenas os
    elementos que passam por um teste (função de filtro) especificado. Em outras palavras, filter é útil quando 
    você deseja extrair um subconjunto de elementos de um array com base em uma condição.
*/ 

let numeros = [1,2,3,4,5,6,7,8,9,10];
// console.log(numeros)

function filtrar_pares(n){
    return n % 2  === 0;
}

function filtrar_impares(n) {
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;
}

var ret = numeros.filter(filtrar_pares);
// console.log(ret);

var ret = numeros.filter(filtrar_impares);
// console.log(ret);

var ret = numeros.filter(filtrar_multiplos_5);
// console.log(ret)

let alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3}
]

function filtrar_notas_maiores_que_8(aluno) {
    return aluno.nota > 8;
}

let filtrados = alunos.filter(filtrar_notas_maiores_que_8);
console.log(filtrados);

