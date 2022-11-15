<?php
$nombre = $apellido = $edad = $correo = $hijos = $numHijos = "";

if(isset($_REQUEST['enviar'])){
    $nombre = $_REQUEST['nombre'];
    $apellido = $_REQUEST['apellido'];
    $edad = $_REQUEST['edad'];
    $correo = $_REQUEST['correo'];

    $hijos = $_REQUEST['hijos'];
    $numHijos = $_REQUEST['numHijos'];

  

   
   if ($hijos == "no" && $numHijos <= 0){    
        echo "<b>ya estas tardando<b>";       
    } elseif ($hijos == "si" && $numHijos >= 1){
        echo "<b>Tienes</b> $numHijos";
    }
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>continentes</title>
</head>
<body>
    <form action="#">
        <label for="nombre">Nombre</label>
        <input name="nombre" id="nombre"> 
        <br>
        <label for="apellido">Apellidos</label>
        <input name="apellido" id="apellido"> 
        <br>
        <label for="edad">Edad</label>
        <input name="edad" id="edad"> 
        <br>
        <label for="correo">Correo electronico</label>
        <input name="correo" id="correo"> 
        <br>
        <label for="hijos">¿Tiene hijos?</label>
        <select name="hijos" id="hijos">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
        <br>
            <label for="numHijos">¿cuantos?:</label>
        <input type="number" name="numHijos"> 
        <br>
        <input class="btn btn-primary" type="submit" name="enviar">
        <input class="btn btn-primary" type="reset">
</form>

        </br>
    <h1><?= "<b>Hola señor/a </b>" .$nombre ," ", $apellido ?></h1>
    <h2><?="<b>Su edad es</b> $edad</hr>" ?>
    </br>
    <?="<b>Su correo electronico es</b> $correo</hr>" ?>
    </br>
    <?="<b>Tiene</b> $numHijos hijos </hr>" ?></h2>
    
</body>
</html>