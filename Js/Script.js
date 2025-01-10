const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const textoReinicio = document.getElementById('textoReinicio');
const audio = document.getElementById('myAudio');
const musica = document.getElementById('musica');
const h1 = document.getElementById('contagem');
const jumpAudio = document.getElementById('jumpAudio');
let loopAux = false;

const jump = () => {
    mario.classList.add('jump');
    jumpAudio.play()
    contagem++; // Incrementa o contador
    h1.textContent = `${contagem}`;
    setTimeout(() => {
         mario.classList.remove('jump');
         
    }, 400);
 
}

const gameOverMusic = () => {
    audio.play(); // musica de game over
    setTimeout(() => {

        audio.pause();

    }, 7000);
}

const atualizapag = () => {
    location.reload(); // Recarrega a página
}

const loop = setInterval( () => {

      //logica para parar o jogo
      let loop = true
      if(loopAux == true){
      loop = false
      }

      const cloudsPosition = cloud.offsetLeft;   
      const pipePosition = pipe.offsetLeft;
      const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

      if(pipePosition <= 115  &&  pipePosition > 0 && marioPosition < 80 && loop == true) {
        musica.pause(); // remove musica caso de game over 
        jumpAudio.pause() 
        gameOverMusic();
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        cloud.style.left = `${cloudsPosition}px`;
        cloud.style.animation = 'none';
        mario.style.width= '75px';
        mario.style.height= '75px';
        mario.style.marginLeft = '50px';
        mario.classList.remove('jump'); // remove animacao de pulo     
        mario.src = '.../Images/super-mario-world-game-over.gif'; // muda para mario abatido
        mario.classList.add('gameover');  // adiciona a animacao do mario caindo   
        setTimeout(() => {
    
            mario.classList.remove('gameover'); // remove a animacao do mario caindo
            mario.style.bottom = '-150px' ; //matem o mario a baixo
    
        }, 1500);
        textoReinicio.style.display = 'block';  // mostra texto de reinicio
        loopAux = true;
        };

}, 1);

document.addEventListener('keydown', () => {
    if(loopAux == true){
       atualizapag();
    }
});


document.addEventListener('keydown', jump);
