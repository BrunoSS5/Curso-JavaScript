// ForEach - passa por todos os elementos
const notas = [ 10, 6.5, 8, 7.5]

let somaDasNotas = 0
// callback - porque o parametro da função não é um dado, por isso ela é uma função que chama outra.
//notas.forEach( nota => {
 //  somaDasNotas += nota
//})

notas.forEach(function(nota){
 somaDasNotas += nota
})
let media = somaDasNotas/notas.length

console.log(media)