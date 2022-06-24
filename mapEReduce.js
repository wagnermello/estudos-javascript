// MAP = PERCORRER TODO UM ARRAY

// let lista = ["MATHEUS", "JOSE", "MARIA", "LUCAS"];

// lista.map((item, index) => {
// console.log(`PASSANDO: ${item} - Está na posição ${index}`)
// })







//Reduce = O reduce busca reduzir um array.

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - Total até o momento`);
    console.log(`${numero} - Valor atual`);
    // console.log(`${indice} - Posição (índice) atual`);
    // console.log(`${original} - Array original`);
    console.log("============================")

    return acumulador += numero;
})

console.log("TOTAL DO REDUCE " + total);

