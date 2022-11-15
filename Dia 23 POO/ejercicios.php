<?php

include("moviles.php");

class movil {

    protected $marca;
    protected $procesador;
    protected $ram;
    protected $bateria;
    protected $pantalla;
    protected $tipoPantalla;
    protected $camara;

    protected $duracionBateria;
    protected $vidaUtilBateria;
    protected $cargaBateria;

    function __construct($marca,$procesador,$ram,$bateria,$pantalla,$tipoPantalla,$camara){

        $this->marca = $marca;
        $this->procesador = $procesador;
        $this->ram = $ram;
        $this->bateria = $bateria;
        $this->pantalla = $pantalla;
        $this->tipoPantalla = $tipoPantalla;
        $this->camara = $camara;
    
        $this->duracionBateria = 100;
        $this->vidaUtilBateria= 1000000000000;
        $this->cargaBateria = 20;

    }
    
    function getModelo(){
        return  $this->marca;
    }
    
    
    function encender(){
        echo "encendiendo tu ".$this->marca;
        echo "<hr/>";
        $this->duracionBateria -= 20;
        echo "<hr/>";
        echo "NIVEL DE BATERIA:".
        $this->duracionBateria;
        echo " VIDA UTIL:".$this->vidaUtilBateria -=20;
        $this->comprobarBateria();
    }

    function enUso(){
        echo "•。★En uso★ 。* 。
        <br>
        ° 。 ° ˛˚˛ * _Π_____*。*˚
        <br>
        ˚ ˛ •˛•˚ */______/~＼。˚ ˚ ˛
        <br>
        ˚ ˛ •˛• ˚ ｜ 田田 ｜門｜ ˚".$this->marca;
        echo "<hr/>";
        $this->duracionBateria -= 10;
        echo "<hr/>";
        echo "NIVEL DE BATERIA:".
        $this->duracionBateria;
        echo " VIDA UTIL:".$this->vidaUtilBateria -=10;
        $this->comprobarBateria();

    }

    function fotoVideo(){
        echo "Activando camara";
    }

    function imprimirInfo(){
        echo '<hr/>';
        echo 'Modelo: ' .$this->marca;
        echo '<hr/>';
        echo 'Tipo procesador: ' .$this->procesador;
        echo '<hr/>';
        echo 'Memoria: ' .$this->ram;
        echo '<hr/>';
        echo 'Espicificaciones bateria: ' .$this->bateria;
        echo '<hr/>';
        echo 'Tamaño pantalla: ' .$this->pantalla;
        echo '<hr/>';
        echo 'Espicificaciones pantalla: ' .$this->tipoPantalla;
        echo '<hr/>';
        echo 'Espicificaciones camara: ' .$this->camara;
        echo '<hr/>';
    }

function comprobarBateria(){
        if ($this->duracionBateria <= 30 && $this->duracionBateria >= 15){
            echo '<hr/>';
            echo 'DESEA ACTIVAR AHORRO DE ENERGIA?';
        } else if ($this->duracionBateria <= 15 && $this->duracionBateria >= 5 ){
            echo '<hr/>';
            echo 'RECARGE SU TELEFONO, BATERIA BAJA!';
        } else if ($this->duracionBateria < 5){
            $this->apagado();
        }
    }
   
function apagado(){
        echo ' GOOD BYE';
    }   
}
echo $sansungGalaxyFold->imprimirInfo();
echo $sansungGalaxyFold->encender();
echo $sansungGalaxyFold->enUso();

echo $honorMagic4Pro->imprimirInfo();
echo $honorMagic4Pro->encender();
echo $honorMagic4Pro->enUso();

?>


