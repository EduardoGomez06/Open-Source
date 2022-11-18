<?php
require("Luchador.php");
    session_start(); // iniciamos sesión

if(isset($_SESSION['luchador'])){
    $luchador = $_SESSION['luchador'];
}

if(isset($_REQUEST['resucitar'])){  
    $luchador = new Luchador("Kevin Ferguson(kimbo)", "Boxeo", "110.kg", "570Pc");
}


// RECOGIDA DE DATOS
$nombre = "";
if(isset($_POST['luchador']) ){
    $nombre = $_POST['lucha'];
}

if(isset($_POST['combatir'])){
    $nombre = $_POST['lucha'];
}

// CREACIÓN/INSTANCIA DEL OBJETO/*
if ($luchador == null){
    $luchador = new Luchador("Kevin Ferguson(kimbo)", "Boxeo", "110 kg", "570Pc");
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
<center>
<h1>LUCHADOR</h1>
</br> 

    </br> 
    <figure>
        <img src="https://media3.giphy.com/media/39BdMOJMK2YVqktnlS/giphy.gif" height="240" widht="300"></img>
    </figure>
    </center>
</div>
<div>
        <?= $luchador->empiezaLucha(); ?>
        </br>
        <?= $luchador->comprobarSalud(); ?>
    </div>
<div>
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
        <input class="btn btn-primary" type="submit" name="combatir">
        <input class="btn btn-primary" type="reset">
    </form>
</div>

</body>
</html>