/* AULA 04 -  VIDEO 02 - ARQUIVO: ponto-extra.js

o metodo map() é utilizado para adicionar mais 1 em cada nota, este metodo recebe uma função como parametro e vai criar uma outra array atualizada.
*/

const notas = [ 10, 9, 8, 7, 6];

const notasAtualizadas = notas.map( nota => nota == 10? nota : ++nota)

console.log(notasAtualizadas)
//SAIDA: "[ 10, 10, 9, 8, 7 ]"