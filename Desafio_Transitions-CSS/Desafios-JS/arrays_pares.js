/*O objetivo deste desafio é resolvê-lo utilizando o seu conhecimento sobre Arrays, uma estrutura de dados que armazena uma coleção de dados em um bloco de memória.

Dado uma array de valores {2, 3, 5, 7, 11, 13, 18, 34}, desenvolva um programa que retorne como resultado apenas os números pares dessa array, conforme exemplo abaixo.

Saída : 2 ,18, 34*/

var numeros = [2, 3, 5, 7, 11, 13, 18, 34];
for( var i of numeros) {
    if(i % 2 === 0){
        console.log(i)
    } 
}