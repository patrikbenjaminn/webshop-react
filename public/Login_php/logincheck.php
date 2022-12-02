<?php
  session_start();
require_once "config.php";
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $astunnus = $_POST["astunnus"];
    $salasana = $_POST["salasana"];
    // hashing the password
    $salasana = md5($salasana );
    //checking username already exists
    if($astunnus!=NULL){
       $checking =   mysqli_query($link,"SELECT * FROM asiakas WHERE `astunnus`='$astunnus' AND `salasana`='$salasana'");
         // getting user id 
         $userdata = mysqli_fetch_array($checking);
         $userid =  $userdata['Id'];
         if($userid!=NULL)
        {
             //creating session 
            $_SESSION["userid"] = $userid;
            
            header("location:dashboard.php");
        }
        else
        {
           /* header("location:login.php?error=1");
            print_r($userdata);
            print"<br>";
            print $userid;*/
            echo "Tunnus väärin, kokeile uudestaan";
            
        }
        
    }
    else
    {     
      
        
    }
}