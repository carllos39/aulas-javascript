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

//Manipulação de Eventos

const pagina=document.querySelector("body");
const exemplo01=document.querySelector("#exemplo01");
const mensagem=document.querySelector("#mensagem");
//Ouvite de evento
exemplo01.addEventListener("click",function(){
    pagina.style.fontFamily= "Verdana";
    mensagem.textContent="Fonte alterada!";
    mensagem.style.backgroundColor="yellow";
});




