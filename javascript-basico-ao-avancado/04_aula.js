// AULA SOBRE .MAP()
/*
    1. map:
    O método map é utilizado para iterar sobre todos os elementos de um array e aplicar uma função a cada elemento,
    retornando um novo array com os resultados dessas chamadas de função. Em resumo, map é usado quando você deseja
    transformar cada elemento de um array de acordo com uma função específica.
*/ 

// 1 - UTILIZAMOS O MAP() PARA REALIZAR TRANSFORMAÇÕES EM UM ARRAY

let valores = [2,4,6,8,10];
// console.log(valores);

let dobro = valores.map(function(valor){ // o map() gera um novo array de mesmo tamanho do array original
    return valor*2;
});
// console.log(dobro)


function dobrar(valor){
    return valor * 2;
}
// dobro = valores.map(dobrar);
// console.log(dobro);


// encadeando maps para realizar multiplas transformações
function soma_4(valor){
    return valor + 4;
}
function dividir_por_5(valor){
    return valor / 5;
}

let resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultado);

/*
    passo 1 -> dobrar = [4,  8, 12, 16, 20];
    passo 2 -> soma_4 = [8, 12, 16, 20, 24];
    passo 3 -> dividir_por_5 = [1.6, 2.4, 3.2, 4, 4.8]

*/