let valorDaCotacao=5.3;
let valorEmDolar=1500;

function converteMoeda(valor,cotacao){
    return valor*cotacao;
    
}

let valorConvertido=converteMoeda(valorDaCotacao,valorEmDolar);

console.log(valorEmDolar);
console.log(valorConvertido);