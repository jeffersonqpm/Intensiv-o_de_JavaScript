const botaoPlayPause = document.getElementById('play-pause');
const audiocapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = false;

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

// botaoPlayPause.onclick(tocarFaixa); // pode usar este tambem
// função suprema
botaoPlayPause.addEventListener('click', PlayOrPause);




