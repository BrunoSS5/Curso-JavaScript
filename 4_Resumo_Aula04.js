/* AULA 04 - VIDEO 01 - ARQUIVO: callback.js
"Joaquim"];

 Só podemos passar como parametro para o forEach uma outra função, ele não vai funcionar se tentarmos passar outros tipos de dados, ela só recebe como paramentro apenas função, podemos passar um segundo paramentro que é para ter acesso ao indice.
*/
const nome = ["Bruno", "Karol", "Ana", "Leo",]
nome.forEach(imprimeNomes)

function imprimeNomes(nome) {
    console.log(nome) 
    // SAIDA: "Bruno, Karol, Ana, Leo, Joaquim"
}
/* AULA 04 -  VIDEO 02 - ARQUIVO: ponto-extra.js

o metodo map() é utilizado para adicionar mais 1 em cada nota, este metodo recebe uma função como parametro e vai criar uma outra array atualizada.
*/

const notas = [ 10, 9, 8, 7, 6];

const notasAtualizadas = notas.map( nota => nota == 10? nota : ++nota)

console.log(notasAtualizadas)
//SAIDA: "[ 10, 10, 9, 8, 7 ]"

/* AULA 04 - VIDEO 03 - ARQUIVO: map-nomes.js

Pegamos o .map() com o metodo toUpperCase() para alterar cada letra dos nomes para maiuscula, ja que o metodo map só recebe como parametro uma outra função, o map entra na array varreando cada indice e faz essa alteração com o metodo toUpperCase(). 
toUpperCase() é um metodo para alterar uma string de minuscula para Maiuscula.
*/
let nomes2 = [ "ana Julia", " Caio vinicius", "BIA silva"]
const nomesAtualizados2 = nomes2.map(nome => nome.toUpperCase())

console.log(nomesAtualizados2)
//SAIDA: "[ 'ANA JULIA', ' CAIO VINICIUS', 'BIA SILVA' ]"