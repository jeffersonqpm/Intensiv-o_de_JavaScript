let botaoPayPause = document.getElementById('play-pause');
let botaoProximo = document.getElementById('proximo');
let botaoVoltar = document.getElementById('anterior');

const audio = document.getElementById('audio-capitulo');

const botaoTema = document.getElementById('thema');
let botaoCor = document.getElementById('botao-color');
const corpoPrincipal = document.getElementById('corpo');

const titulo = document.getElementById('capitulo');

let tocando = false;
const numeroCapitulo = 10;
let capituloAtual = 1;
let temaEscuro = false;

let corBotao = 1;



function play() {

    audio.play();
    botaoPayPause.classList.remove('bi-play-circle-fill');
    botaoPayPause.classList.add('bi-pause-circle-fill');
    tocando = true;
}

function pause() {

    audio.pause();
    botaoPayPause.classList.remove('bi-pause-circle-fill');
    botaoPayPause.classList.add('bi-play-circle-fill');
    tocando = false;
}

function playOrPause() {

    if (tocando === false) {
        play();

    } else {
        pause();
    }
}

function proximo() {

    if (capituloAtual === numeroCapitulo) {
        capituloAtual = 1;
    } else {
        capituloAtual++;
    }

    audio.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    play();
    mudarTitulo();

}

function voltar() {

    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulo;

    } else {
        capituloAtual--;
    }
    audio.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    play();
    mudarTitulo();
}

function mudarTema() {

    if (temaEscuro === false) {
        corpoPrincipal.classList.remove('modoClaro');
        corpoPrincipal.classList.add('modoEscuro');
        temaEscuro = true;
        botaoTema.classList.remove('bi-lightbulb-fill');
        botaoTema.classList.add('bi-lightbulb');
    } else {
        corpoPrincipal.classList.remove('modoEscuro');
        corpoPrincipal.classList.add('modoClaro');
        temaEscuro = false;
        botaoTema.classList.remove('bi-lightbulb');
        botaoTema.classList.add('bi-lightbulb-fill');

    }
}

function mudarTitulo() {

    titulo.innerText = "Sessão " + capituloAtual;
}


function colorButton() {
    

    switch (corBotao) {
        case 1:

            botaoPayPause.style.color = "blue";
            botaoProximo.style.color = "blue";
            botaoVoltar.style.color = "blue";
            corBotao = 2;
            break;

        case 2:
            botaoPayPause.style.color = "rgb(192, 33, 33)";
            botaoProximo.style.color = "rgb(192, 33, 33)";
            botaoVoltar.style.color = "rgb(192, 33, 33)";
            corBotao = 3;
            break;

        case 3:
            botaoPayPause.style.color = "rgb(176, 192, 33)";
            botaoProximo.style.color = "rgb(176, 192, 33)";
            botaoVoltar.style.color = "rgb(176, 192, 33)";
            corBotao = 4;
            break;

        case 4:

            botaoPayPause.style.color = "#FFA500";
            botaoProximo.style.color = "#FFA500";
            botaoVoltar.style.color = "#FFA500";
            corBotao = 5;
            break;

        case 5:
            botaoPayPause.style.color = "#C0FF3E";
            botaoProximo.style.color = "#C0FF3E";
            botaoVoltar.style.color = "#C0FF3E";
            corBotao = 6;
            break;

        default:
            botaoPayPause.style.color = "inherit";
            botaoProximo.style.color = "inherit";
            botaoVoltar.style.color = "inherit";
            corBotao = 1;
            break;

    }

    // SEGUNDA OPÇÃO

    // if (corBotao === 1) {

    //     botaoPayPause = document.getElementById('play-pause').style.color = 'blue';
    //     botaoProximo = document.getElementById('proximo').style.color = 'blue';
    //     botaoVoltar = document.getElementById('anterior').style.color = 'blue';
    //     corBotao = 2;
    //     botaoPayPause = document.getElementById('play-pause');

    // } else if (corBotao === 2) {

    //     botaoPayPause = document.getElementById('play-pause').style.color = 'rgb(192, 33, 33)';
    //     botaoProximo = document.getElementById('proximo').style.color = 'rgb(192, 33, 33)';
    //     botaoVoltar = document.getElementById('anterior').style.color = 'rgb(192, 33, 33)';
    //     corBotao = 3;
    //     botaoPayPause = document.getElementById('play-pause');
    //     botaoProximo = document.getElementById('proximo');
    //     botaoVoltar = document.getElementById('anterior');

    // } else if (corBotao === 3) {

    //     botaoPayPause = document.getElementById('play-pause').style.color = 'rgb(176, 192, 33)';
    //     botaoProximo = document.getElementById('proximo').style.color = 'rgb(176, 192, 33)';
    //     botaoVoltar = document.getElementById('anterior').style.color = 'rgb(176, 192, 33)';
    //     corBotao = 4;
    //     botaoPayPause = document.getElementById('play-pause');

    // } else if (corBotao === 4) {

    //     botaoPayPause = document.getElementById('play-pause').style.color = '#FFA500';
    //     botaoProximo = document.getElementById('proximo').style.color = '#FFA500';
    //     botaoVoltar = document.getElementById('anterior').style.color = '#FFA500';
    //     corBotao = 5;
    //     botaoPayPause = document.getElementById('play-pause');

    // } else if (corBotao === 5) {

    //     botaoPayPause = document.getElementById('play-pause').style.color = '#C0FF3E';
    //     botaoProximo = document.getElementById('proximo').style.color = '#C0FF3E';
    //     botaoVoltar = document.getElementById('anterior').style.color = '#C0FF3E';
    //     corBotao = 6;
    //     botaoPayPause = document.getElementById('play-pause');

    // } else {
    //     corBotao = 1;
    //     botaoPayPause = document.getElementById('play-pause').style.color = 'white';
    //     botaoProximo = document.getElementById('proximo').style.color = 'white';
    //     botaoVoltar = document.getElementById('anterior').style.color = 'white';
    //     botaoPayPause = document.getElementById('play-pause');
    // }



}


botaoPayPause.addEventListener('click', playOrPause)
botaoProximo.addEventListener('click', proximo);
botaoVoltar.addEventListener('click', voltar);
botaoTema.addEventListener('click', mudarTema);
botaoCor.addEventListener('click', colorButton)

