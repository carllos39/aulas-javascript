//Estruturas de controle condicional
// Comando que permite  análisar  uma  ou mais  condições .
//É apartir  do resultado desta análise (verdadeiro ou falso), o programa pode executar  ações diferentes.


//Comandos mais comuns
 // if (se), else (senão)
 
 let usuario= prompt("Qual seu nome?");
 let idade= prompt("Quantos anos você tem");
 
 let mensagem; //indefinidas


 //Verificar se a idade é maior ou menor
 //if(idade>= 18){
 // mensagem= "maior";

 //}else{
   // mensagem= "menor";
 //}

 //console.log(`${usuario} é ${mensagem} de idade!`);

// alert(`${usuario} é ${mensagem} de idade!`);

//Condicional encadeada/sucessiva

if(idade >= 60){
    mensagem= "idoso(a)";
  
   }else if(idade>=18){
      mensagem= "adulto(a)";
   }else{
    mensagem="menor";
   }
  
   console.log(`${usuario} você tem ${idade} anos e é ${mensagem}`);
  
   alert(`${usuario} você tem ${idade} anos e é ${mensagem}`);