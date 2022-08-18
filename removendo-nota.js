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