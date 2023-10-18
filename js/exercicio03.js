"use strict"

let valor=960;
let dolar= 5.3;



function converteValor(valor){
     
    return valor * dolar;
  

}

console.log(`${converteValor(valor).toLocaleString("pt-br",{style:"currency",currency:"BRL"})}`);


