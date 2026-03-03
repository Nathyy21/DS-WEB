<?php
abstract class Produto{
    public $nome;
    protected $preco;
    protected $estoque;

    public function valorPreco($preco){
        $this->preco = $preco;
    }

    public function valorEstoque($estoque){
        $this->estoque = $estoque;
    }

    abstract public function calcularDesconto();

}
class Eletronico extends Produto{
    public function calcularDesconto(){
        $descontoE = $this->preco * 0.9;
        if($this->estoque < 5){
            $descontoE =  $descontoE * 0.9;
        }
        return $descontoE;
    }
}

class Roupa extends Produto{
    public function calcularDesconto(){
        $descontoR = $this->preco * 0.8;
        if($this->estoque < 5){
            $descontoR = $descontoR * 0.9;
        }
        return $descontoR;
    }
}

echo '<h1>Exercício 04</h1>';

$celular = new Eletronico();
$celular->nome = 'Motorola e6';
$celular->valorPreco(400);
$celular->valorEstoque(3);

echo 'Produto: '. $celular->nome . '<br>';
echo 'Preço com desconto (eletrônico): ' . $celular->calcularDesconto(). '<br>';

echo '-------------------------------------------------------<br>';

$camisa = new Roupa();
$camisa->nome = 'Camiseta Algodão';
$camisa->valorPreco(50);
$camisa->valorEstoque(10);

echo 'Produto: '. $camisa->nome. '<br>';
echo 'Preço com desconto (roupa): ' . $camisa->calcularDesconto(). '<br>';

echo '-------------------------------------------------------<br>';