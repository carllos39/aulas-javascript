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

//Formatação de valores
let preco=5500;
let desconto=preco * 0.10;
let precoFinal =preco-desconto;

function formatarPreco(valor){
let opcoes={
    style:"currency",
    currency:"BRL"
};
return valor.toLocaleString("pt-br",opcoes);
}

console.log(`Preço:${formatarPreco(preco)}`);
console.log(`Desconto:${formatarPreco(desconto)}`);
console.log(`Preço final:${precoFinal.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}`);

console.log("----------------------------------------------------------------------");

//Arrow Function
//Sintase moderna para funções  no JS,bastante usada  por bibliotecas ,frameworks(React,Angular,Vue etc).
// A sitexe geral é;
//const algumNome=()=>{};
//No entanto ,  esta  sintaxe pode ser mais consiça.
// Versão 1
//function dobra(valor){
   // return valor * 2;

//}
//Versão 2
//const dobra=(valor)=>{
    //return valor *2;

//};
//Versão 3
const dobra=valor => valor * 2;
 console.log(dobra(10));
console.log(dobra(1325));
console.log(dobra(55.47));


