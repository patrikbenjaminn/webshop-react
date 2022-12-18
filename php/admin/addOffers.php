<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$tuoteid = filter_var($input->tuoteid,FILTER_SANITIZE_NUMBER_FLOAT);
$tarjoushinta = filter_var($input->tarjoushinta,FILTER_SANITIZE_NUMBER_FLOAT,FILTER_FLAG_ALLOW_FRACTION);


try {
  $db=openDb();
  $query = $db->prepare('update tuote set tarjoushinta=:tarjoushinta where tuoteid=:tuoteid');
  $query->bindValue(':tuoteid', $tuoteid,PDO::PARAM_STR);
  $query->bindValue(':tarjoushinta', $tarjoushinta,PDO::PARAM_STR);
  $query->execute();
  header('HTTP/1.1 200 OK');
  $data = array('tuoteid' =>$tuoteid,'tarjoushinta' => $tarjoushinta);
  print json_encode($data);
} catch (PDOException $pdoex) {
  returnError($pdoex);
  }

  ?>
