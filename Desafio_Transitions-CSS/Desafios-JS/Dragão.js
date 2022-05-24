/*Daenerys é a khaleesi dos Dothraki. Juntamente com Drogon, eles vão atrás do Tyrion, para tentar dominar Westeros. Ela possui, além do seu dragãozinho, um rastreador que mede o nível de energia de qualquer ser vivo. Todos os seres com o nível menor ou igual a 8000, ela considera como se fosse um inseto. Quando passa deste valor, que foi o caso do Drogon, ela se espanta e grita “Mais de 8000”. Baseado nisso, utilize a mesma tecnologia e analise o nível de energia dos seres vivos.

Entrada
A entrada é composta por vários casos de teste. A primeira linha contém um número inteiro C relativo ao número de casos de teste. Em seguida, haverá C linhas, com um número inteiro N (100 <= N <= 100000) relativo ao nível de energia de um ser vivo. */





                                 // 3 etapas
let qntTestes = parseInt(gets()) // #1=3    | #2=2    | #3=3
let Energia1 = parseInt(gets())  // #1=7999 | #2=102  | #3=8001
let Energia2 = parseInt(gets())  // #1=8000 | #2=9000 | #3=100
let Energia3 = parseInt(gets())  // #1=8001 | #2=NaN  | #3=200
let contador = 0;
let nivelLimite = 8000


while( contador < qntTestes ){
    if(Energia1 <= nivelLimite){
        console.log("Inseto!");
        if(Energia2 <= nivelLimite){
            console.log("Inseto!")
            if(Energia3 == nivelLimite){
                console.log ("Mais de 8000!")
            }else {console.log("Mais de 8000!")}
        } else {
            console.log("Mais de 8000!")
        }
        }else{console.log("Mais de 8000!")
    if(Energia2 < nivelLimite){
        console.log("Inseto!")
        if(Energia3 < nivelLimite){
            console.log("Inseto!")
        }
    }}break
    contador++;

}