// AULA SOBRE FOREACH

let cursos = [
    'Programação para leigos',
    'Algoritmo e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'JavaScript do Básico ao Avançado',
];

// console.log(cursos);
// console.log('Quantidade de cursos: '+cursos.length);

//definir uma função
// function imprimir(curso, indice) {
//     console.log(indice + ' - ' + curso);
// }

// para cada
// cursos.forEach(imprimir);

// utilização de uma função anônima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`);  // isso é chamado template string
});