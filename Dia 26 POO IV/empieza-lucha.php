<?php
require("Luchador.php");
    session_start(); // iniciamos sesión

if(isset($_SESSION['empezar'])){
    $luchador = $_SESSION['empezar'];
}

if(isset($_REQUEST['resucitar'])){  
    $luchador = new Luchador("Kevin Ferguson(kimbo)", "Boxeo", "110.kg (242 lb)", "570Pc");
}


// RECOGIDA DE DATOS
$nombre = "";
if(isset($_POST['empezar']) ){
    $nombre = $_POST['luchar'];
}

if(isset($_POST['enviar'])){
    $nombre = $_POST['luchar'];
}

// CREACIÓN/INSTANCIA DEL OBJETO/*
if ($luchador == null){
    $luchador = new Luchador("Kevin Ferguson(kimbo)", "Boxeo", "110 kg", "570Pc");
}

if ($luchador->vida <= 0){
    session_destroy();

}

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
    <?=$luchador->empiezaLucha()?>
    <form method="post" action="#">
    <label for="lucha">¿Cual es tu movimiento?:</label>
    <select name="lucha" id="lucha">
            <option value="Hit">Golpe</option>
            <option value="Kick">Patada</option>
            <option value="UpperCut">Gancho</option>
            <option value="HarKick">Patada fuerte</option>
            <option value="Defense">Defensa</option>
            <option value="Quiet">Provocar</option>
        </select>
        </br>
        <input class="btn btn-primary" type="submit" name="Empezar">
        <input class="btn btn-primary" type="reset">
    </form>
</div>
</body>
</html>