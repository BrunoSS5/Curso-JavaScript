// AULA 01 ARRAY - ARQUIVO: media.js

const notas = [10, 6.5, 8, 7.5];

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)
//Saida: 8

/*
    ARRAY
 Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores. Pode ser usada, por exemplo, para agrupar diversos dados que têm relação entre si.
 Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, e cada elemento se localiza numa posição na lista chamada de índice.
*/

//AULA 01 VIDEO 02 - ARQUIVO adicionando_notas.js
//UTILIZANDO O METODO PUSH
/*
Ele cria um novo elemento no final da array, neste caso o exemplo abaixo, o numero passado foi o 7 entre parenteses, o que chamamos de parametros.
Se não for passado um parametro dentro desse metodo vai ocorrer o erro de NaN - Not A Number.
*/
const notas2 = [10, 6, 8];
notas.push(7)
console.log(notas2)
// saida: [ 10, 6, 8, 7 ]

//AULA 01 VIDEO 03 - ARQUIVO removendo-nota.js

/*
METODO É O .pop()
remove o ultimo elemento, e não precisa utilizar nenhum parametro e ele vai funcionar normalmente, ele não aceita nenhum parametro.
*/

const notas3 = [10, 7, 8, 5, 10]
notas3.pop()
console.log(notas3) // Saida: [ 10, 7, 8, 5 ]

let media3 = (notas3[0] + notas3[1] + notas3[2] + notas3[3]) / notas3.length
console.log(` A média é ${media3}`) // Saida: A média é 7.5

/*
OUTROS METODOS PARA ARRAY

concat()
Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.

filter()
Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

find()
Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

findIndex()
Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

indexOf()
Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array. Caso não exista nenhuma ocorrência do valor, retorna -1.

lastIndexOf()
Funciona da mesma forma que o indexOf(), porém retorna o índice referente à última ocorrência de um valor em um array, varrendo o array de trás para frente.

forEach()
Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

shift()
Retira o primeiro elemento do array.
Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

unshift()
Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.

reduce()
Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

reduceRight()
Funciona igual o reduce() porém começa do final do array e segue até o início.

reverse()
Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

slice()
Copia uma parte do array para outro array.

sort()
Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

splice()
Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
*/