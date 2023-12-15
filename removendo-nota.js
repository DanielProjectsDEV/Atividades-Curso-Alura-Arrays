const notas = [10, 6, 8, 5.5, 10]

notas.pop(10) // Método pop() remove o ultimo elemento da array.

console.log(notas) // 10, 6, 8, 5.5

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A média das notas é ${media}`)