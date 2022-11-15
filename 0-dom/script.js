function alterar(){
    let objc = document.getElementById("c1"); // Números recebidos pelo input
    let objx = document.getElementById("x1"); // Largura
    let objy = document.getElementById("y1"); // Altura
    objc.style.left=`${objx.value}px`; // Número objc define Largura para cima(Altera o valor de objx)
    objc.style.backgroundColor=`${objx.value}`
    objc.style.backgroundColor=`${objy.value}`
    objc.style.top=`${objy.value}px`; // Número objc define Altura para cima(Altera o valor de objy)
    objc.innerHTML = `(${objx.value},${objy.value})` // Os valores no input objc determinam o texto html dentro do bloco objx e objy
}
    //innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML dentro de um elemento