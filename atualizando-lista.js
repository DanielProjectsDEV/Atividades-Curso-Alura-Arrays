const lista = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"]

lista.splice(1, 2, "Rodrigo") // Nesse caso o primeiro parametro diz de onde ele começa a remover e o segundo parametro diz quantos elementos apartir do primeiro ele deve remover
// E o terceiro parametro deste método vai adicionar um elemento novo na lista no lugar onde foi retirado o primeiro elemento.
// Lembrando que o Método .splice() altera diretamente a lista da array.
// lista.push("Rodrigo")

console.log(lista)