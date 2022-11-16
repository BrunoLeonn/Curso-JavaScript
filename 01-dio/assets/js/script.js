console.log("Olá mundo, esse é o contador desenvolvido em JavaScript");

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
const add = document.getElementById('add');
const sub = document.getElementById('sub');

add.addEventListener('click', () => {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    // ao clicar no Botão SUB abre a função = o contador subtrai a 1 (currentNumber - 1)

    if (currentNumber > 0) {
        currentNumberWrapper.style.color = ("black")
    }   // Se o numero for menor que 0(for negativo) = numero fica em vermelho
})

sub.addEventListener('click', () => {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    // ao clicar no Botão SUB abre a função = o contador subtrai a 1 (currentNumber - 1)
    
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = ("red");
    }   // Se o numero for menor que 0(for negativo) = numero fica em vermelho
})