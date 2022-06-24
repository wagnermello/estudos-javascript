//FIND

// let listagem = [5, 3, "Jose", 2, "Matheus"];

// let busca = listagem.find((item) => {
//     if (item === "Jose"){
//         return console.log("ITEM ENCONTRADO COM SUCESSO");

// })

// console.log(busca);


let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador"];

let resultado = palavras.filter((item) => {
    return item.length <=6;
})

console.log(resultado);