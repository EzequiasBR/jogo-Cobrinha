<?php
include 'gestor.php';

$gestor = new Gestor();

$nome_jogador = 'Ezequias';

$params = array(
   ':nome' => $nome_jogador
);

// VERIFICAR SE O NOME JÁ EXISTE
$verificar_nome = $gestor->EXE_QUERY("SELECT * FROM jogadores WHERE nome = :nome", $params);

echo json_encode($verificar_nome);


