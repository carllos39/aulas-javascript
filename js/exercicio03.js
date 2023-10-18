"use strict";

let valor=990;
let dolar= 5.6;
function formatarValor(valor){
    let opcoes={
        style:"currency",
        currency:"BRL"
}
return valor.toLocaleString("pt-br",opcoes);
}


function converteValor(valor){
     
    return valor * dolar;
  

}
console.log(formatarValor(converteValor(valor)));


