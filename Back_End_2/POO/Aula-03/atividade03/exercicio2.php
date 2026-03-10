<?php

class Artista{
    public $nome;
    public $genero;

    public function __construct($nome,$genero){
        $this->nome = $nome;
        $this->genero = $genero;
    }
}

class Musica{
    public $titulo;
    public $duracao;
    public  Artista $artista;

    public function __construct($titulo, $duracao, Artista $artista){
        $this->titulo = $titulo;
        $this->duracao = $duracao;
        $this->artista = $artista;
    }

    public function exibirInfo(){
        return $this->titulo . ' | Duração: ' . $this->duracao . '<br>' . 'Artista: ' . $this->artista->nome . ' | Gênero: ' . $this->artista->genero;
    }
}

echo '<h1>Exercício 02</h1>';

$queen = new Artista('Queen','Rock');
$musica = new Musica('Bohemian Rhapsody','5:55',$queen);

echo $musica->exibirInfo();

?>