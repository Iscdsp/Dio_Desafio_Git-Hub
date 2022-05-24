/*Você recebe um inteiro n, o número de equipes em um torneio que tem regras estranhas:

Se o número atual de equipes for par , cada equipe será emparelhada com outra equipe. Um total de n / 2 partidas são jogadas e n / 2 as equipes avançam para a próxima rodada.

Se o número atual de equipes for ímpar , uma equipe avança aleatoriamente no torneio e o restante é emparelhado. Um total de (n - 1) / 2 partidas são jogadas e (n - 1) / 2 + 1as equipes avançam para a próxima rodada.

Retorna o número de partidas jogadas no torneio até que um vencedor seja decidido.

Entrada 01 = 7
Saída 01 = 6

Entrada 02 = 14
Saída 02 = 13

*/



var numeroEquipes = 14

if(numeroEquipes % 2==0){
    let ChavesEquipes = numeroEquipes/2;
    let proxFase = ChavesEquipes -3;
    let semiFinal = proxFase -1;
    let final = semiFinal -1;
    let camp = final-1;
    console.log( ChavesEquipes+ semiFinal+final+ camp )


}else {
    let TimesRepescagem = numeroEquipes -1;
    let TimesPassaram = TimesRepescagem/2;
    let segundaFase = TimesPassaram -1;
    let final = segundaFase -1;
    console.log(TimesPassaram + segundaFase + final);
}