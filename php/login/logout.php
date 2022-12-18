<?php
require('../inc/headers.php');
session_start();
session_destroy();
unset($_SESSION["astunnus"]);

http_response_code(200);
echo "Ulos kirjattu";