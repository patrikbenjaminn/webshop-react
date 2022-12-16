<?php

require_once 'inc/functions.php';
require_once 'inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$tuoteid = filter_var($input->tuoteid,FILTER_SANITIZE_NUMBER_INT);


try {
    $db = openDb();    
    $query = $db->prepare('delete from tuote where tuoteid =(:tuoteid)');
    $query->bindValue(':tuoteid',$tuoteid,PDO::PARAM_INT);
    $query->execute();    
    header('HTTP/1.1 200 OK');
    $data = array('tuoteid' => $tuoteid);
    print json_encode($data);
}   catch (PDOException $pdoex) {
    returnError($pdoex);
} 