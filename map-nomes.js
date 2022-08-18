/* AULA 04 - VIDEO 03 - ARQUIVO: map-nomes.js

Pegamos o .map() com o metodo toUpperCase() para alterar cada letra dos nomes para maiuscula, ja que o metodo map só recebe como parametro uma outra função, o map entra na array varreando cada indice e faz essa alteração com o metodo toUpperCase(). 
toUpperCase() é um metodo para alterar uma string de minuscula para Maiuscula.
*/
let nomes2 = [ "ana Julia", " Caio vinicius", "BIA silva"]
const nomesAtualizados2 = nomes2.map(nome => nome.toUpperCase())

console.log(nomesAtualizados2)
//SAIDA: "[ 'ANA JULIA', ' CAIO VINICIUS', 'BIA SILVA' ]"