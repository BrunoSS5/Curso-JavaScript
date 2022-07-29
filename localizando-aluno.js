const alunos = [ 'Miguel', 'Ruanito', 'Ponga', 'Milena']
const mediasDosAlunos = [ 10, 7, 9, 6]

let listaDeNotasEAlunos = [ alunos, mediasDosAlunos]

// includes -> booleano
// indexOf retorna o numero do indice
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é: '  + listaDeNotasEAlunos[1][indice]
    } else { 
        return 'Aluno(a) não cadastrado.'
    }
}
console.log(exibeNomeNota('Ponga'))
