<?php
class Fabricante{
    public $nome; //honda
    public $paisOrigem; //japao

    public function __construct($nome,$paisOrigem){
        $this->nome = $nome;
        $this->paisOrigem = $paisOrigem;
    }
}
class Motor{
    public $potencia; //150cv
    public $combustivel; //flex

    public function __construct($potencia,$combustivel){
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }
}

class Carro {
    public $modelo; //civic
    public $ano; //2024

    public Fabricante $fabricante; //objeto do tipo fabricante
    public Motor $motor; //objeto do tipo motor

    public function __construct($modelo, $ano, Fabricante $fabricante, Motor $motor){
        $this->modelo = $modelo;
        $this->ano = $ano;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }

    public function exibirFicha(){
        return $this->modelo . ' | ' . $this->ano . '<br>' .
        'Fabricante: ' . $this->fabricante->nome . ' | Origem: ' . $this->fabricante->paisOrigem .
        '<br>'. 'Motor: ' . $this->motor->potencia . ' | Combustível: '.$this->motor->combustivel;
    }
}

echo '<h1>Exercício 03</h1>';

$honda = new Fabricante('Honda','Japão');
$motorCivic = new Motor('150cv','Flex');
$civic = new Carro('Civic','2024',$honda,$motorCivic);

echo $civic->exibirFicha();

?>