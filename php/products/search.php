<?php

require_once '../inc/headers.php';
require_once '../inc/headers.php';

$url = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'), PHP_URL_PATH);
$parameters = explode('/', $url);
$phrase = $parameters[0];


try {
    $db = openDb();
    $sql = "select * from tuote where tuotenimi like '%$phrase%'";
selectAsJson($db,$sql);

}
catch (PDOException $pdoex){
returnError($pdoex);
}