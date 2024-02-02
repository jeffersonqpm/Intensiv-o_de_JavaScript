const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const capitulo = document.getElementById('capitulo');

const audiocapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = false;
let capituloAtual = 1;

const botaoTema = document.getElementById('thema');
const corpo = document.getElementById('corpo');
let tema = false;

function tocarFaixa() {

    audiocapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {

    audiocapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');

}


function PlayOrPause() {
    if (taTocando === false) {

        tocarFaixa();
        taTocando = true;

    } else {
        pausarFaixa();
        taTocando = false;
        // botaoPlayPause.addEventListener('click', pausarFaixa);
    }


}

function trocarTitulo() {

    capitulo.innerText = "Capítulo " + capituloAtual;
}

function proximaFaixa() {

    if (capituloAtual === numeroCapitulos) {

        capituloAtual = 1;

    } else {

        capituloAtual++; // capituloAtual = capituloatual+1;
    }

    audiocapitulo.src = "/Aplicação/books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = true;
    trocarTitulo();

}

function VoltarFaixa() {

    if (capituloAtual === 1) {

        capituloAtual = numeroCapitulos;

    } else {

        capituloAtual--; // capituloAtual = capituloatual-1;
    }

    audiocapitulo.src = "/Aplicação/books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = true;
    trocarTitulo();

}

function mudarTema() {

    if (tema === false) {
        corpo.classList.remove('modoClaro');
        corpo.classList.add('modoEscuro');
        tema = true;
        botaoTema.classList.remove('bi-lightbulb-off-fill');
        botaoTema.classList.add('bi-lightbulb-fill');

    } else {
        corpo.classList.remove('modoEscuro');
        corpo.classList.add('modoClaro');
        tema = false;
        botaoTema.classList.remove('bi-lightbulb-fill');
        botaoTema.classList.add('bi-lightbulb-off-fill');

    }
}



botaoPlayPause.addEventListener('click', PlayOrPause);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', VoltarFaixa);

botaoTema.addEventListener('click', mudarTema);




