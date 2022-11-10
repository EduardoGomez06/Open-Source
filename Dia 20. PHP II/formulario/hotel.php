<?php

if(isset($_REQUEST['enviar'])){
    $noches = $_REQUEST['numNoches'];
    $ciudad = $_REQUEST['ciudad'];
    $alquiler = $_REQUEST['alquiler'];

    $costeAlquiler = 0;

    if ($alquiler == "si"){    
        $costeAlquiler = coste_alquiler_coche($noches);       
    } 

    $costeHotel = coste_hotel($noches);
    $costeViaje = coste_avion($ciudad);
    
    echo "<b>El número de noches seleccionadas es de</b> $noches<br>";
    echo "<b>El coste del hotel es de</b> $costeHotel <br>";
    echo "<b>El coste del viaje en avión es de</b> $costeViaje <br>";
    echo "<b>El coste del alquiler de coche es de</b> $costeAlquiler <br>";
    echo "<b>El coste TOTAL es de </b>".($costeViaje+$costeHotel+$costeAlquiler);
}

function coste_hotel($n){
    $coste = $n * 140;
    return $coste;
}

function coste_avion($c){
    $coste_viaje = 0;

    switch ($c){
        case "Paris": $coste_viaje = 300;
        break;
        case "Berlin": $coste_viaje = 350;
        break;
        case "NY": $coste_viaje = 850;
        break;
        case "Osaka": $coste_viaje = 650;
        break;
    }

    return $coste_viaje;
}

function coste_alquiler_coche($n){
    $coste = 0;
    $coste = $n * 40;
    if ($n > 7){
        $coste = $coste - 50;
    } elseif ($n > 3){
        $coste = $coste - 20;
    }
    return $coste;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
    <title>Primer formulario con PHP</title>
</head>
<body>
    <h1>Buking.com</h1>
    </br>
    <form action="#">
        <label for="noches">Número de noches:</label>
        <input type="number" name="numNoches"> 
        <br>
        <label for="ciudad">Ciudad destino (coste vuelo):</label>
        <select name="ciudad" id="ciudad">
            <option value="Paris">París</option>
            <option value="Berlin">Berlín</option>
            <option value="NY">Nueva York</option>
            <option value="Osaka">Osaka</option>
        </select>
        </br>
        <label for="alquiler">¿Quiere alquiler también un coche?</label>
        <select name="alquiler" id="alquiler">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
        <br>
        <input class="btn btn-primary" type="submit" name="enviar">
        <input class="btn btn-primary" type="reset">
    </form>
</body>
</html>