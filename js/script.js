let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {

    console.log("calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtCarne = adultos * carnePP(duracao) + (criancas * carnePP(duracao) / 2);
    let qtCerveja = adultos * cervejaPP(duracao);
    let qtRefri = adultos * refriPP(duracao) + (criancas * refriPP(duracao) / 2);
    
    resultado.innerHTML = `<p>${qtCarne / 1000} Kg de carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtCerveja / 365)} Latas de cerveja.</p>`
    resultado.innerHTML += `<p>${qtRefri / 1000} L de refrigerante.</p>`
    
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function refriPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

