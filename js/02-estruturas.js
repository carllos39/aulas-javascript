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

//Exercício
//Crie um novo objeto  contendo  informações  de algo que você goste (filme ,livro ,comida jogos etc)
//2-Mostre uma mensagem  com pelo menos duas propriedades  do objeto.

let livro={
    titulo:"php8",
    autor:"Mauricio da Silva",
    paginas:200,
    cor:"branco"
};
console.log(`O autor é ${livro.autor
} nome livro é ${livro.titulo} número de paginas ${livro.paginas} `);

console.log("----------------------------------------------------");
//Objeto com array e com outro objetos

let pessoa={
    nome:"Shiryu",
    idade:20,
    telefones:["11-21350300","11-91234-5678"],

    medidas:{
        peso:65,
        altura:1.75,
    }
};

console.log(`Nome :${pessoa.nome}`);
console.log(`Celular:${pessoa.telefones[1]}`);
console.log(`Peso:${pessoa.medidas.peso} kg`);


//Array de objetos
let alunos=[
{
    nome:"Naruto",
    idade:10
},
{
Nome:"Guts",
idade:30
},

{
    nome:"Dohko",
    idade:120
},
];

console.log(alunos[1].nome);//Guts
console.log(alunos[0].nome);//Naruto
console.log(`O cavaleiro de ouro originalmente era o ${alunos[2].nome} de Libra que tem ${alunos[2].idade} anos`);

//Array matriz

let tecnologias=[
    ["HTML5","CSS3","JavaScrip"],

    ["PHP","SQL","APIS","Nodes","Python"],

    ["Figma","Photoshop"]
];

console.log(tecnologias[1][3]);//Node
console.log(tecnologias[2][1]);//Photoshop
console.log(tecnologias[0][0]);//HTML

//Saida de dados
console.table(cursos);

