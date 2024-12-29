// AULAS SOBRE ARRAY


// 1ª forma de declarar array
//var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');

// 2ª forma de delcarar array - recomendada
var notas = [1,3,5,7,9];

// criando array vazio
//var dados = [];

// fazendo acesso a um valor de um índice
//console.log(notas[2])

// alterando o valor a partir do índice
//notas[2] = 12;

// atenção ao acessar um valor com um índice que não existe
// um grande problema de criar um indice que não existe, é que o javascript cria esses campos (deixando-os vazios) e coloca onde foi solicitado.
notas[9] = 10; 

if(notas[5] == undefined) {
    notas[5] = 54;
}
// ao rodar o código você verá 3 items vazios no array
// console.log(notas)


// inserindo itens no final do array
var nomes = ['Paula', 'Maria', 'Julia'];
nomes.push('Vanessa'); // insere o valor no final do array

// tamanho do array
var tam = nomes.length;

// ordenar dados do array;
var alunos = ['Vera','Lucia','Pedro','Fernanda','Mario','Ana','Carla'];
alunos.sort(); 
// ordenando arrays de strings - o método sort() considera que todos os elementos do array são strings
// caso seja um array de números (abaixo), ele transforma em string e usa como parâmetros para organizar o primeiro caracter de cada elemento.
// para rearranjo de elementos do array quando são numéricos, devemos usar uma função lambda (abaixo)
console.log(alunos)

var precos = [123.55, 42.27, 546.99, 23.12];
precos.sort(function(a, b)
    {return a - b}
)

var idades = [5, 1, 8, 12, 44, 78];
idades.sort(function(a, b)
    {return a -b}
)


// Deletar dados de um array
// quando deletamos o elemento do array usando 'delete', o tamanho do array é mantido entrentanto, seu índice fica vazio
//delete idades[3];

// ao usar o método splice() conteúdo do índice assim como seu espaço são removidos, ou seja, o array diminui
//idades.splice(3, 1) // a partir do indice 3, delete 1 elemento

// podemos usar o método splice() para incluir elementos no array
//idades.splice(3, 0, 56, 89) // a partir do índice 3, não delete nenhum, mas adicione 56,89

//idades.splice(3, 1, 23); // a partir do índice 3, deleta 1 e adiciona o 23

//removendo elementos da última posição do array
//idades.pop(); //remove e retorna o último elemento de um array
//var ret = idades.pop(); // variável guarda o último elemento do array para poder usar como precisar

//removendo o primeiro elemento do array
//idades.shift(); //remove e retorna o primeiro elemento de um array;
//console.log(idades);
//var ret = idades.shift(); // variável guarda o primeiro elemento de um array para poder usar como precisar

//inserindo elementos no início de um array
//idades.unshift(892);

// retorna um novo array a partir dos índices informados
//var novo  = idades.slice(3);

//var novo = idades.slice(1, 2); // a partir do índice 1, pegue o indice 2 sem incluí-lo
//console.log(novo);

var pares = [2,4,6,8,10];
var impares = [1,3,5,7,9];

var rest = pares.concat(impares);
// concatena a sequencia de elementos impares com os pares, seguindo após os pares
var rest = impares.concat(pares);
// concatena a sequencia de elementos pares com os ímpares, seguindo após os ímpares

rest.sort(function(a, b)
    {return a - b}
) // expressão lambda pra ordenar o array (pares e impares no seu devido lugar)

//matriz
var tab = [
    [ 1,  2,  3,  4], //linha 0
    [ 5,  6,  7,  8], //linha 1
    [ 9, 10, 11, 12], //linha 2
    [13, 14, 15, 16]  //linha 3
];
console.log(tab[1][1]);