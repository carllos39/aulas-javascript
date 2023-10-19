let valorDaCotacao=5.03;
let valorEmDolar=250;

function converteMoeda(valor,cotacao){
    return valor*cotacao;
    
}

function formatarMoeda(valor,local,moeda){
    let opcoes={
        style:"currency",
        currency:moeda
    };
    return valor.toLocaleString(local,opcoes);
    }

let valorConvertido=converteMoeda(valorDaCotacao,valorEmDolar);

//console.log(valorEmDolar);
//console.log(valorConvertido);
console.log(formatarMoeda(valorEmDolar,"en","USD"));
console.log(formatarMoeda(valorConvertido,"pt-br","BRL"));
