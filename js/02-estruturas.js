// Estruturas de dados
// Arrays são lista de dados  indexidos , sequenciais  acessiveis por um índice númerico.
// Objetos  de dados não indexidos  e formado,s  por propriedades  e valores

// Arrays
let cursos=["Node.js","React","SQL","UX/UI Desing"];
console.log(cursos);//saida direta no console

console.log(cursos[2]);//SQL

//Exercicio
//1-Criar uma consntante chamada  "dados" e coloque  nela  os dados  de uma pessoa :nome,
//sobrenome, idade, telefone e cidade.

//2-Mostre  no console  uma mensagem contendo somente o nome  e a idade  da pessoa .Exemplo "Fulano tem 25 anos"

const dados=["Maria","Aparecida" ,"987456123","Cajamar",25];
console.log(dados);

console.log(dados);
console.log(`${dados[0]} tem ${dados[4]} anos.`);

console.log("------------------------------------");

//Objeto

let carro={
    marca:"Fiat",
    modelo:"Uno com escala",
    portas:2,
    cor:"branco",
    opcionais:["Ar condicionado","Vidros eletrico","Alarme"]
};
console.log(carro);
console.log(carro.modelo);
console.log(`Carros da ${carro.marca} tem a ${carro.cor}.`);

console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[2]}`);