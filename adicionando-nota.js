const notas = [10, 6, 8] // Mesmo sendo uma constante pode-se atribuir valores na array com métotos próprios do array.//

notas.push(7)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length // o length faz a contagem de valores da const usando esse valor na divisão da operação.

console.log(media)
