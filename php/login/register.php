<?php
require('../inc/headers.php');
session_start();
require('/user_controller.php');

$body = file_get_contents("php://input");
$user = json_decode($body);

if(!isset($asiakas->astunnus) ||!isset($asiakas->etunimi) ||!isset($asiakas->sukunimi) ||!isset($asiakas->email) ||!isset($asiakas->osoite) ||!isset($asiakas->postinro) ||!isset($asiakas->postitmp) || !isset($asiakas->salasana) || !isset($asiakas->user_type)){
    http_response_code(400);
    echo "Käyttäjää ei ole määritetty. Anna kelvollinen käyttäjätunnus ja salasana";
    return;
}

//Oikeasti pitäisi käyttäjänimi ja salasana
//tutkia järkevästi (mitkä merkit sallittuja jne. ja ilmoittaa käyttäjälle)
//$uname = strip_tags($user->uname);

registerUser($asiakas->astunnus,$asiakas->etunimi,$asiakas->sukunimi,$asiakas->email,$asiakas->osoite,$asiakas->postinro,$asiakas->postitmp,$asiakas->salasana, $asiakas->user_type);

$_SESSION['astunnus'] = $asiakas->astunnus;

http_response_code(200);
echo "Asiakas ".$asiakas->astunnus." rekisteröity";