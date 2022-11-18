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
$nombre = $_POST['descanso'];
}

if(isset($_POST['dormir'])){
$nombre = $_POST['descanso'];
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
<center>
<h1>LUCHADOR</h1>
</br> 

    </br> 
    <figure>
        <img src="https://media.tenor.com/L6p2nKnqiwsAAAAM/snoring-sleeping.gif" height="240" widht="300"></img>
    </figure>
    </center>
</div>
<div>
        <?= $luchador->descansar(); ?>
</div>
<div>
        <?= print "tu energia ahora es: ".$luchador->descanso()?>
    </div>
<div>
    <form method="post" action="#">
    <label for="descanso"></label>
    <select name="descanso" id="descanso">
            <option value="dormir">¿quieres descasar un poco?</option>
        </select>
        </br>
        <input class="btn btn-primary" type="submit" name="dormir">
        <input class="btn btn-primary" type="reset">
    </form>
</div>

</body>
</html>