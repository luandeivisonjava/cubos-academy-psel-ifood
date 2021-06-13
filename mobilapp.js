function solucao(tempo, distancia) {
    let resultado = "";
	if(tempo <5){
    resultado = 600;
        console.log(resultado);
        resultado ="";
  } else if (tempo <=60){
    resultado =  (tempo * 100) + (distancia * 50);
      console.log(resultado);
      resultado ="";
  }else if (distancia <100){
      resultado = distancia * 200;
      console.log(resultado);
      resultado ="";
  }else {
     resultado =  distancia * 150;
      console.log(resultado);
      resultado ="";
  }
}