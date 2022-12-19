<?php
require('../inc/functions.php');

/**
 * Inserts a new user in the database
 */
function registerUser($astunnus,$etunimi,$sukunimi,$email,$osoite,$postinro,$postitmp,$salasana,$user_type){
    $db = openDb();

    $salasana = password_hash($salasana, PASSWORD_DEFAULT);

    $sql = "INSERT INTO asiakas (astunnus,etunimi,sukunimi,email,osoite,postinro,postitmp,salasana,user_type) VALUES (?,?,?,?,?,?,?,?,?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($astunnus,$etunimi,$sukunimi,$email,$osoite,$postinro,$postitmp,$salasana,$user_type));
}

/**
 * Checks the user credentials and returns the username
 * if authenticated, otherwise null.
 */
function checkUser($astunnus, $salasana){
    $db = openDb();

    $sql = "SELECT salasana FROM asiakas WHERE astunnus=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($astunnus));

    $hashedpw = $statement->fetchColumn();

    if(isset($hashedpw)){
        return password_verify($salasana, $hashedpw) ? $astunnus : null;
    }

    return null;
}