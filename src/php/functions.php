<?php
function openDb(){
    $db = new PDO('mysql:host=localhost;port=3306;dbname=webshop;charset=utf8', 'root','');
    $db->setAttribute(PDO::ATTR_ERRMODE,pdo::ERRMODE_EXCEPTION);
    return $db;
}

function returnError(PDOException $pdoex) {
    echo header('HTTP/1.1 500 Internal Server Error');
    $error = array('error' => $pdoex->getMessage());
    echo json_encode($error);
    exit;
}
