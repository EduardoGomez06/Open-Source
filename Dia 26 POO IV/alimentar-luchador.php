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
    $nombre = $_POST['alimento'];
}

if(isset($_POST['alimentar'])){
    $nombre = $_POST['alimento'];
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
        <img src="https://pa1.narvii.com/6463/94d305af708c042c95938a24ee6629ad66cb31a1_hq.gif" height="240" widht="300"></img>
</figure>
</div>
<div>
    </br>
        <?= $luchador->alimentar($nombre); ?>
    </div>
    <div>
     <h2>Qué más quieres hacer?</h2>
    <form method="post" action="#">
    <label for="alimento">¿Qué le das de comer?:</label>
    <select name="alimento" id="alimento">
            <option value="Arroz">Arroz</option>
            <option value="Fruta">Fruta</option>
            <option value="Carne">Carne</option>
            <option value="Pezcado">Pezcado</option>
            <option value="Chocolate">Chocolate</option>
            <option value="nada">nada</option>
        </select>
        </br>
        <input class="btn btn-primary" type="submit" name="alimentar">
        <input class="btn btn-primary" type="reset">
    </form>
    </div>
</body>
</html>