/* AULA 03 - VIDEO 02 - ARQUIVO: for.js

Para exibir o numero do indice passamos para o console a variavel criada para fazer o loop, no exemplo a let i que esta armazenado o indice.
Para ver o conteúdo, utilizamos a array que desejamos acessar e coloca-se dentro de conchetes o indice que queremos acessar, nesta situação pega-se a variavel do for, que no caso é o (i) que será os indices da array que estamos utilizando. 
Exemplo: numeros[i] - assim vai ser exibido todos os conteúdos, mediante a passagem de cada indice, ja que o for vai incrementa a variavel i de um em um, indice 0, 1, 2...
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