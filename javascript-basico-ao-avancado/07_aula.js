// APRENDENDO A USAR LET/VAR/CONST

/*
    ---------- VAR (EM DESUSO / DESCONTINUADO)
    As variáveis declaradas com var têm escopo de função ou escopo global, não possuindo escopo de bloco (como dentro de loops for ou blocos if).
    Podem ser declaradas e inicializadas posteriormente no código. Se não forem inicializadas explicitamente, elas terão um valor undefined.
    Podem ser reatribuídas e redeclaradas no mesmo escopo sem gerar erros.
*/ 
var numero = 42;
// console.log(numero);

numero = numero + 18;
// console.log(numero);




/*
    ---------- LET
    Variáveis declaradas com let têm escopo limitado ao bloco em que foram definidas (dentro de chaves {} de uma função, loop, ou estrutura de controle).
    Assim como var, as variáveis let podem ser atualizadas (reatribuídas), mas não podem ser redeclaradas no mesmo escopo.
*/
let outro_numero = 42;
// console.log(outro_numero);

outro_numero = outro_numero + 18;
// console.log(outro_numero);




// CONST
/*
    Assim como let, as variáveis const têm escopo de bloco.
    Uma variável const deve ser inicializada com um valor no momento 
    da declaração e não pode ser reatribuída posteriormente
*/

const taxa = 1.44;
// console.log(taxa);

let res = 45*taxa;
// console.log(res);

// diferença entre constante vs mutação
const curso = {nome: 'Programação em JavaScript'};
console.log(curso.nome);

// não é possível alterar valor de uma constante
// curso = 42;

// podemos realizar mutação em dados contidos na constante;
curso.nome = 'Programação Orientada à Objeto'; // isso é chamado de mutação
console.log(curso.nome);

/*
    Dicas de como declarar variáveis em JavaScript;

    Use 'var' para variáveis com escopo de função ou global,
    mas evite seu uso em código moderno devido ao seu comportamento de escopo confuso.

    Use 'let' para variáveis ​​que precisam de escopo de bloco e cujo valor pode ser alterado.
    
    Use 'const' para declarar constantes cujo valor não deve mudar após a inicialização.

*/