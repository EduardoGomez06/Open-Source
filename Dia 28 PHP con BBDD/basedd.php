<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
    <title>Primer formulario con BBDD</title>
</head>
<body>
    <h3>Guarda aquí la información</h3>
    <form action="insert.php" method="POST">
    <label for="firstName">Nombre:</label>
    <input type="text" name="first_name" id="firstName">
    <br>
    <label for="lastName">Apellidos:</label>
    <input type="text" name="last_name" id="lastName">
    <br>
    <label for="Gender">Género:</label>
    <input type="text" name="gender" id="Gender">
    <br>
    <label for="Address">Dirección:</label>
    <input type="text" name="address" id="Address">
    <br>
    <label for="emailAddress">Email:</label>
    <input type="text" name="email" id="emailAddress">
    <br>
    <input class="btn btn-info" type="submit" value="Submit">
    </form>
</body>
</html>