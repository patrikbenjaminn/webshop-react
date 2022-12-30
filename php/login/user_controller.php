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
function checkUser($uname, $pw){
    $db = createDbConnection();

    $sql = "SELECT passwd FROM user WHERE username=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname));

    $hashedpw = $statement->fetchColumn();

    if(isset($hashedpw)){
        return password_verify($pw, $hashedpw) ? $uname : null;
    }

    return null;
}

function getUserMes($uname){
    $db = createDbConnection();

    $sql = "SELECT msg FROM message WHERE username=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname));

    return $statement->fetchAll(PDO::FETCH_COLUMN,0);
}