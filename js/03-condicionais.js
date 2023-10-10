//Estruturas de controle condsicional
// Comando que permite  análisar  uma  ou mais  condições .
//E apartir  do resultado desta análise (verdadeiro ou falso), o programa pode executar  ações diferentes.


//Comandos mais comuns
 // if (se), else (senão)
 
 let usuario="Juan";
 let idade=25;
 let mensagem;//indefinida

 //Verificar se a idade é maior ou menor
 if(idade>= 18){
  mensagem= "maior";

 }else{
    mensagem= "menor";
 }

 console.log(`${usuario} é ${mensagem} de idade!`);
