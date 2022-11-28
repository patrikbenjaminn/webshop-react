
<?php
require_once 'functions.php';
require_once 'headers.php';

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$tuote_id = 1;

try {
  $db = openDb();
  selectRowAsJson($db,"select * from tuote where tuoteid = $tuote_id");
}

catch (PDOException $pdoex) {
  returnError($pdoex);
}
