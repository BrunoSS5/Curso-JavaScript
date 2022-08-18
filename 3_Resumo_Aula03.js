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

/* AULA 03 - VIDEO 02 - ARQUIVO: for.js

Para exibir o numero do indice passamos para o console a variavel criada para fazer o loop, no exemplo a let i(variavel de controle para o for) que esta armazenado a cada volta o valor do indice incrementando de 1 em 1 Exmplo: 0, 1, 2, 3...
Para ver o conteúdo, utilizamos a array que desejamos acessar e coloca-se dentro de conchetes o indice que queremos acessar, nesta situação pega-se a variavel do for, que no caso é o (i) que será os indices da array que estamos utilizando. 
Exemplo: numeros[i] - assim vai ser exibido todos os conteúdos, mediante a passagem de cada indice, ja que o for vai incrementa a variavel i de um em um, indice 0, 1, 2..., vai exibindo o elemento que estiver na posição do indice atual. No caso da const numero[0] na posição zero, o elemento é o 100.
*/

const numeros = [ 100, 200, 300, 400, 500, 600, 700, 800]

for (let i = 0; i< numeros.length; i++){
    console.log(i, numeros[i])
}
/*
SAIDA:
0 100
1 200
2 300
3 400
4 500
5 600
6 700
7 800
*/

/* AULA 03 - VIDEO 03 - ARQUIVO: media-for.js

O for nesta aula vai fazer uma soma!
Temos uma variavel externa ao loop(somaDasNotas) para armazenar o valor da soma das notas a cada iteração do for, dentro do bloco, temos a variavel (somaDasNotas) realizando a soma e recebendo as informações da array notas[i], que a cada passagem do for pelos indices, os elementos estão sendo somados, e armazenado na variavel externa somaDasNotas. 
*/
const notas = [ 10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i=0; i < notas.length; i++){
    somaDasNotas += notas[i];
    console.log(somaDasNotas)
    /*SAIDA: 10
            16.5
            24.5
            32
            */
}

let media = somaDasNotas/notas.length;

console.log(media)
//SAIDA: "8"

/* AULA 03 - VIDEO 04 - ARQUIVO media-foreach.js

ForEach - passa por todos os elementos de uma array, a principal caracteristica dessa função é não precisar passar os numeros dos indices de uma array, ela irá pecorrer toda a array automaticamente do inicio ao fim, nesta situação estamos somando todos os elementos e salvando na variavel criada fora do bloco de codigo do ForEach,  neste Caso a (somaDasNotas).
Podemos utilizar com uma arrays function:

notas.forEach( nota => {
 somaDasNotas += nota
*/

// Ela é uma função callback - porque o parametro da função não é um dado, por isso ela é uma função que chama outra, o parametro passado nela deve ser uma outra função e não uma string, ou number...
const notas2 = [ 10, 6.5, 8, 7.5]

let somaDasNotas2 = 0

//Utilizando com uma função anonima!
notas2.forEach(function(nota){
 somaDasNotas2 += nota
})
let media2 = somaDasNotas2/notas.length

console.log(media2)
//SAIDA: 8