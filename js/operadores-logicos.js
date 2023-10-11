"use strict";
const mediaMinima=7;
const limiteDeFaltas=10;

//Resultado do aluno fectício
let aluno="Carlos";
let mediaFinal=8.5;
let faltas=8;
let resultado;
//Operador E ou End &&

if(mediaFinal >=mediaMinima && faltas < limiteDeFaltas){
resultado="aprovado!";
}else{
    resultado="aprovado!";
}
console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`A média do aluno: ${mediaFinal} `);
console.log(`Faltas do aluno: ${faltas}`);