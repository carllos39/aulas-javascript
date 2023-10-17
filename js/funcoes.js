"use strict";
//Sobre funções
//Funções são blocos de códigos  que  podem  ser executados  e reaproveitados em praticamente qualquer  lugar  de  uma  aplicação /site.
//Usar funções tambem é benefico do ponto de vista de organização de códigos.
//O js já possui centenas  de funções prontas:
//Exemlpo: log(), alert(),prompt(),toFixed(),etc...
//Como escrever funções em JS?
//Forma1: função anômima
const exemplo1=function(){
    console.log("Função anônima");

}
//Forma2: Função nomeada/declarada

function exemplo2(){
    console.log("Função nomeada/declarada");
}

//Forma3:arrow function
const exemplo3=()=>{
    console.log("Arrow Function");
}
//Chamada de função
exemplo1();
exemplo2();
exemplo3();
//Exemplos diversos
//Função com parâmetro e retorno de dados/resultados
function somar(valor1,valor2){
     return valor1 + valor2;

}
console.log(somar(10,20));
console.log(somar(15,50));
console.log(somar(30,47.8));
