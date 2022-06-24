// let pessoa = {
//     nome: "Matheus",
//     sobrenome: "Fraga",
//     empresa: "Sujeito Programador",
//     cargo: "Programador FullStack"
// };

// console.log(pessoa);
// //console.log(pessoa.cargo);


// const { nome:nomePessoa, cargo, empresa, sobrenome } = pessoa;

// console.log(nomePessoa);
// console.log(sobrenome);
// console.log(cargo);
// console.log(empresa);


//============================================
//Desconstrução de array

let nomes = ["Matheus", "Lucas", "Henrique"];

// let { 0:matheus, 2:henrique } = nomes;

// console.log(matheus);
// console.log(henrique);

let [primeiroNome, segundoNome] = nomes;

console.log(primeiroNome);
console.log(segundoNome)