// Function
// Nomeie de Verbo + Substantivo (ex: cancelarAcao)

let corSite = "azul" // DEFININDO O OBJETO "corSite" para o Valor "Azul"

function resetaCor (cor, tonalidade){ // Function + Nome da função + ()parâmetros ou argumentos e depois { }
    corSite = cor + ' ' + tonalidade; // ESSE É O BLOCO DE EXECUÇÃO, 
};

console.log(corSite); 

resetaCor("verde", "claro");
console.log(corSite)

// Exercício

let contrato = "aceito";  
function legalizarContrato(questao){
    contrato = questao; 
};

console.log(contrato); 
legalizarContrato("Negado"); 
console.log(contrato);  
