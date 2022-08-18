// AULA 02 VIDEO 01 - ARQUIVO dividindo-arrays.js

/*
UTILIZANDO O METODO .SLICE() - Cria uma array Nova.
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

//AULA 02 VIDEO 02 - ARQUIVO: atualizando-lista.js

/*
Metodo é o .splice() - Não Cria uma Array Nova.
Esse metodo permite que possamos remover itens e coloque outro no lugar do qual retiramos, o primeiro parametro é o indice onde será o inicio, o parametro dois é a quantidade de elementos que desejamos remover apartir do ponto inicial que definimos, no ultimo parametro serve para colocar o elemento que desejamos inserir na array.

Exemplo splice(parametro 1 - inicio da remoção, parametro 2 - quantidade de elemtos para serem removidos,parametro 3 - item a ser colocado.)

OBS:
Podemos passar esse metodo sem o terceiro parametro e ele vai funcionar normalmente, caso não deserjamos inserir nenhum elemento, tambem podemos inserir algum elemento sem precisar remover algum utilizando zero no parametro 2.
*/

const listaDeChamada1 = ['Mariazinha', ' Juvelnal', ' Fernando', ' Caio','Karol',' Lara']

listaDeChamada1.splice(1,2, 'Santos')
console.log(`Lista de Chamada: ${listaDeChamada1}`)
//Saida - Lista de Chamada: Mariazinha,Santos, Caio,Karol, Lara

//COLOCANDO ZERO NO SEGUNDO PARAMETRO.

const listaDeChamada2 = ['João', ' Pedro', ' thiago', ' Maria',' Selene',' Ruanito']

listaDeChamada2.splice(2,0, ' Bruno')


console.log(`Lista de Chamada: ${listaDeChamada2}`)
//Saida - Lista de Chamada: João, Pedro, Bruno, thiago, Maria, Selene, Ruanito

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

/* AULA 02 - VIDEO 04 - ARQUIVO: lista-duas-dimensoes.js

MATRIZES

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