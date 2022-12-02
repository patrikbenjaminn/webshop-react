<?php
header("Origin: http://localhost:3000");
header("Content-type: application/json");
header("Access-Control-Request-Method: POST");

  //session_start();
require_once "config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    
   /* $astunnus = $_POST["astunnus"];
    $etunimi = $_POST["etunimi"];
    $sukunimi = $_POST["sukunimi"];
    $email = $_POST["email"];
    $osoite = $_POST["osoite"];
    $postinro = $_POST["postinro"];
    $postitmp = $_POST["postitmp"];
    $salasana = $_POST["salasana"];
 
    print "$astunnus, $etunimi, $sukunimi, $email, $osoite, $postinro, $postitmp, $salasana";*/
    $input = json_decode(file_get_contents('php://input'));
    $astunnus = filter_var($input->astunnus,FILTER_SANITIZE_SPECIAL_CHARS);
    $etunimi = filter_var($input->etunimi,FILTER_SANITIZE_SPECIAL_CHARS);
    $sukunimi = filter_var($input->sukunimi,FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_var($input->email,FILTER_SANITIZE_SPECIAL_CHARS);
    $osoite = filter_var($input->osoite,FILTER_SANITIZE_SPECIAL_CHARS);
    $postinro = filter_var($input->postinro,FILTER_SANITIZE_SPECIAL_CHARS);
    $postitmp = filter_var($input->postitmp,FILTER_SANITIZE_SPECIAL_CHARS);
    $salasana = filter_var($input->salasana,FILTER_SANITIZE_SPECIAL_CHARS);
    
    
    // hashing the password
    $salasana = md5($salasana );
    //checking username already exists
    
    $checking = mysqli_query($link,"SELECT * FROM asiakas WHERE astunnus='$astunnus'");
    $checkcount = mysqli_num_rows($checking);
    if($checkcount!=0){
        echo "Astunnus varattu, valitse uusi.";
    }
    else
    {
      
        mysqli_query($link,"INSERT INTO `asiakas` (`astunnus`, `etunimi`, `sukunimi`, `email`, `osoite`, `postinro`, `postitmp`, `salasana`) VALUES ('$astunnus', '$etunimi', '$sukunimi', '$email', '$osoite', '$postinro', '$postitmp', '$salasana')");
         // getting user id 
        $userid =  mysqli_insert_id($link);
      
         //creating session 
         $_SESSION["userid"] = $userid;
        header("location:dashboard.php");
    }
}
else
    echo "Jossain on vielä matoja";