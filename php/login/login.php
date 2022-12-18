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