<?php
  session_start();
require_once "config.php";
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST["username"];
    $password = $_POST["password"];
    // hashing the password
    $password = md5($password );
    //checking username already exists
    if($username!=NULL){
       $checking =   mysqli_query($link,"SELECT * FROM users WHERE `username`='$username' AND `password`='$password'");
         // getting user id 
         $userdata = mysqli_fetch_array($checking);
         $userid =  $userdata['id'];
         if($userid!=NULL)
        {
             //creating session 
            $_SESSION["userid"] = $userid;
            
            header("location:dashboard.php");
        }
        else
        {
            header("location:login.php?error=1");
        }
        
    }
    else
    {     
      
        
    }
}