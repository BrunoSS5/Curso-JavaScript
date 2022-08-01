const nome = ["Bruno", "Karol", "Ana", "Leo", "Joaquim"];
// só podemos passar como parametro para o forEach uma outra função.
nome.forEach(imprimeNomes)

function imprimeNomes(nome) {
    console.log(nome)
}