const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio(){
    return parseInt((Math.random() * maiorValor + 1) + menorValor);
}

console.log("Número secreto: ", numeroSecreto);
