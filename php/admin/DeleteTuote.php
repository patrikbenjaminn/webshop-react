<?php

require_once 'inc/functions.php';
require_once 'inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$tuotenimi = filter_var($input->tuotenimi,FILTER_SANITIZE_NUMBER_INT);


try {
    $db = openDb();    
    $query = $db->prepare('delete from tuote where tuotenimi =(:tuotenimi)');
    $query->bindValue(':tuotenimi',$tuotenimi,PDO::PARAM_INT);
    $query->execute();    
    header('HTTP/1.1 200 OK');
    $data = array('tuotenimi' => $tuotenimi);
    print json_encode($data);
}   catch (PDOException $pdoex) {
    returnError($pdoex);
} 