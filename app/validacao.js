function verificaChuteValido(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        if(chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `
                <h1>Fim de jogo!</h1>
                <h3>O número secreto era ${numeroSecreto}</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `;

            document.body.style.backgroundColor = "#B32C12";
            document.getElementById('jogar-novamente').classList.add('btn-red');
        } else {
            elementoChute.innerHTML += '<div>Valor inválido.</div>';
        }
        
        return;
    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += '<div>Valor inválido.</div>';
        return;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});