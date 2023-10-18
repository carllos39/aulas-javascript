"use strict"

let valor=960;
let dolar= 5.3;



function converteValor(valor){
     
    return valor * dolar;
  

}

console.log(`O valor em reais é ${converteValor(valor).toLocaleString("pt-br",{style:"currency",currency:"BRL"})}`);


