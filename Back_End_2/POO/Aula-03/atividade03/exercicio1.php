<?php

class Dono{
    public $nome;
    public $telefone;


    public function __construct($novoNome, $novoTelefone){
        $this->nome = $novoNome;
        $this->telefone = $novoTelefone;
    }
}

class Animal{
    public $nomeAnimal;
    public $especie;
    public Dono $dono;

    public function __construct($nomeAnimal, $especie, Dono $dono){
        $this->nomeAnimal = $nomeAnimal;
        $this->especie = $especie;
        $this->dono = $dono;
    }
}

echo '<h1>Exercício 01</h1>';

$pai_de_cachorro = new Dono('João', '(11)99999-9999');

$cachorro = new Animal('Rex','Cachorro' , $pai_de_cachorro);

echo $cachorro->nomeAnimal . " | " . $cachorro->especie;
echo '<br>';
echo 'Dono: '. $cachorro->dono->nome . ' | ' . $cachorro->dono->telefone;


?>