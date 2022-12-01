<?php

include("../configuration.php");

$id = $_GET['id'];

$sql = "DELETE FROM bestbrand WHERE id=$id";
$result = $mysqli->query($sql);


header("Location:bddatos.php");
?>

