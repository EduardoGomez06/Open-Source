<?php
require("Luchador.php");
    session_start(); // iniciamos sesión

if(isset($_SESSION['luchador'])){
    $luchador = $_SESSION['luchador'];
}

if(isset($_REQUEST['resucitar'])){  
    $luchador = new Luchador("Kevin Ferguson(kimbo)", "Boxeo", "110kg", "570Pc");
}


// RECOGIDA DE DATOS
$nombre = "";
if(isset($_POST['luchador']) ){
    $nombre = $_POST['entrenamiento'];
}

if(isset($_POST['entrenar'])){
    $nombre = $_POST['entrenamiento'];
}

// CREACIÓN/INSTANCIA DEL OBJETO/*
if ($luchador == null){
    $luchador = new Luchador("Kevin Ferguson(kimbo)", "Boxeo", "110kg (242 lb)", "570Pc");
}

if ($luchador->vida <= 0){
    session_destroy();

}

$_SESSION['luchador'] = $luchador;


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
    <title>Formulario LUCHADOR</title>
</head>
<body>
<div>
<h1>LUCHADOR</h1>
<figure>
        <img src="https://reygif.com/media/7/entrenando-para-ser-el-proximo-sonic-the-hedgehog-95664.gif" height="240" widht="300"></img>
</figure>
</div>
<div>
    </br>
        <?= $luchador->entrenar($nombre); ?>
        </br>
        <?= $luchador->resultadoEntrenamiento(); ?>
    </div>
     <h2>Qué más quieres hacer?</h2>
    <form method="post" action="#">
    <label for="entrenamiento">Entrena tu luchador:</label>
    <select name="entrenamiento" id="entrenamiento">
        <div>
            <option value="saltar">saltar lazo(15 minutos)</option>
        </div>
            <option value="saco">Saco de boxeo(30 minutos)</option>
            <option value="pesas">Pesas(1 hora)</option>
            <option value="circuito">Circuito HIT(2 horas)</option>
            <option value="boxeo">Crossfit + boxeo(3 horas)</option>
        </select>
        </br>
        <input class="btn btn-primary" type="submit" name="entrenar">
        <input class="btn btn-primary" type="reset">
    </form>
</body>
</html>