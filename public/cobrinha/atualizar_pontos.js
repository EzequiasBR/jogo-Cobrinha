export function atualizarPlacar() {
   $.ajax({
      url: 'osDez_melhores_jogadores.php', // Substitua pelo caminho do seu arquivo PHP
      type: 'POST',
      data: {
         'nome': localStorage.getItem("nomeJogador"),
         'finalScore': localStorage.getItem('finalScore')
      },
      success: function (dados) {
      },
      error: function () {
      }
   })

}

export function iniciarPlacar() {
   $.ajax({
      url: 'iniciar_placar.php', // Substitua pelo caminho do seu arquivo PHP
      type: 'GET',
      success: function (response) {
         let jogadores = JSON.parse(response),contador = 1;
         jogadores.sort((a, b) => b.pontuacao - a.pontuacao);
         let http = '<div class="resultado">';
         jogadores.forEach( (jogador ) => { 
             http += "<span>"+ contador + " - Nome: " + jogador.nome + ", Score: " + jogador.pontuacao+'</span>';
             contador++;   
         });
          http += '</div>'
         $('#score-resultado').html(http); 
      }
   });

}

export function verificarNome(nome) {
   $.ajax({
      url: 'verificarNome.php', // Substitua pelo caminho do seu arquivo PHP
      type: 'post',
      data: {
         'nome': nome
      },
      success: function (dados) {
         let nome = JSON.parse(dados)
         if (nome.length === 0) {
            console.log(dados)
            // Crie o diálogo
            let dialog = $('.dialogo').attr('title', 'Bem-vindo').text("Bom Jogo, " + nomeJogador.value + "!").show();
            // Remova o diálogo após um minuto
            setTimeout(function () {
               dialog.hide();
            }, 6000);
         }
         else {
            
            // Crie o diálogo
            let dialog = $('.dialogo').attr('title', 'Bem-vindo').text("Bom Jogo novamente, " + nome[0].nome + "!").show();
            // Remova o diálogo após um minuto
            setTimeout(function () {
               dialog.hide();
            },6000);
         }
      }
   });
}



