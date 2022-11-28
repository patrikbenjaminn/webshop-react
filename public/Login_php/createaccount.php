<?php
  session_start();
require_once "config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $astunnus = $_POST["astunnus"];
    $etunimi = $_POST["etunimi"];
    $sukunimi = $_POST["sukunimi"];
    $email = $_POST["email"];
    $osoite = $_POST["osoite"];
    $postinro = $_POST["postinro"];
    $postitmp = $_POST["postitmp"];
    $salasana = $_POST["salasana"];
    print "$astunnus, $etunimi, $sukunimi, $email, $osoite, $postinro, $postitmp $salasana";

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