<?php
  session_start();
require_once "config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST["username"];
    $password = $_POST["password"];

    // hashing the password
    $password = md5($password );
    //checking username already exists
    
    $checking = mysqli_query($link,"SELECT * FROM users WHERE username='$username'");
    $checkcount = mysqli_num_rows($checking);
    if($checkcount!=0){
        echo "Username Already exists, Please try another one";
    }
    else
    {
      
        mysqli_query($link,"INSERT INTO `users` (`username`, `password`) VALUES ('$username', '$password')");
         // getting user id 
        $userid =  mysqli_insert_id($link);
      
         //creating session 
         $_SESSION["userid"] = $userid;
        header("location:dashboard.php");
    }
}