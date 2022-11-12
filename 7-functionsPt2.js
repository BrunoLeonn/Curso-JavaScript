// Para dar certo o function precisa estar antes de todos os objetos:

// # Primeira maneira de declarar função
function soma(a, b) {
    return a + b
}
// 1° declara a palavra chave "function"
// 2° Adicionar nome da função "soma"
// 3° Adicionar parâmetros ou argumentos "A, B"
// 4° Dentro das {}, adicionar os comandos dentro da função "return a+b"

// Resultado:
console.log(soma(2, 2));
console.log(soma(25, 25));
console.log("Segunda Maneira");

// Segunda Maneira: Função anônima

var soma = function (a, b) {
    return a + b
}
// 1° declara a variável "soma" (Importante: Nesse caso a função não tem nome, usa-se o nome da variável)
// 2° A variável recebe a função "= function"
// 3° Adicionar parâmetros ou argumentos "a, b"
// 4° Dentro das {}, adicionar os comandos dentro da função "return a+b"

//Resultado:
console.log(soma(25, 25));
console.log("Terceira Maneira");

// Terceira Maneira: Arrow Function - Função de seta 

var soma = (a, b) => {
    return a + b
}

var dobro = b => b * 2; // Não precisa nem das chaves {} nem do return

//Resultado:
console.log(soma(25, 25));
console.log(dobro(4));

//      # Diferença entre a Arrow Funcion e a Função Anônima:
// é o "this"  palavra chave que faz referência ao objeto
// O this funciona na Função Anonima, na Arrow Function ele não funciona(Resultado fica: Undefined)

// Criando a função
// Para dar certo o function precisa estar antes de todos os objetos:
var func = function(){
    console.log(this.nome)
}

var obj1 = {
    nome:"objeto 1",
    f: func, // Quando adiciona o mesmo nome do objeto da variavel function. Cria a função 
}

var obj2 = {
    nome:"objeto 2",
    f: func, // Quando adiciona o mesmo nome do objeto da variavel function. Cria a função 
}

// obj = Objeto  |   nome = Atributo[O que vem dentro das chaves]


obj1.f(); // Executa a função
obj2.f(); // Executa a função
console.log("Testando This com Arrow Function")

var func = (/*Parâmetros*/)=>{
    console.log(this.nome)
}

var obj1 = {
    nome:"objeto 1",
    f: func, // Quando adiciona o mesmo nome do objeto da variavel function. Cria a função 
}
obj1.f();

// O resultado vai dar UNDEFINED(indefinido)

console.log("Finalizamos aqui, agora vem o exercício:")

// Exercício

var soma = (a,b) =>{
    return(a+b);
    }
    console.log("15 + 25 =", soma(15,25))