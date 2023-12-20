const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0
//  console.log(notasGerais.length) 
for (let i = 0; i < notasGerais.length; i++) {    //esse for vai percorres os 3 indices da const notasGerais
  for (let j = 0; j < notasGerais[i].length; j++) {  //esse for vai acessar os valores dentro de cada indice dentro de notas1 notas2 notas3 
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
media = media/notasGerais.length
 
console.log(media)
