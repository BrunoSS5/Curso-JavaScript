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
