// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]; // concatenação de listas contendo agora alunos no indice 0 e medias no indice 1.

function alunoENota(aluno){ 
    if (listaDeAlunosEMedias[0].includes(aluno)) {    // Sí em listaDeAlunosEMedias no indice [0] que a é lista alunos inclui o elemento (aluno) mostrar "Aluno Cadastrado" (O método .includes sempre retorna true)
        console.log(`O Aluno ${aluno} esta Cadastrado`)

        const indice = listaDeAlunosEMedias[0].indexOf(aluno) // O método indexOF dirá em qual indice o aluno informado esta na lista: listaAlunoseEMedias no indice 0 que é a lista alunos
        const MediaDoAluno = listaDeAlunosEMedias[1][indice] // esta const vai armazenar o valor dado pelo indexOF dentro da listaDeAlunosEMedias no indice 1 que é a lista de medias.

        console.log(`A média do aluno informado é ${MediaDoAluno}`)

    } else {
        console.log("Aluno não encontrado!")
    }
}

alunoENota("João")   // Chamada da Function.