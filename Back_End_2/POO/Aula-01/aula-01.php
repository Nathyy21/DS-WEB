<?php

class Pessoa {
    public $nome; //atributo

    public funciton falar() {  //metodo
        return "O meu nome é ".$this->nome;
    }
}

$Bruno = new Pessoa();   //bruno é objeto
$Bruno->nome = "Bruno Attina";     //-> acesso em algo
echo $Bruno->falar();
?>