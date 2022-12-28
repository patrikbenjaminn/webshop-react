<?php
require('../inc/headers.php');
session_start();
require('/user_controller.php');

if(isset($_SESSION['astunnus'])){
    http_response_code(200);
    echo $_SESSION['astunnus'];
    return;
}

if(!isset($_POST['astunnus']) || !isset($_POST['salasana'])){
    http_response_code(401);
    echo "Astunnus ei kelpaa. Anna oikea astunnus tai salasana";
    return;
}

$astunnus = $_POST['astunnus'];
$salasana = $_POST['salasana'];

$verified_astunnus = checkUser($astunnus, $salasana);

if($verified_astunnus){
    $_SESSION["astunnus"] = $verified_astunnus;
    http_response_code(200);
    echo $verified_astunnus;
}else{
    http_response_code(401);
    echo "Väärä astunnus tai salasana.";
}
/*
<html>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <div className="container">
    <div className="col-md-6">
    <h2> Kirjaudu tästä </h2>
    <form method="post" action="logincheck.php">
        <input type="text" name="astunnus" className="form-control" placeholder="astunnus">        
        <input type="salasana" name="salasana" className="form-control" placeholder="salasana">
        <input type="submit" value="Login">
        
    </form>
    </div>
</html>
*/