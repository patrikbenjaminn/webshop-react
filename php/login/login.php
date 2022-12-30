<?php
require('../inc/headers.php');
session_start();
require('/user_controller.php');

if(isset($_SESSION['username'])){
    http_response_code(200);
    echo $_SESSION['username'];
    return;
}

if(!isset($_POST['uname']) || !isset($_POST['pw'])){
    http_response_code(401);
    echo "Astunnus ei kelpaa. Anna oikea astunnus tai salasana";
    return;
}

$uname = $_POST['uname'];
$pw = $_POST['pw'];

$verified_uname = checkUser($uname, $pw);

if($verified_uname){
    $_SESSION["username"] = $verified_uname;
    http_response_code(200);
    echo $verified_uname;
}else{
    http_response_code(401);
    echo "Väärä astunnus tai salasana.";
}