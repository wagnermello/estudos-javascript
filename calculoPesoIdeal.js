var peso;
var altura;
var imc;
var resultado;


function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    console.log(peso);
    console.log(altura);

    imc = peso / (altura * altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuiado você está muito abaixo do peso!'
    }else if(imc > 17 && imc <= 18.49) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/>Abaixo do peso.'        
    }else if(imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal'
    }else if(imc > 25 && imc <= 29.00){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso!'
    }else if(imc >= 30) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado, está na obesidade'
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

}