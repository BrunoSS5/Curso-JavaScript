/* AULA 02 - VIDEO 04 - ARQUIVO: lista-duas-dimensoes.js

Este recurso se chama lista com duas dimensões porque se trata de uma lista com outras listas dentro dela.

*/
const alunos = [ 'Miguel', ' Ruanito', ' Ponga', ' Milena']

const mediasDosAlunos = [ 10, 7, 9, 6]

let listaDeNotasEAlunos = [ alunos, mediasDosAlunos]

console.log( `${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)
//Saida: Miguel, sua media é 10

/*
Para ter acesso aos elementos de cada array:
listaDeNotasEAluno
    [0 - Acessa o indice zero da array listaDeNotasEAlunos que é a Array Alunos]
    [0 - Acessa o indice zero da array alunos que é Miguel]
listaDeNotasEAlunos
    [1 - Acessa o indice 1 da array listaDeNotasEAlunos que é mediasDosAlunos]
    [0 - Acessa o indice zero da arrays Alunos = 10] 
*/