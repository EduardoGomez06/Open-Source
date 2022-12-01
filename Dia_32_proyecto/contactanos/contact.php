<html>
<head>
	<title>Agregar base de datos</title>
</head>

<body>
<?php

include_once("../configuration.php");

if(isset($_POST['Submit'])) {	
	$nombre = $mysqli->real_escape_string($_POST['nombre']);
	$telefono = $mysqli->real_escape_string($_POST['telefono']);
	$email = $mysqli->real_escape_string($_POST['email']);
    $interes = $mysqli->real_escape_string($_POST['interes']);
    $observaciones = $mysqli->real_escape_string($_POST['observaciones']);
		

	if(empty($nombre) || empty($telefono) || empty($email) || empty($interes) || empty($observaciones)) {
				
		if(empty($nombre)) {
			echo "<font color='red'>Espacio obligatorio.</font><br/>";
		}
		if(empty($telefono)) {
		}
		if(empty($email)) {
			echo "<font color='red'>Espacio obligatorio.</font><br/>";
		}
        if(empty($interes)) {
			echo "<font color='red'>Espacio obligatorio.</font><br/>";
		}
        if(empty($observaciones)) {
		}

		echo "<br/><a href='javascript:self.history.back();'>Go Back</a>";
	} else { 

			

		$sql = "INSERT INTO bestbrand(nombre,telefono,email,interes,observaciones) VALUES('$nombre','$telefono','$email','$interes','$observaciones')";
		$result = $mysqli->query($sql);

		echo "<font color='green'>Datos enviados correctamente.";
		echo "<br/><a href='../home.php'>Pagina principal</a>";
	}
}
?>
</body>
</html>
