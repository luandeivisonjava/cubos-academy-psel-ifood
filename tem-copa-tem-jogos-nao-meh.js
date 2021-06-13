function solucao(ano) {
    let ultimaCopa = 2018;
    
    
    let dados = (ano - ultimaCopa) % 4;
    
    
    if(dados == 0){
      console.log("COPA");
    }else if(dados == 1){
      console.log("MEH");
    }else if(dados == 2){
      console.log("JOGOS");
    }else{
      console.log("MEH");
    }
    }