// REST Operatos.

// function convidados(...nome){
//     console.log("SEJAM BEM VINDOS TODOS CONVIDADOS");
//     console.log(nome);
// }

// convidados("Matheus", "Lucas", "Maria");

function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numeroGerado]);
}

sorteador(1,2,3,6,77,5,4,22);