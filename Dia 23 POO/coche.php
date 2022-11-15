<?php

// VAMOS A CREARNOS NUESTRA PRIMERA CLASE
// RECORDAD. CLASE ES LA IDEA, LA ABSTRACCIÓN.
// "EL PLANO DE LA CASA"

class Coche {
    // LAS CLASES SE COMPONEN DE DOS ELEMENTOS

    // LAS PROPIEDADES/atributos Y LOS MÉTODOS/funciones
    // propiedades más estáticas
    protected $marca;
    protected $modelo;
    protected $velocidadMaxima;
    protected $anyo;
    protected $tipoCombustible;
    protected $puertas;
    // propiedades más dinámicos
    protected $velocidadActual;
    protected $combustible;
    protected $numKm;

    // MÉTODOS o funciones
    // primera función (es optativa), es el constructor

    function __construct($marca, $modelo, $velocidadMaxima, $anyo, $tipoCombustible, $puertas){
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->velocidadMaxima = $velocidadMaxima;
        $this->anyo = $anyo;
        $this->tipoCombustible = $tipoCombustible;
        $this->puertas = $puertas;
        $this->velocidadActual = 0;
        $this->combustible = 100;
        $this->numKm = 5;

    }

    function getModelo(){
        return  $this->modelo;
    }

    // SET, PARA MODIFICAR MODELO 
    /*function setModelo($modelo){
        $this->modelo = $modelo;
    } */

    function getVelocidad(){
        return  $this->velocidadMaxima;
    }

    function encender(){
        print "Encendiendo tu ".$this->modelo;;
        print "<hr/>";
        $this->combustible -= 10;
        print "<hr/>";
        print "COMBUSTIBLE ACTUAL:";
        print $this->combustible;
        $this->comprobarDeposito();
        
    }

    function acelerar(){
        print "Acelerando tu ".$this->modelo;
        print "<hr/>";
        $this->combustible -= 10;
        $this->velocidadActual += 50;
        print "<hr/>";
        print "VELOCIDAD ACTUAL:";
        print $this->velocidadActual;
        print "<hr/>";
        print "COMBUSTIBLE TRAS ACELERAR:";
        print $this->combustible;
        $this->comprobarDeposito();
    }

    function frenar(){
        print "Frenando el coche";
    }
    
    function abrirPuertas(){
        print "Abriendo puertas del coche";
    }

    function imprimirInfo(){
        echo '<hr/>';
        echo 'Modelo: ' .$this->modelo;
        echo '<hr/>';
        echo 'Tipo combustible: ' .$this->tipoCombustible;
        echo '<hr/>';
        echo 'Puertas: ' .$this->puertas;
        echo '<hr/>';
        echo 'Año: ' .$this->anyo;
        echo '<hr/>';
    }

    function comprobarDeposito(){
        if ($this->combustible <= 50 && $this->combustible >= 30){
            echo '<hr/>';
            echo 'OJO COMBUSTIBLE';
        } else if ($this->combustible <= 30 && $this->combustible >= 20 ){
            echo '<hr/>';
            echo 'HAY QUE IR A LA GASOLINERA!!!';
        } else if ($this->combustible < 20){
            $this->fin();
        }
    }

    function fin(){
        echo 'Llama a la grua';
    }

}

// VOY A CREAR UN OBJETO

$JeepRenegade = new Coche("Jeep", "Renegade", 200, 2022, "gasolina", 5); 
$BMWserie3 = new Coche("BMW", "Serie 3", 200, 2019, "gasolina", 3);

$JeepRenegade->encender();
print '<hr/>';
$BMWserie3->encender();
print '<hr/>';
$BMWserie3->acelerar();
print '<hr/>';
$BMWserie3->acelerar();
print '<hr/>';
$BMWserie3->acelerar();
print '<hr/>';
$BMWserie3->acelerar();
print '<hr/>';

echo $JeepRenegade->getModelo();
//$JeepRenegade->setModelo("Renegade 2.0");

$JeepRenegade->imprimirInfo();
$BMWserie3->imprimirInfo();



?>