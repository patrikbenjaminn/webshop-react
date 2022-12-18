<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';

$db = null;
//JSON lukeminen
$input = json_decode((file_get_contents('php://input')));
$fname = filter_var($input->etunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$lname =filter_var($input->sukunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$address =filter_var($input->osoite, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$zip = filter_var($input->postinro, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$city = filter_var($input->postitmp, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$cart = $input->cart;

try{
    $db = openDb();
    $db->beginTransaction();

    $sql = "insert into customer (etunimi,sukunimi,osoite,postinro,postitmp) values
    ('".
    filter_var($etunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($sukunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($osoite, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($postinro, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($postitmp, FILTER_SANITIZE_FULL_SPECIAL_CHARS)
   

."')";   

$customer_id = executeInsert($db, $sql);

$sql = "insert into `tilaus` (astunnus) values ($astunnus)";
$tilausnro = executeInsert($db, $sql);

foreach ($cart as $product){

    $sql = "insert into tilaus (tilausid, tilausnro) values ("
    .
        $tilausnro . ",".
        $product->id
        . ")";
        executeInsert($db,$sql);;
}

$db->commit();

header('HTTP/1.1 200 OK');
$data = array('id' => $astunnus);
echo json_encode($data);
}
catch(PDOException $pdoex){
    $db -> rollback();
    returnError($pdoex);
}

