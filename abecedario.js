function solucao(letra, palavras) {
    let resultado = [];
for (let item of palavras){
    if (item[0] !== letra){
        resultado.push(item);
     }
 }
console.log(resultado.length);

}