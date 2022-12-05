<?php

require_once 'inc/functions.php';
require_once 'inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$name = filter_var($input->name,FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_var($input->email,FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_var($input->message,FILTER_SANITIZE_SPECIAL_CHARS);

try {
  $db=openDb();
  $query = $db->prepare('insert into palaute(name,email, message) values (:name,:email, :message)');
  $query->bindValue(':name', $name,PDO::PARAM_STR);
  $query->bindValue(':email', $email,PDO::PARAM_STR);
  $query->bindValue(':message', $message,PDO::PARAM_STR);
  $query->execute();
  header('HTTP/1.1 200 OK');
  $data = array('id' => $db->lastInsertId(),'name' => $name,'email' => $email, 'message' => $message);
  print json_encode($data);
} catch (PDOException $pdoex) {
  returnError($pdoex);
  }

?>