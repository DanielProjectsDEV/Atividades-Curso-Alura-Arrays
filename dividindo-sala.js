const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const dividindo = []

// const sala1 = alunos.slice(0, 10) //o Método Slice() significa Fatiar o primeiro parametro sera onde começa a fatia e os segundo parametro onde termina a fatia.
// const sala2 = alunos.slice(10) // Nesse caso precisa só colocar o primeiro parametro (onde começa a fatia) pois o Js vai entender que a fatia vai ate o ultimo elemento da lista.

//Podendo também resumir o código assim:

const sala1 = alunos.slice(0, alunos.length / 2)
const sala2 = alunos.slice(alunos.length / 2)
console.log(sala1)
console.log(sala2)

