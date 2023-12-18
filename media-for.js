const notas = [10, 6.5, 8, 7.5] 

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {  // i é uma abreviação de indice.
    somaDasNotas += notas[i]
}

console.log(somaDasNotas)