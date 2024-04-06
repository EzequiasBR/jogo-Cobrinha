// import { atualizarPlacar } from "./atualizar_pontos.js";
import { iniciarPlacar, verificarNome } from "./atualizar_pontos.js";
import { canvas } from "./menu.js";
const tela = document.querySelector('.jogar-tela');
let nomeJogador = document.getElementById("nomeInput");
const btnIniciarJogo = document.querySelector('.btn-iniciarJogo');

function telaInicial() {
  
   tela.style.display = "none";
   canvas.style.filter = "none";
   
   let jogador = nomeJogador.value;
   localStorage.setItem("nomeJogador", jogador);
   
}

btnIniciarJogo.addEventListener('click', () => {
   if (!nomeJogador.value) {
      nomeJogador.placeholder = "Por favor, preencha este campo.";
   }
   else {
      verificarNome(nomeJogador.value);
      telaInicial();
      iniciarPlacar();
   }
})





