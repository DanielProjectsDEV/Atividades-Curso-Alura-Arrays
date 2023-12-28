const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7  //se a medida for menor do que 7 retorna true.
})

console.log(reprovados)