<?php
include $_SERVER['DOCUMENT_ROOT']."/dbconfig.php";	

// Database connection information
$gaSql['user']     = $_DBUSER;
$gaSql['password'] = $_DBPASS;
$gaSql['db']       = $_DBNAME;
$gaSql['server']   = $_HOST;
$gaSql['port']     = 3306; // 3306 is the default MySQL port

?>
