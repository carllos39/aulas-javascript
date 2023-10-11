"use strict";
const mediaMinima=7;
const limiteDeFaltas=10;

//Resultado do aluno fectício
let aluno="Carlos";
let mediaFinal=5.5;
let faltas=10;
let resultado;
//Operador E ou End &&

//if(mediaFinal >=mediaMinima && faltas < limiteDeFaltas){
resultado="aprovado!";
//}else{
    //resultado="aprovado!";
//}

if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
   resultado="APROVADO!";
}else if(faltas > limiteDeFaltas){
    resultado="REPROVADO POR FALTAS!";
}else{
    resultado="REPROVADO!";   
}


console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`A média do aluno: ${mediaFinal} `);
console.log(`Faltas do aluno: ${faltas}`);
