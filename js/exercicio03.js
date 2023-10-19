"use strict";

let valor=118;
let dolar= 5.1;
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





