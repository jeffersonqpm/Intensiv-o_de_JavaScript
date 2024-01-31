const botaoPlayPause = document.getElementById('play-pause');
const botaoavancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audiocapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = false;
let capituloAtual = 1;

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

function proximaFaixa() {

    if (capituloAtual === numeroCapitulos) {

        capituloAtual = 1;

    } else {

        capituloAtual++; // capituloAtual = capituloatual+1;
    }

    audiocapitulo.src = "/Aplicação/books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();

}

function FaixaAnterior() {

    if (capituloAtual === numeroCapitulos) {

        capituloAtual = 1;

    } else {

        capituloAtual--; // capituloAtual = capituloatual-1;
    }

    if (capituloAtual === 0) {
        capituloAtual = 10;

    }

    audiocapitulo.src = "/Aplicação/books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();

}


// botaoPlayPause.onclick(tocarFaixa); // pode usar este tambem
// função suprema
botaoPlayPause.addEventListener('click', PlayOrPause);
botaoavancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', FaixaAnterior);




