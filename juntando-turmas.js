/*
AULA 02 - VIDEO 03 - ARQUIVO: juntando-turmas.js

Metodo .concat() - Cria uma array Nova.

Primeiro selecionamos uma das arrays e dentro do metodo inserimos uma outra arrays como parametro.

*/

const salaDePython = ['Melissa', 'Selene', 'Bruno']

const salaDeJavaScript = [ 'Karol', 'Roberto', 'Rafael']

const salasUnificadas = salaDePython.concat(salaDeJavaScript)

console.log(salasUnificadas)
//Saida - [ 'Melissa', 'Selene', 'Bruno', 'Karol', 'Roberto', 'Rafael' ]