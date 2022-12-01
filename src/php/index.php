<?php

require_once 'inc/functions.php';
require_once 'inc/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$trnro = $parameters[1];

try {
    $db = openDb();
    $sql = "select * from tuote where id =$trnro";
    /* $query = $db->query($sql); */
    /* selectAsJson($db,'select * from tuote'); */

    header('http/1.1 200 ok');
    echo json_encode(array(
     
    ));
  }
  catch (PDOException $pdoex) {
    returnError($pdoex);
  }