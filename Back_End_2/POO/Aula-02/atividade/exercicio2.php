<?php

abstract class Animal{
    public function fazerSom(){
        return 'Som';
    }
    public function mover(){
        return 'anda';
    }
}
class Sapo extends Animal{
    public function fazerSom(){
        return 'Coaxa';
    }
}
class Cavalo extends Animal{
    public function fazerSom(){
        return 'Relincha';
    }

    public function mover(){
        return 'Galopa e '. parent::mover();
    }
}
class Tartaruga extends Animal{
    public function fazerSom(){
        return 'Grunhe';
    }
}

echo '<h1>Exercício 02</h1>';


$kermit = new Sapo();
echo 'O Kermit, o sapo: ' .  $kermit->fazerSom() . "<br>";

echo '------------------------------------<br>';

$spirt = new Cavalo();
echo  'O Spirt, o cavalo: ' .  $spirt->fazerSom() . "<br>";
echo $spirt->mover() . "<br>";

echo '------------------------------------<br>';

$donatello = new Tartaruga();
echo  'O Donatello, a Tartaruga Ninja: ' .  $donatello->fazerSom();
?>
