/* AULA 03 - VIDEO 04 - ARQUIVO media-foreach.js

ForEach - passa por todos os elementos de uma array, a principal caracteristica dessa função é não precisar passar os numeros dos indices de uma array, ela irá pecorrer toda a array automaticamente do inicio ao fim, nesta situação estamos somando todos os elementos e salvando na variavel criada fora do bloco de codigo do ForEach,  neste Caso a (somaDasNotas).
Podemos utilizar com uma arrays function:

notas.forEach( nota => {
 somaDasNotas += nota
*/

// Ela é uma função callback - porque o parametro da função não é um dado, por isso ela é uma função que chama outra, o parametro passado nela deve ser uma outra função e não uma string, ou number...
const notas = [ 10, 6.5, 8, 7.5]

let somaDasNotas = 0

//Utilizando com uma função anonima!
notas.forEach(function(nota){
 somaDasNotas += nota
})
let media = somaDasNotas/notas.length

console.log(media)
//SAIDA: 8