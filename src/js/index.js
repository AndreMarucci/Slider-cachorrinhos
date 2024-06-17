const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");


btnAvancar.addEventListener ("click", function() {
    if (cartaoAtual === cartoes.length -1) return;

    esconderCartaoAparacendo();

    cartaoAtual++;

    monstrarProximoCartao();
});

btnVoltar.addEventListener ("click", function(){
    if (cartaoAtual === 0) return;

    esconderCartaoAparacendo();

    cartaoAtual --;

    monstrarProximoCartao();
});



function monstrarProximoCartao() {
    cartoes[cartaoAtual].classList.add("aparecendo");
};

function esconderCartaoAparacendo() {
    const cartaoAparacendo = document.querySelector(".aparecendo");

    cartaoAparacendo.classList.remove("aparecendo");
};
