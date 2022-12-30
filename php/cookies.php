<?php

setcookie('cookie', 'arvo', time() + (86400 * 30), '/', true, true); 
header("Location: ./products/tallennus.php");

if(isset($_COOKIE['cookie'])) {
    $cookieValue = $_COOKIE['cookie'];
    echo "Cookiella arvo: $cookieValue";
} else {
    setcookie('cookie', 'Cookien arvo', time() + (86400 * 30), '/',  true, true);
    echo 'Cookie on nyt valmis';
}
