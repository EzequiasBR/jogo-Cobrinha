<?php
include 'gestor.php';

$gestor = new Gestor();

// VERIFICAR SE O NOME JÁ EXISTE
$melhores_jogadores = $gestor->EXE_QUERY("SELECT * FROM jogadores");

echo json_encode($melhores_jogadores);
