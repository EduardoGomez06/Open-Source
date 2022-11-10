<?php

// RECOGIDA DE DATOS

    $operando1 = $_REQUEST['operando1'];
    $operando2 = $_REQUEST['operando2'];
    $operador = $_REQUEST['operador'];

// CONDICIONAL QUE NOS PERMITIRÁ
// QUE LA CALCULADORA FUNCIONE

    if($operador == "+") $solucion = $operando1 + $operando2;
    else if($operador == "-") $solucion = $operando1 - $operando2;
    else if($operador == "*") $solucion = $operando1 * $operando2;
    else if($operador == "/") $solucion = $operando1 / $operando2;

    echo "La solución es ".$solucion;

?>