/* AULA 05 - VIDEO 01 - ARQUIVO: reprovados.js
O metodo .filter() recebe como parametro uma função.
Ele pode receber mais um outro parametro que é o indice da array que o metodo está sendo utilizado, (aluno - primeiro parametro acessa o elemnto, neste exemplo é as notas, indice - Segundo parametro acessa o indice, como por exemplo o 0, 1 ,2, 3...), o primeiro parametro não esta sendo utilizado, podemos colocar um "_" no lugar de aluno que a função vai rodar normalmente, o metodo filter esta retornando o nome Marcos da arrays nomes porque o metodo esta associado a ela.

*/
const nomes = [ 'Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [ 7, 4.5, 8, 7.5];

const reprovados = nomes.filter ( (aluno, indice) => notas [indice] < 5)
console.log( `reprovados: ${reprovados}`)
//SAIDA: "reprovados: Marcos"