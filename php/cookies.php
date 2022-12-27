<?php

setcookie('cookie', 'arvo', time() + (86400 * 30), '/', true, true); 


if(isset($_COOKIE['cookie'])) {
    $cookieValue = $_COOKIE['cookie'];
    echo "Cookiella arvo: $cookieValue";
} else {
    // Cookie was not set, so we need to set it
    setcookie('cookie', 'Cookien arvo', time() + (86400 * 30), '/',  true, true);
    echo 'Cookie on nyt valmis';
}
