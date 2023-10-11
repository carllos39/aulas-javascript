"use strict";
const mediaMinima=7;
const limiteDeFaltas=10;

//Resultado do aluno fectício
let aluno="Carlos";
let mediaFinal=4.5;
let faltas=10;
let resultado;
//Operador E ou End &&

//if(mediaFinal >=mediaMinima && faltas < limiteDeFaltas){
resultado="aprovado!";
//}else{
    //resultado="aprovado!";
//}

//if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
  // resultado="APROVADO!";
//}else if(faltas > limiteDeFaltas){
    resultado="REPROVADO POR FALTAS!";
//}else{
    resultado="REPROVADO!";   
//}

if(faltas > limiteDeFaltas){
    resultado="Reprovado por faltas";

}else if(mediaFinal >= mediaMinima){
    resultado="Aprovado";

}else{
    resultado="Reprovado";
}

console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`A média do aluno: ${mediaFinal} `);
console.log(`Faltas do aluno: ${faltas}`);

console.log("------------------------------------------");
//Operador lógico || ou

let diaDasSemana="domingo";
if(diaDasSemana == "sabado" || diaDasSemana=="domingo"){
    console.log("Final de semana");

}else{
    console.log("Vá trabalhar...");    
}