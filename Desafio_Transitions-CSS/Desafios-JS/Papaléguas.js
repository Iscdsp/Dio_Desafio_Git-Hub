/*Desafio
Papaleguas é um corredor exemplar, sua especialidade é a prova dos 100 metros rasos. Diariamente, ele treina para realizar as provas no menor tempo possível e se tornar recordista mundial na categoria. Pode se perceber que, dependendo da quantidade de tentativas, o seu desempenho melhora ou piora. Diante disso, ele te desafia para calcular a tentativa mais rápida de cada treino diário.

Entrada
A entrada é composta por vários casos de teste. A primeira linha de cada caso de teste contém um número inteiro T (2 <= T <= 99) relativo ao número de tentativas de um dia. As T linhas seguintes contêm um número real Ti (9 <= Ti <= 11) relativo ao tempo, em segundos, da i-ésima tentativa do treino. A entrada termina com fim de arquivo.

Saída
Para cada caso de teste de entrada do seu programa, você deve imprimir um número real contendo o tempo da tentativa mais rápida de cada treino.

Saída:
teste01: 9.72
teste02:9.71
teste03:9.23*/


let QntTentativas = parseInt(gets()) // #1=3    | #2=2    | #3=3
let Tempo = parseFloat(gets())       // #1=9.82 | #2=9.81  | #3=9.75
let Tempo1 = parseFloat(gets())      // #1=9.72 | #2=9.71 | #3=9.55
let Tempo2 = parseFloat(gets())      // #1=9.92 | #2=NaN  | #3=9.23

var ListaTempo = [];

if( ListaTempo = []){
  ListaTempo.push(Tempo, Tempo1, Tempo2)
  ListaTempo.sort()
  
  console.log(ListaTempo[0])
}
