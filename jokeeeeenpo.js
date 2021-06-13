function solucao(joao, andre) {
    if(joao == andre){
        console.log("EMPATE");
    }else if(joao === "PEDRA" && andre === "TESOURA"){
        console.log("JOAO");
    }else if(andre === "PEDRA" && joao === "TESOURA"){
        console.log("ANDRE");
    }else if(joao === "PEDRA" && andre === "PAPEL"){
        console.log("ANDRE");
    }else if(andre === "PEDRA" && joao === "PAPEL"){
        console.log("JOAO");
    }else if(joao === "PAPEL" && andre === "TESOURA"){
        console.log("ANDRE");
    }else{
        console.log("JOAO");
    }
}