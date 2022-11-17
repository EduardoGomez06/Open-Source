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
    <form method="post" action="empieza-lucha.php" action="respuesta-luchador.php">
    <label for="luchar">¿Quieres luchar?:</label>
    <button name="luchar" id="luchar"><a href="empieza-lucha.php">Empezar combate</button>
    <br>
    <label for="alimento">¿Lo alimentas?:</label>
    <button name="alimento" id="alimento"><a href="respuesta-luchador.php">Empezar combate</button>
        <input class="btn btn-primary" type="submit" name="enviar">
        <input class="btn btn-primary" type="reset">
    </form>
</body>
</html>