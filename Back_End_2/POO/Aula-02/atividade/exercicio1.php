<?php

class Pessoa{
    public $nome;
    protected $idade;
}
class Funcionario extends Pessoa{
    protected $salario;

    public function valorSal($salario){
        $this->salario = $salario;
    }

}
class Gerente extends Funcionario{
    public function calcularBonus(){
        return $this->salario * 1.2;
    }
}
class Desenvolvedor extends Funcionario{
    public function calcularBonus(){
        return $this->salario * 1.1;

    }
}

echo '<h1>Exercício 01</h1>';

$joao = new Gerente();
$joao->valorSal(5000);
echo 'Salário com bônus (Gerente): '. $joao->calcularBonus() . '<br>'; 

echo '-------------------------------------------------<br>';

$marcos = new Desenvolvedor();
$marcos->valorSal(4000);
echo 'Salário com bônus (Desenvolvedor): '. $marcos->calcularBonus() . '<br>';
?>

