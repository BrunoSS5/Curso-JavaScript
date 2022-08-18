/* AULA 03 - VIDEO 01 - ARQUIVO: localizando-aluno.js

METODO .includes() E indexOf()
.includes - ele busca uma infromação dentro de uma array, e vai retornar se o que procuramos esta nesta lista, se estiver o resultado será true e segue-se para dentro do bloco de codigo, se false ele encerra a busca.
includes -> booleano
indexOf - retorna o numero do indice
*/

const alunos = [ 'Miguel', 'Ruanito', 'Ponga', 'Milena']
const mediasDosAlunos = [ 10, 7, 9, 6]

let listaDeNotasEAlunos = [ alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é: '  + listaDeNotasEAlunos[1][indice]
    } else { 
        return 'Aluno(a) não cadastrado.'
    }
}
console.log(exibeNomeNota('Ponga'))
//SAIDA: "Ponga, sua média é: 9"

/*
Dentro do if temos como condicional o metodo includes, este vai fazer uma busca pelo tipo de dado que passamos para ele como paremetro, será feita uma varredura na array listaDeNotasEAlunos no indice [0], que acessa a array alunos e vai procurar pelo dado desejado, caso esteja, vai entrar no bloco de codigos do if onde temos uma variavel para armazenar o indice que entrou neste bloco com metodo indexOf(),  que fará o processo de trazer este indice para ser armazenado, o que nesse caso vamos receber como resultado indice 2.

o return dentro do if vai trazer o nome e nota do aluno
[0 - alunos] [indice vai ser o 2]
E a nota do Aluno 
[1 - mediasDosAlunos][indice vai ser o 2]
*/
