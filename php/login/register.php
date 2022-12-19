 <?php
/*require('../inc/headers.php');
session_start();
require('/user_controller.php');

$body = file_get_contents("php://input");
$user = json_decode($body);

if(!isset($asiakas->astunnus) ||!isset($asiakas->etunimi) ||!isset($asiakas->sukunimi) ||!isset($asiakas->email) ||!isset($asiakas->osoite) ||!isset($asiakas->postinro) ||!isset($asiakas->postitmp) || !isset($asiakas->salasana) || !isset($asiakas->user_type)){
    http_response_code(400);
    echo "Käyttäjää ei ole määritetty. Anna kelvollinen käyttäjätunnus ja salasana";
    return;
}


registerUser($asiakas->astunnus,$asiakas->etunimi,$asiakas->sukunimi,$asiakas->email,$asiakas->osoite,$asiakas->postinro,$asiakas->postitmp,$asiakas->salasana, $asiakas->user_type);

$_SESSION['astunnus'] = $asiakas->astunnus;

http_response_code(200);
echo "Asiakas ".$asiakas->astunnus." rekisteröity"; */


require('../inc/headers.php');
session_start();
require('/user_controller.php');

try {
  // Read and decode request body
  $body = file_get_contents("php://input");
  $user = json_decode($body);

  // Validate user input
  if(!isset($asiakas->astunnus) || !isset($asiakas->salasana)){
      throw new Exception("Käyttäjää ei ole määritetty. Anna kelvollinen käyttäjätunnus ja salasana");
  }
  $username = strip_tags($user->uname);
  $password = strip_tags($user->password);
  if (strlen($username) < 3 || strlen($password) < 6) {
      throw new Exception("Käyttäjätunnus tai salasana ei ole kelvollinen. Käyttäjätunnuksen pituuden tulee olla vähintään 3 merkkiä ja salasanan vähintään 6 merkkiä.");
  }

  // Register user
  $result = registerUser($asiakas->astunnus,$asiakas->etunimi,$asiakas->sukunimi,$asiakas->email,$asiakas->osoite,$asiakas->postinro,$asiakas->postitmp,$asiakas->Id,$asiakas->salasana, $asiakas->user_type,$asiakas->created_at);
  if (!$result) {
      throw new Exception("Rekisteröinti epäonnistui");
  }

  // Set session variable and send response
  $_SESSION['username'] = $asiakas->astunnus;
  http_response_code(200);
  echo "Asiakas ".$asiakas->asnimi." rekisteröity";
} catch (Exception $e) {
  http_response_code(400);
  echo $e->getMessage();
} 