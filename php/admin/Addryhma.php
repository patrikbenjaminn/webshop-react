<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$trnimi = filter_var($input->trnimi,FILTER_SANITIZE_SPECIAL_CHARS);


try {
  $db=openDb();
  $query = $db->prepare('insert into tuoteryhma(trnimi) values (:trnimi)');
  $query->bindValue(':trnimi', $trnimi,PDO::PARAM_STR);
  $query->execute();
  header('HTTP/1.1 200 OK');
  $data = array('tuoteid' => $db->lastInsertId(),'trnimi' => $trnimi);
  print json_encode($data);
} catch (PDOException $pdoex) {
  returnError($pdoex);
  }

  ?>