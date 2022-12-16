<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$tuotenimi = filter_var($input->tuotenimi,FILTER_SANITIZE_SPECIAL_CHARS);
$normihinta = filter_var($input->normihinta,FILTER_SANITIZE_NUMBER_FLOAT);
$tarjoushinta= filter_var($input->tarjoushinta,FILTER_SANITIZE_NUMBER_INT);;
$img = filter_var($input->img,FILTER_SANITIZE_SPECIAL_CHARS);

try {
  $db=openDb();
  $query = $db->prepare('insert into tarjous(tuotenimi,normihinta,tarjoushinta,img)
  values (:tuotenimi,:normihinta,:tarjoushinta,:img)');
  $query->bindValue(':tuotenimi', $tuotenimi,PDO::PARAM_STR);
  $query->bindValue(':normihinta', $normihinta,PDO::PARAM_INT);
  $query->bindValue(':tarjoushinta', $tarjoushinta,PDO::PARAM_INT);
  $query->bindValue(':img', $img,PDO::PARAM_STR);
  $query->execute();
  header('HTTP/1.1 200 OK');
  $data = array('id' => $db->lastInsertId(),'tuotenimi' => $tuotenimi,'normihinta' => $normihinta,
  'tarjoushinta' => $tarjoushinta,'img' => $img);
  print json_encode($data);
} catch (PDOException $pdoex) {
  returnError($pdoex);
  }
