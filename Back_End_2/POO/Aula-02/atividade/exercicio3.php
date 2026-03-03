<?php
class Veiculo{
    public $marca;
    public $modelo;
    protected $velocidade=0;

    public function acelera(){
        return 'O veículo está se movendo.';
    }

    public function valorVel(){
        return $this->velocidade . ' Km/h';
    }
    
}
class Carro extends Veiculo{
    public function acelera(){
        $this->velocidade += 30;
        return 'Acelerando com o pedal | Velocidade: ' . $this->valorVel();
    }
}
class Moto extends Veiculo{

    public function acelera(){
        $this->velocidade += 15;
        return 'Acelerando com o pedal | Velocidade: ' . $this->valorVel();
    }
}

echo '<h1>Exercício 03</h1>';


$meuCarro = new Carro();
$meuCarro->marca = 'Toyota';
$meuCarro->modelo = 'Corolla';
echo 'Veículo: '. $meuCarro->marca . '  ' . $meuCarro->modelo . '<br>';
echo $meuCarro->acelera() . '<br>';

echo'-------------------------------------------------------------<br>';

$minhaMoto = new Moto();
$minhaMoto->marca = 'Yamaha';
$minhaMoto->modelo = 'MT-07';
echo 'Veículo: '. $minhaMoto->marca . '  ' . $minhaMoto->modelo . '<br>';
echo $minhaMoto->acelera();


?>