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
<h1>LUCHADOR</h1>
    <h2>Qué quieres hacer?</h2>
    <form method="post" action="empieza-lucha.php">
    <label for="luchar">¿Quieres luchar?:</label>
    <button name="luchar" id="luchar">Empieza el combate</button>
    </form>
    <form method="post" action="alimentar-luchador.php">
    <label for="alimento">¿Lo alimentas?:</label>
    <button action="alimentar-luchador.php" name="alimento" id="alimento">Darle de comer</button>
    </form>
    <form method="post" action="entrenar-luchador.php">
    <label for="entrenamiento">¿Quieres entrenar?:</label>
    <button action="entrenar-luchador.php" name="entrenamiento" id="entrenamiento">Ir al GYM
    </button>
    </form>
    <form method="post" action="descansar.php">
    <label for="entrenamiento">Te vendria bien un descanso</label>
    <button action="descansar.php" name="descanso" id="descansoo">Dormir
    </button>
    </form>
</body>
</html>