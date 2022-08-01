const salaJS = [ 7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [ 6, 5, 8, 9, 5, 6];
const salaPython = [ 7, 3.5, 8, 9.5];

// reduce comprime uma array somando os elemtos dentro um por um, o 0 seguifica o valor inicial da soma. acum e atual não são nomes padrão, pode A e B por exemplo o qualquer outro nome.
function mediaSala( notaDaSala){
    const somaDasNotas = notaDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notaDaSala.length
}

console.log( `Média da Sala de JavaScript: ${ mediaSala(salaJS)}`)
console.log( `Média da Sala de Java: ${ mediaSala(salaJava)}`)
console.log( `Média da Sala de Python: ${ mediaSala(salaPython)}`)