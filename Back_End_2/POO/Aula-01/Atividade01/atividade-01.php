<?php
    class Casa {
        public $preco;
        public $cor;
        public $andares;
        public $materiais;
        public $comodos;

        public function pintar(){
            return "Essa residência é da cor ".$this->cor;
        }

        public function vender(){
            return "A casa está sendo vendida por ".$this->preco;
        }

        public function roubar(){
            return "Foi roubado ".$this->comodos . " cômodos";
        }
    }
    $apartamento = new Casa();

    $apartamento->cor = "Azul";
    echo $apartamento->pintar();

    echo '<br>';

    $apartamento->preco = "300 mil";
    echo $apartamento->vender();

    echo '<br>';

    $apartamento->comodos = "5";
    echo $apartamento->roubar();

    echo '<br><br>';

    ?>

    <?php
    class Roupa {
        public $tecido;
        public $modelo;
        public $cor;
        public $tamanho;
        public $textura;

        public function vestir(){
            return "Estou vestindo uma roupa ".$this->cor;
        }

        public function lavar(){
            return "Ele lavou uma peça de ".$this->tecido;
        }

        public function passar(){
            return "Foi passado uma roupa do tamanho ".$this->tamanho;
        }
    }
    $camisa = new Roupa();

    $camisa->cor = "Vermelha";
    echo $camisa->vestir();

    echo '<br>';

    $camisa->tecido = "Algodão";
    echo $camisa->lavar();

    echo '<br>';

    $camisa->tamanho = "GG";
    echo $camisa->passar();

    echo "<br><br>";
    ?>

    <?php
    class Estojo {
        public $compartimentos;
        public $cor;
        public $material;
        public $tamanho;
        public $estampa;

        public function guardar(){
            return "Guardei os materiais em um estojo ".$this->tamanho;
        }

        public function organizar(){
            return "Arrumei meus lápis nos ".$this->compartimentos . " compartimentos";
        }

        public function decorar(){
            return "Personalizei meu estojo da cor ".$this->cor;
        }
    }
    $estojoEscolar = new Estojo();

    $estojoEscolar->tamanho = "Grande";
    echo $estojoEscolar->guardar();

    echo '<br>';

    $estojoEscolar->compartimentos = "2";
    echo $estojoEscolar->organizar();

    echo '<br>';

    $estojoEscolar->cor = "Amarelo";
    echo $estojoEscolar->decorar();

    echo "<br><br>";
    ?>

    <?php
    class Perfume {
        public $essencia;
        public $formato;
        public $cor;
        public $tamanho;
        public $material;

        public function perfumar(){
            return "Esse Body Splash tem essência de ".$this->essencia;
        }

        public function limpar(){
            return "Tirei o pó de um Body Splash ".$this->tamanho;
        }

        public function vender(){
            return "Vendi um Body Splash do formato de um(a) ".$this->formato;
        }
    }
    
    $bodySplash = new Perfume();

    $bodySplash->essencia = "Baunilha";
    echo $bodySplash->perfumar();

    echo '<br>';

    $bodySplash->tamanho = "Pequeno";
    echo $bodySplash->limpar();

    echo '<br>';

    $bodySplash->vender = "Flor";
    echo $bodySplash->vender();

    echo "<br><br>";
    ?>

    <?php
    class Lapis {
        public $material;
        public $modelo;
        public $cor;
        public $tamanho;
        public $marca;

        public function escrever(){
            return "Fiz uma carta com a lapiseira da ".$this->marca;
        }

        public function apontar(){
            return "Ela apontou um lápis ".$this->tamanho;
        }

        public function quebrar(){
            return "Quebrei minha lapiseira ".$this->cor;
        }
    }
    $lapiseira = new Lapis();
    
    $lapiseira->marca = "Faber-Castell";
    echo $lapiseira->escrever();

    echo '<br>';

    $lapiseira->tamanho = "Médio";
    echo $lapiseira->apontar();

    echo '<br>';

    $lapiseira->cor = "Roxo";
    echo $lapiseira->quebrar();

    echo "<br><br>";
    ?>