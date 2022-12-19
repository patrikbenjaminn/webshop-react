<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';

$db = null;
//JSON lukeminen
$input = json_decode((file_get_contents('php://input')));
$etunimi = filter_var($input->etunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$sukunimi =filter_var($input->sukunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$osoite =filter_var($input->osoite, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$postinro = filter_var($input->postinro, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$postitmp= filter_var($input->postitmp, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$cart = $input->cart;

try{
    $db = openDb();
    $db->beginTransaction();

  $sql = "insert into asiakas (etunimi,sukunimi,osoite,postinro,postitmp) values
    ('".
    filter_var($etunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($sukunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($osoite, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($postinro, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($postitmp, FILTER_SANITIZE_FULL_SPECIAL_CHARS). 
   
$id= executeInsert($db, $sql);

$sql = "insert into tilaus (id) values ($id)";
$tilausnro = executeInsert($db, $sql);

foreach ($cart as $tuote){

    $sql = "insert into tilaus (tilausnro) values ("
    .
        $tilausnro . ",".
        $tuote->id
        . ")";
        executeInsert($db,$sql);
}

$db->commit();

header('HTTP/1.1 200 OK');
$data = array('id' => $id);
echo json_encode($data);
}
catch(PDOException $pdoex){
    $db -> rollback();
    returnError($pdoex);
}

