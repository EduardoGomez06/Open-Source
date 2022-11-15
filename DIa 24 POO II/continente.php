<?php


include("continente.html");

if(isset($_REQUEST['enviar'])){;
    $country = $_REQUEST['country'];

    $info = $country;
    class country {
        protected $poblacion;
        protected $idioma;
        protected $vida;
        protected $religion;
    
        function __construct($poblacion,$idioma,$vida,$religion){
            $this->poblacion=$poblacion;
            $this->idioma=$idioma;
            $this->vida=$vida;
            $this->religion=$religion;
        }
        function imprimirInfo($p){
            echo '<hr/>';
            echo 'Poblacion: ' .$this->poblacion;
            echo '<hr/>';
            echo 'Idioma: ' .$this->idioma;
            echo '<hr/>';
            echo 'Esperanza de vida: ' .$this->vida;
            echo '<hr/>';
            echo 'Religion mayoritaria: ' .$this->religion;
            echo '<hr/>';
           
    
    }
    }

    function info_imp($i){
   $info_p = $i;
    switch ($i){
        case "japon": $info_p = "href='respuesta.php'";
        break;
        case "colombia": "<a href='respuesta.php'></a>";
        break;
        case "australia": "<a href='respuesta.php'></a>";
        break;
        case "brasil": "<a href='respuesta.php'></a>";
        break;
        case "alemania": "<a href='respuesta.php'></a>";
        break;


    }
    return $info_p;
}
}

$japon = new country("125,7 millones","Japones/Nipon","84,8 años","Sintoísmo 84,74%");
$colombia = new country("51,27 millones","Castellano","77,5 años","Cristianismo 97,01%");
$australia = new country("25,74 millones","Ingles","83,3 años","Cristianismo 61%");
$brasil = new country("214 millones","Portugues","76,2 años","Cristianismo 88,23%");
$alemania = new country("83,13 millones","Aleman","81 años","Alemania Catolicismo 43.4%");


return match($_REQUEST($p)){
    "japon" => $this->$japon->inprimirInfo($p),
    "colombia" => $this->$colombia->inprimirInfo($p),
    "australia" => $this->$australia->inprimirInfo($p),
    "brasil" => $this->$brasil->inprimirInfo($p),
    "alemania" => $this->$alemania->inprimirInfo($p),
    default => '',
}

?>




