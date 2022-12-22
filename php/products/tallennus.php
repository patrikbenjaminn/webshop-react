<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';


//JSON lukeminen
$input = json_decode((file_get_contents('php://input')));
//$astunnus = filter_var($input->astunnus, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$etunimi = filter_var($input->etunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$sukunimi =filter_var($input->sukunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
//$email =filter_var($input->email, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$osoite =filter_var($input->osoite, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$postinro = filter_var($input->postinro, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$postitmp= filter_var($input->postitmp, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
//$salasana= filter_var($input->salasana, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
//$user_type= filter_var($input->user_type, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
/* $created_at= filter_var($input->created_at, FILTER_SANITIZE_FULL_SPECIAL_CHARS); */
$cart = $input->cart;

$etunimi = 'Teppo';
$sukunimi = 'Testi';
$osoite = 'Testikyla';
$postinro = '40250';
$postitmp = 'Jyväskyla';

try{
    $db = openDb();
    $db->beginTransaction();

  $sql = "insert into asiakas (etunimi,sukunimi,osoite,postinro,postitmp) values
    ('".
    //filter_var($astunnus, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','". 
    filter_var($etunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($sukunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    //filter_var($email, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($osoite, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($postinro, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($postitmp, FILTER_SANITIZE_FULL_SPECIAL_CHARS)."')";
    //filter_var($salasana, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    //filter_var($user_type, FILTER_SANITIZE_FULL_SPECIAL_CHARS) ."')";
     
   
$id= executeInsert($db,$sql);

$sql = "insert into tilaus (id) values ($id)";
$tilausnro = executeInsert($db, $sql);

foreach ($cart as $tuote){

    $tuoteid= $tuote->tuoteid;
   
     $sql = "insert into tilausrivi (tilausnro,tuoteid) values ($tilausnro, $tuoteid)";
        executeInsert($db,$sql);
}

$db->commit();

header('HTTP/1.1 200 OK');
$data = array('id' => $id, 'tilausnro' => $tilausnro, 'tuoteid' => $tuoteid);
echo json_encode($data);
}
catch(PDOException $pdoex){
    $db -> rollback();
    returnError($pdoex);
}

