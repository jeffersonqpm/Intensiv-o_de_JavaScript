const botaoPlayPause = document.getElementById('play-pause');
const audiocapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;

function tocarFaixa() {

    audiocapitulo.play();
}

function pausarFaixa() {

    audiocapitulo.pause();

}

botaoPlayPause.addEventListener('click', tocarOuPausar);
// botaoPlayPause.onclick(tocarFaixa); // pode usar este tambem
// função suprema
function tocarOuPausar() {
    if (taTocando === 0) {

        tocarFaixa();
        taTocando = 1;

    } else {
        pausarFaixa();
        // botaoPlayPause.addEventListener('click', pausarFaixa);
        taTocando = 0;
    }

}





