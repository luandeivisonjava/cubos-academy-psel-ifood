function solucao(precos) {
    let min = Math.min(...precos);
      let total = 0;
      if (precos.length >=5){
        for(let item = 0; item < precos.length; item++){
        total = total + precos[item];
      }
      console.log(total-min)
      }else{
          for(let item = 0; item < precos.length; item++){
        total = total + precos[item];
      }
      console.log(total)
      }
      
  }