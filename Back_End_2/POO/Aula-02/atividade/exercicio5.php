<?php
class Documento{
    private $numero;
    public function getNumero(){ //retorna valores(numero)
        return $this->numero;
    }
    public function setNumero($n){ //define valores(numero), posso colocar regras
        $this->numero = $n;
    }
}
class CPF extends Documento{
    public function validar(){
        $numeroCPF = $this->getNumero();
        
        //limpa os digitos do CPF
        $numeroCPF = preg_replace('/[^0-9]/is','',$numeroCPF); //preg_replace(padrao, oq eu quero colocar [nada, ''], texto_original)
                                                              //o 'is' é i = pode n ou N; s = le tudo de uma vez
        
        //ve se tem 11 numeros e se nao tem coisa repetida                                                      
        if(strlen($numeroCPF) != 11 || preg_match('/(\d)\1{10}/',$numeroCPF)){ //preg_match(padrao, texto q vai procurar)
            return 'Falso';
        }
        
        for ($digitosFinais = 9; $digitosFinais < 11; $digitosFinais++){ //calcula o digito após os 9 digitos '-XX', o 10 e o 11
            
            $somaCalculada = 0;

            for($digito = 0; $digito < $digitosFinais; $digito++ ){//percorre os numeros do cpf
                
                $peso = ($digitosFinais + 1) - $digito; //começa de 10 ou 11 e vai diminuido
                $somaCalculada += $numeroCPF[$digito] * $peso; //d1*10 + d2*9 + d3*8.....
            }

            $digFinalNovo = (($somaCalculada * 10) % 11) % 10;

            if($numeroCPF[$digitosFinais] != $digFinalNovo){
                return 'Falso';
                       
            }
        }
        return 'Verdadeiro';
    }
}

echo '<h1>Exercício 05</h1>';

$doc = new CPF();
$doc->setNumero('492.019.638-58');

echo 'Seu CPF é: ' . $doc->validar();

echo '<br><br>';

echo $doc->getNumero();
?>