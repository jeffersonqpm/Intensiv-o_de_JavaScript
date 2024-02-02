const botaoPayPause = document.getElementById('play-pause');
const botaoProximo = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audio = document.getElementById('audio-capitulo');

let tocando = false;
const numeroCapitulo = 10;
let capituloAtual = 1;



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

    audio.src = "/books/dom-casmurro/" + capituloAtual + ".mp3"
    play();

}

function voltar(){

    if(capituloAtual ===1){
        capituloAtual = numeroCapitulo;

    }else{
        capituloAtual--;
    }
    audio.src = "/books/dom-casmurro/" + capituloAtual + ".mp3"
    play();
}


botaoPayPause.addEventListener('click', playOrPause)
botaoProximo.addEventListener('click', proximo);
botaoVoltar.addEventListener('click', voltar);
