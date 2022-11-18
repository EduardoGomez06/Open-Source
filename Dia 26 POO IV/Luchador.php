<?php

class Luchador
{
    protected $nombre;
    protected $tipo;//tipo combate
    protected $peso;
    protected $combate;//puntos de combate
    protected $alimentar;
    protected $experiencia;
    protected $descanso;
    public $vida;
    public $entrenar;

    function __construct($nombre, $tipo, $peso, $combate)
    {
        $this->nombre = $nombre;
        $this->peso = $peso;
        $this->tipo = $tipo;
        $this->combate = $combate;
        $this->alimentar = 100;
        $this->experiencia = 1;
        $this->descanso = 300;
        $this->vida = 100;
    }

    function alimentar($tipoAlimento){
        switch ($tipoAlimento) {
            case "Arroz":
                $this->alimentar += 5;
                $this->vida += 15;
                $this->descanso -=5;
                $this->experiencia += 1;
                $this->peso +=20;
                break;
            case "Fruta":
                $this->alimentar += 10;
                $this->vida += 20;
                $this->descanso -= 5;
                $this->experiencia += 2;
                $this->peso +=1;
                break;
            case "Carne":
                $this->alimentar += 20;
                $this->vida += 50;
                $this->descanso -= 5;
                $this->experiencia += 5;
                $this->peso +=1;
                break;
            case "Pezcado":
                $this->alimentar += 10;
                $this->vida += 20;
                $this->descanso -= 5;  
                $this->experiencia += 2;
                $this->peso +=1;
                break;
            case "Chocolate":
                $this->alimentar += 30;
                $this->vida -= 30;
                $this->descanso -= 15;
                $this->experiencia += 6;
                $this->peso +=5; 
                break;
            case "nada":
                $this->vida += 0;
                $this->descanso -= 5;
                $this->peso +=1; 
        }
        
        if ($this->vida < 0) {
            $this->vida = 0; 
        } 

        if ($tipoAlimento == "nada") {
            return $this->nombre . "no come nada, tiene hambre... </br> De hecho
            la vida del luchador es de... " . $this->vida;
        } else {
            return  $this->nombre . ' está comiendo... ' . $tipoAlimento . "
        </br>
        la vida de  $this->nombre es de... " . $this->vida . "
        </br>
        su peso es de... $this->peso . 
        </br>
        Su barra de energia es de... $this->descanso";
        } 
    }

    function combate($darGolpe){
        switch ($darGolpe){
            case "Hit":
                $this->descanso +=3;
                $this->alimentar -=2;
                $this->peso -=1;
                $this->experiencia +=1;
                break;
            case "kick":
                $this->descanso +=5;
                $this->alimentar -=3;
                $this->peso -=1;
                $this->experiencia +=1;
                break;
            case "UpperCut":
                $this->descanso +=6;
                $this->alimentar -=3;
                $this->peso -=1;
                $this->experiencia +=2;
                break;
            case "HardKick":
                $this->descanso +=8;
                $this->alimentar -=4;
                $this->peso -=1;
                $this->experiencia +=2;
                break;
            case "Defense":
                $this->descanso +=3;
                $this->alimentar -=1;
                break;
            case "Quiet":
                $this->descanso +=1;
                $this->alimentar -=1;
        }

        if ($darGolpe == "quiet") {
            return $this->nombre . "esta provocando a su contrincante , su contrincante se enfada";
        } else {
            return 'El daño que has causado es de' . $darGolpe ."
            </br>
        Tu experiencia acumulada es de" . $this->experiencia . "
        </br>
        su peso es de... . $this->peso . </br>";
        } 
    }
    

