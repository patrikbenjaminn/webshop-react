<?php
require('../inc/headers.php');
session_start();
require('/user_controller.php');

$body = file_get_contents("php://input");
$user = json_decode($body);

if(!isset($asiakas->astunnus) || !isset($asiakas->salasana)){
    http_response_code(400);
    echo "Käyttäjää ei ole määritetty. Anna kelvollinen käyttäjätunnus ja salasana";
    return;
}

//Oikeasti pitäisi käyttäjänimi ja salasana
//tutkia järkevästi (mitkä merkit sallittuja jne. ja ilmoittaa käyttäjälle)
//$uname = strip_tags($user->uname);

registerUser($asiakas->astunnus,$asiakas->etunimi,$asiakas->sukunimi,$asiakas->email,$asiakas->osoite,$asiakas->postinro,$asiakas->postitmp,$asiakas->Id,$asiakas->salasana, $asiakas->user_type,$asiakas->created_at);

$_SESSION['username'] = $asiakas->astunnus;

http_response_code(200);
echo "Asiakas ".$asiakas->asnimi." rekisteröity";