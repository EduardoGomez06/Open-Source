<?php
include_once("../configuration.php");

if(isset($_POST['update']))
{	
    $id = $mysqli->real_escape_string($_POST['id']);
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
        if(empty($ovservaciones)) {
		}
	} else {	

		$sql = "UPDATE bestbrand SET nombre='$nombre',telefono='$telefono',email='$email',interes='$interes',observaciones='$observaciones' WHERE id=$id";
		$result = $mysqli->query($sql);

		header("Location: bddatos.php");
	}
}
?>
<?php

$id = $_GET['id'];

$sql = "SELECT * FROM bestbrand WHERE id=$id";
$result = $mysqli->query($sql);

if ($result->num_rows > 0){
while($row = $result->fetch_assoc() ) { 
    $id = $row['id'];
	$nombre = $row['nombre'];
	$telefono = $row['telefono'];
	$email = $row['email'];
    $interes = $row['interes'];
    $observaciones = $row['observaciones'];
}
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Editar base de datos Best brand</title>
	<link rel="stylesheet" href="style.css">

</head>
<body>
	<a href="bddatos.php">Pagina principal</a>
	<br/><br/>
	<div class="form-style-5">
	
	<form name="form1" method="post" action="editar.php">
		<table border="0">
			<tr> 
				<td>Nombre</td>
				<td><input type="text" name="nombre" value="<?php echo $nombre;?>"></td>
			</tr>
			<tr> 
				<td>Telefono</td>
				<td><input type="text" name="telefono" value="<?php echo $telefono;?>"></td>
			</tr>
			<tr> 
				<td>email</td>
				<td><input type="text" name="email" value="<?php echo $email;?>"></td>
			</tr>
            <tr> 
				<td>interes</td>
				<td><input type="text" name="interes" value="<?php echo $interes;?>"></td>
			</tr>
            <tr> 
				<td>Observaciones</td>
				<td><input type="text" name="observaciones" value="<?php echo $observaciones;?>"></td>
			</tr>
			<tr>
				<td><input type="hidden" name="id" value=<?php echo $_GET['id'];?>></td>
				<td><input type="submit" name="update" value="Update"></td>
			</tr>
		</table>
	</form>

</div>

<style type="style.css">
	</style>
</body>
</html>
