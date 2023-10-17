"use atrict";
//Comandos de repetição,instrucões para realizar ações por uma quantidade  especifica de vazes.

//Comandos tradicionais:
//while -> enquanto
//do/while -> faça /enquanto
//for -> para
//Obs: normalmente o loop é controlado através  de uma variável  contadora.

//let contador=1;
//while(contador <= 5){
//console.log(`Valor de contador : ${contador}`);
//contador ++;//incremento
//}

//Exemplo do/while
// let i=1;

// do {
//     console.log(`Contador vale: ${i}`);
//     i++;
// } while (i <= 3)


//Exemplo FOR -> Para
// for(let i=1;i <= 10;i++){
//     console.log(`i vale ${i}`);

// }

// Loop com array


let clientes=["Dio","Martin","Hughes","Gillan","Bruno","Marcos","Manoel"];
//Menoria cache da quantidade de elementos do array
let quantidade=clientes.length;
for(let i=0;i < quantidade; i++){
    console.log(`Clientes: ${clientes[i]}`);

}

console.log('--------------------------------------------');
// for/of para array

let bandas=["Slayer","Dream Theater","Nightwish"];
for(let banda of bandas){
console.log(banda);
}









//for /in -> objeto