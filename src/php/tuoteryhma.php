<?php
require_once 'functions.php';
require_once 'headers.php';

try {
  $db = openDb();
  selectAsJson($db,'select * from tuoteryhma');
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}