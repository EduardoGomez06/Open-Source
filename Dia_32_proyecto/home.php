<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: ./login/login.php");
    exit;
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body{ font: 14px sans-serif; text-align: center; }
    </style>
</head>
<body>
    <h1 class="my-5">Hi, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>. Welcome to our site.</h1>

    <form method="post" action="inicio.php">
    <label for="home"></label>
    <button name="home" id="home">Inicio</button>
    </form>
    <form method="post" action="nosotros.php">
    <label for="we"></label>
    <button name="we" id="we">Sobre nosotros</button>
    </form>
    <form method="post" action="planes.php">
    <label for="contact"></label>
    <button name="contact" id="contact">Planes</button>
    </form>
    <form method="post" action="./contactanos/contact.html">
    <label for="contact"></label>
    <button name="contact" id="contact">Contactanos</button>
    </form>
    
    <p>
        <a href="./login/reset-password.php" class="btn btn-warning">Reset Your Password</a>
        <a href="./login/logout.php" class="btn btn-danger ml-3">Sign Out of Your Account</a>
    </p>
</body>
</html>