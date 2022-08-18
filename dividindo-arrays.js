// AULA 02 VIDEO 01 - ARQUIVO dividindo-arrays.js

/*
UTILIZANDO O METODO .SLICE()
O metodo vai utilizar dois parametros, o primeiro serve para indicar o inicio do corte, e o segundo até onde vai ser esse corte, quando não passamos o segundo parametro ele vai até o final.

*/

const nomes = [ 'João', ' Juliana', ' Ana', ' Caio', ' Lara', ' Marjorie', ' Bruno', ' Guilherme', ' Aline', ' Fabiana.',
'Andre ', 'Carlos ', 'Paulo ', 'Bia ', 'Viviam ', 'Isabele ', 'Vinicius ', 'Renan ', ' Daisy', ' Camilo.']

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da Sala 1: ${sala1}`) 
//saida:Alunos da Sala 1: João ,Juliana ,Ana ,Caio, Lara, Marjorie, Bruno, Guilherme, Aline, Fabin 
a 
console.log(`Alunos da Sala 2: ${sala2}`) 
// saida:Alunos da Sala 2: Andre ,Carlos ,Paulo ,Bia ,Viviam ,Isabele ,Vinicius ,Renan ,Daisy ,Camilo
