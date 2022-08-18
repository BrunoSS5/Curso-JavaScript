/* AULA 04 - VIDEO 01 - ARQUIVO: callback.js

 Só podemos passar como parametro para o forEach uma outra função, ele não vai funcionar se tentarmos passar outros tipos de dados, ela só recebe como paramentro apenas função, podemos passar um segundo paramentro que é para ter acesso ao indice.
*/
const nome = ["Bruno", "Karol", "Ana", "Leo",]
nome.forEach(imprimeNomes)

function imprimeNomes(nome) {
    console.log(nome) 
    // SAIDA: "Bruno, Karol, Ana, Leo, Joaquim"
}