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
    
    // EJERCICIO 1
    $nombre = readline("Dime tu nombre: ");

    print "Hola $nombre";

    // EJERCICIO 2
    $num1 = (int) readline("Dame un número ");
    print "$num1";

    // EJERCICIO 3
    $num2 = (int) readline("Dame otro número ");
    print "El resultado de la suma es ".($num1+$num2);

    // EJERCICIO 4
    
    echo "el resultado de la division es".($num1/$num2);

    // EJERCICIO 5

    echo"el resultado de la division es".($num1*$num2);

    // EJERCICIO 6

    $operacion1 = 5 + 8 * 6;
    $operacion2 =(55 + 9) % 6;
    $operacion3 = 20 + -3*5 / 8;
    $operacion4 = 5 + 15 / 3 * 2 - 8 % 3;
    $operacion5 = (25.5 * 3.5 - 3.5 * 3.5) / (40.5 - 4.5);
    $operacion6 = 4.0 * (1 - (1.0/3) + (1.0/5) - (1.0/7) + (1.0/9) - (1.0/1));

    echo "Los resultados son $operacion1, $operacion2, $operacion3, $operacion4, $operacion5, $operacion6 ".number_format(5+$operacion1);
    echo (3+2);

    // EJERCICIO 10

    $num1 = (int)readline("Dime la temperatura en Celsius");
    $F=($num1*9/5)+32;
    echo "La temperatura en Farenheit es $F";

    // EJERCICIO 11


    ?>
</p>
</body>

</html>