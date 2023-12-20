const notas = [10, 6.5, 8, 7.5] 

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {  // i é uma abreviação de indice que se chama variavel de controle.
    // somaDasNotas += notas[i]  
    somaDasNotas = somaDasNotas + notas[i]
}

const media = somaDasNotas / notas.length // Ira dividir a soma das notas por 4 que é a quantia de valores de notas.

console.log(media)