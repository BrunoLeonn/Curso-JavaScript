// Curso DIO: Sintaxe e Operadores JavaScript

/*      Tipos de Operadores:
    Aritimética
    Atribuição
    Comparação
    Lógica
    Condicional
*/

/*  Atribuição:
    =      Igual (Atribuindo valor)
    +   =  Equivalente a ( x = x + y )  
    *   =  Equivalente a ( x = x * y )
    /   =  Equivalente a ( x = x / y )
    %   =  Equivalente a ( x = x % y )
*/
/*
    Tipos de operadores:
    +   Adição
    -   Subtração
    /   Divisão
    %   Módulo
    **  Exponencial (Elevando numero ao que vem depois desse operador)
    ++  Adicionar 1
    --  Subtrair 1

*/
/*  
    Operadores de Comparação:
    ==  Igual a
    === Mesmo valor e mesmo tipo
    !=  Diferente
    !== Valor e tipos diferentes
    <   Maior que
    >   Menor que
    >=  Maior ou igual
    <=  Menor ou igual
*/
/*
    Lógica:
    &&  "e"lógico
    ||  "ou"lógico
    !   "não"lógico
 */
/*
    Condicional (ternário):

    (condition) ? expression 1 : expression 2

    if (Condition)
        statement;
    else
        statemente;
                   */                   //expression 1 = True(if) //expression2 = false(else)
    if (time < 10){
        greeting = "Good morning";
    }
    else if (time < 20){
        greeting = "Good day";
    }
    else{
        greeting = "Good evening";
    }

    //      OPERADOR TERNÁRIO
    greeting = (time<10) ? "Good morning":  //time for menor que 10 ?(se for: primeiro valor) : (se não)
               (time<20) ? "Good day":  //time for menor que 20 ?(se for: segundo valor) : (se não)
                           "Good evening"   //(terceiro valor)

    //      SWITCH
    switch (new Date() .getDay()){ //Switch + ( o valor "no caso o dia da semana" )
        case 6: // 7 porém na computação começa a contar no 0
            text = "today is Saturday"; //se for 6 é o sabado
            break; // quebra
        case 0:
            text = "today is Sunday"; // se for 0 vai ser domingo
            break;
            default: // se não for: esperando o próximo final de semana(segunda a sexta)
                text = "Looking forward to the Weekend";
    }