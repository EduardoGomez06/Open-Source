<?php

include_once("../configuration.php");

$sql = "SELECT * FROM bestbrand ORDER BY id";
$result = $mysqli->query($sql);
?>

<html>
<head>	
	
	<title>Base de datos</title>
	<link rel="stylesheet" href="style.css">

</head>
<body>
<a href="contact.html">Agregar nuevos datos</a><br/><br/>

	<table width='80%' border=0>

	<tr bgcolor='#CCCCCC'>
		<td>Nombre</td>
		<td>telefono</td>
		<td>Correo electronico</td>
		<td>Intererses</td>
		<td>Ovservaciones</td>
	</tr>
	<?php 
	if ($result->num_rows > 0){
	while($row = $result->fetch_assoc() ) { 		
		echo "<tr>";
		echo "<td>".$row['nombre']."</td>";
		echo "<td>".$row['telefono']."</td>";
		echo "<td>".$row['email']."</td>";	
        echo "<td>".$row['interes']."</td>";
        echo "<td>".$row['observaciones']."</td>";
		echo "<td>
		<a href=\"editar.php?id=$row[id]\">Edit</a>
		 | <a href=\"borrar.php?id=$row[id]\" onClick=\"return confirm('estas seguro de eliminar este cliente de la base de datos')\">Delete</a></td>";		
	}}
	?>
	</table>
</body>
</html>
