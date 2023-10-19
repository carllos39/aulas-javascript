"use strict";
//Funções de seleção do Dom
//-getElementById();
//Seleciona UM elemento através de um id.
// querySelector();
//Seleciona UM elemento através de um seletor.
//queryAS\electorAll();
//Seleciona VÁRIOS elementos através de um seletor(es).

//Exemplos:

const subtitulo=document.getElementById("subtitulo-dom");

const desenho=document.querySelector(".exemplo");
console.log(desenho);

const descricao=document.querySelector("#descricao");
console.log(descricao);

const variosElementos=document.querySelectorAll("h3,a");
console.log(variosElementos);
console.log(variosElementos[1]);

//Modificando o DOM
const titulo=document.querySelector("h1");
titulo.textContent="Bem vindo a o  JavaScript!";

titulo.style.textAlign="center";//css inline via JS.

titulo.classList.add("destaque");//Classe CSS via JS.

const linksReferencia=document.querySelectorAll("ul li a");
console.log(linksReferencia);

let quantidadeLinks=linksReferencia.length;

//for(let i=0;i < linksReferencia;i++){
    //linksReferencia[i].setAttribute("target","_blank");
    
//}
for(let link of linksReferencia){
    link.setAttribute("target","_blank");


}
//Manipulação de Eventos
const reprodutorAudio=document.querySelector("#reprodutor-audio");
const imagemMeme=document.querySelector("#imagem-meme");


const pagina=document.querySelector("body");
const exemplo01=document.querySelector("#exemplo01");
const mensagem=document.querySelector("#mensagem");
//Ouvite de evento
exemplo01.addEventListener("click",function(){
    pagina.style.fontFamily= "Verdana";
    mensagem.textContent="Fonte alterada!";
    mensagem.style.backgroundColor="yellow";
    reprodutorAudio.play();
    imagemMeme.removeAttribute("hidden");
});
//Exemplo modo noturno
const botao=document.querySelector("#noturno");
botao.addEventListener("click",gerenciarModoNoturno);
function gerenciarModoNoturno(){

pagina.classList.toggle("modo-noturno");
if(pagina.classList.contains("modo-noturno")){
botao.textContent="Desativar";
}else{
botao.textContent="Ativar";
}
}



