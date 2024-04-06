import { canvas, size, finalScore } from './menu.js';
import { cobrinha } from './03_criar_desenho.js';
import { gameOver } from './teclado.js';
import { atualizarPlacar } from './atualizar_pontos.js';
const audioGameOver = new Audio('http://localhost/jogoDa_cobrinha/public/audio/game-over.mp3');

let gameOverSoundPlayed, atualizarPlacarAgora;

export const cobrinhaColidiu = () => {
   const head = cobrinha[cobrinha.length - 1];
   const canvasLimit = { width: canvas.width - size, height: canvas.height - size };
   const indiceCorpo = cobrinha.length - 2;

   const colidiuNaParede = head.x < 0 || head.x > canvasLimit.width || head.y < 0 || head.y > canvasLimit.height;

   const colidiuNoCorpo = cobrinha.find((position, index) => {
      return index < indiceCorpo && position.x == head.x && position.y == head.y;
   });

   if (colidiuNaParede || colidiuNoCorpo) {

      if (!gameOverSoundPlayed) {
         console.log('entro')
         audioGameOver.play();
         gameOverSoundPlayed = true;
         atualizarPlacar();
      }

      gameOver();

      if (!atualizarPlacarAgora) {
         atualizarPlacar();
         atualizarPlacarAgora = true;
      }
      audioGameOver.addEventListener('ended', () => {
         audioGameOver.pause();
      });
   } else {
      atualizarPlacarAgora = false;
      gameOverSoundPlayed = false;
   }
}