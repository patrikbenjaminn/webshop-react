<?php
require('../inc/functions.php');

/**
 * Inserts a new user in the database
 */
function registerUser($uname,$pw){
    $db = createDbConnection();

    $pw = password_hash($pw, PASSWORD_DEFAULT);

    $sql = "INSERT INTO user (username, passwd) VALUES (?,?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname,$pw));
}

/**
 * Checks the user credentials and returns the username
 * if authenticated, otherwise null.
 */
function checkUser($astunnus, $salasana){
    $db = createDbConnection();

    $sql = "SELECT salasana FROM asiakas WHERE astunnus=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($astunnus));

    $hashedpw = $statement->fetchColumn();

    if(isset($hashedpw)){
        return password_verify($salasana, $hashedpw) ? $astunnus : null;
    }

    return null;
}