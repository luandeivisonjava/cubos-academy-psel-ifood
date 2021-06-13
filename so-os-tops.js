function solucao(produtos) {
	let prodTop = [];
let normal= [];

let totalTops = 0;
let totalNormal= 0;



for(item of produtos){
  if(item.preco >= 10000){
  prodTop.push(item.preco);
item++;
  }else{
    normal.push(item.preco);
item++;
  }
}

for(let item = 0; item < prodTop.length; item++){
  totalTops = totalTops + prodTop[item];
}

for(let item = 0; item < normal.length; item++){
  totalNormal = totalNormal + normal[item];
}

let totalTopNormal = totalTops + totalNormal;
const resultado = {
  totalTop: totalTops,
  percentual: totalTops / totalTopNormal
}
 console.log(resultado);
    
}
