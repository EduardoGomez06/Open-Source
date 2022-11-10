<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    // TRES TIPOS DE FUNCIONES: 
    // a) las que no devuelven nada.
    // b) las que no devuelven nada y le pasamos parámetros
    // c) las que devuelven un valor (pasando o no parámetros)


    // TIPO A. No devuelven nada

    function saludo(){
        echo "Buenas tardes";
    }

    saludo();

    // TIPO B. No devuelven nada y le pasamos un parámetro
    function saludando($nombre){
        echo "Buenas tardes $nombre";
    }

    saludando("Fran");

    // TIPO C. Devuelven valores

    function calcular(){
        $calculo = 5+5;
        return $calculo;
    }

    $valorRecuperado = calcular();
    print "$valorRecuperado"
    
    //$valor1 = 50;
    //$valor2 = 30;
    /*
    if ( $valor1 < $valor2 ){
        echo "valor1 es MENOR";
    } else {
        echo "valor1 es MAYOR o IGUAL";
    } */
    /*
    echo ($valor1 > $valor2) ? "valor1 es mayor" : "valor1 es menor o igual";
    */
    /*
    if ( $valor1 < $valor2 ){
        echo "valor1 es MENOR";
    } elseif ( $valor1 < $valor2) {
        echo "valor1 es MAYOR o IGUAL";
    } else {
        echo "valor1 es IGUAL";
    }*/

    //$dia = (int) readline("Dame un dia ");

    /*
    $dia = 4;

    switch ($dia) {
        case 1: echo "dia 1";
        break;
        case 2: echo "dia 2";
        break;
        case 3: echo "dia 3";
        break;
        case 4: echo "dia 4";
        break;
        case 5: echo "dia 5";
        break;
        default: echo "error";
    } */
    /*
    $dia = 2;

    echo match ($dia) {
        1 => "dia 1, lunes",
        2 => "dia 2, martes",
        3 => "dia 3, miércoles",
        4 => "dia 4, jueves",
        5 => "dia 5, viernes",
        default => "dato incorrecto",
    };*/

    // Bucles en w3school

    ?>
</p>
</body>

</html>