    function entrenar($entrenoLuchador){
     switch ($entrenoLuchador){
                    case "saltar":
                        $this->descanso -= 5;
                        $this->experiencia += 2;
                        $this->peso -= 1;
                        break;
                    case "saco":
                        $this->descanso -= 10;
                        $this->experiencia += 4;
                        $this->peso -= 2;
                        break;
                    case "pesas":
                        $this->descanso -= 20;
                        $this->experiencia += 8;
                        $this->peso -= 4;
                        break;
                    case "circuito":
                        $this->descanso -= 40;
                        $this->experiencia += 16;
                        $this->peso -= 8;
                        break;
                    case "boxeo":
                        $this->descanso -= 100;
                        $this->experiencia += 35;
                        $this->peso -= 12;
                        break;
        
                }
            }

    function resultadoEntrenamiento(){
        if ($this->entrenar = "saltar") {
            echo "Tus resultados de entrenamiento son:
            <br>",
            "Aun te queda energia: .$this->descanso.
            <br>",
            "Has ganado: ".$this->experiencia."EXP
            <br>";
        } elseif ($this->entrenar = "saco") {
            echo "Tus resultados de entrenamiento son:
            <br>",
            "Aun te queda energia: .$this->descanso.
            <br>",
            "Has ganado: ".$this->experiencia."EXP
            <br>";
        } elseif ($this->entrenar = "pesas") {
            echo "Tus resultados de entrenamiento son:
            <br>",
            "Aun te queda energia: .$this->descanso.
            <br>",
            "Has ganado: ".$this->experiencia."EXP
            <br>";
        } elseif ($this->entrenar = "circuito") {
            echo "Tus resultados de entrenamiento son:
            <br>",
            "Aun te queda energia: .$this->descanso.
            <br>",
            "Has ganado: ".$this->experiencia."EXP
            <br>";
        } elseif ($this->entrenar = "boxeo") {
            echo "Tus resultados de entrenamiento son:
            <br>",
            "Aun te queda energia: .$this->descanso.
            <br>",
            "Has ganado: ".$this->experiencia."EXP
            <br>";
        } elseif ($this->descanso <= 0) {
            return "Descansa un poco ";
        } 
    }
    function comprobarSalud() {
        if ($this->vida <= 0 || $this->peso >=150) {
            return '<h2>Ha muerto</h2>
            <figure>
            <img src="https://i.gifer.com/TtTg.gif" height="240" widht="300"></img>
            </figure> 
            <form action="#">
            <label for="resucitar">¿Lo resucitamos?:</label>
            <select name="resucitar" id="resucitar">
                <option value="si">Sí</option>
                <option value="no">No</option>
            </select>
            </br>
        <input class="btn btn-primary" type="submit" name="resucitar">
        </form>
            ';

        } else {
            return 'La salud del luchador es de '. $this->vida;
        }
    }

    function descansar($dormir ){
        switch ($dormir){
            case "dormir":
                $this->descanso += 100;
                $this->alimentar -=75;
        } if ($this->descanso == 300){
            echo "Tu energia esta completa";
        }
    }

    function empiezaLucha() {
        if ($this->vida >= 100) {
            return 'Empieza combate 
            <form action="#">
            <label for="lucha">¿Deseas retar a otro luchador?:</label>
            <select name="lucha" id="lucha">
                <option value="si">Sí</option>
                <option value="no">No</option>
            </select>
            </br>
        <input class="btn btn-primary" type="submit" name="luchar">
        </form>
            ';

        } else {
            return 'La salud del luchador es de ' .$this->vida;
        }
    }

    function imprimirInfo() {
        echo 'barra de vida: ' .$this->vida;
        echo '<br/>';
        echo 'Luchador: ' .$this->nombre;
        echo '<br/>';
        echo 'Especialidad: ' .$this->tipo;
        echo '<br/>';
        echo 'Peso: ' .$this->peso;
        echo '<br/>';
        echo 'P.C.: ' .$this->combate;
        echo '<br/>';
        echo 'Estado: ' .$this->alimentar;
        echo '<br/>';
        echo 'EXP: ' .$this->experiencia;
        echo '<br/>';
        echo 'Energia: ' .$this->descanso;
        echo '<br/>';
        
    }


}

        