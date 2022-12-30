 <?php
require('../inc/headers.php');
session_start();
require('./user_controller.php');

$body = file_get_contents("php://input");
$user = json_decode($body);

if(!isset($user->uname) || !isset($user->pw)){
    http_response_code(400);
    echo "Käyttäjää ei ole määritetty. Anna kelvollinen käyttäjätunnus ja salasana";
    return;
}


registerUser($user->$uname, $user->$pw);

$_SESSION['username'] = $user->$uname;

http_response_code('200');
echo "User $uname rekisteröity"; 


