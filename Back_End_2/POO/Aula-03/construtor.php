<?php
class Pessoa{
    public $nome;
    public $idade;

    public function __construct($novoNome, $novaIdade){
        $this->nome = $novoNome;
        $this->idade = $novaIdade;
    }

    public function exibirDados(){
        return 'O nome da pessoa é '. $this->nome . ' e sua idade é ' . $this->idade;
    }

    public function alterarDados($novoNome, $novaIdade){
        $this->nome = $novoNome;
        $this->idade = $novaIdade;
    }
}

$aluno = new Pessoa('Daniel',17);
echo $aluno->exibirDados();

echo "<br>";

echo $aluno->alterarDados('Henry',17);
echo $aluno->exibirDados();

?>