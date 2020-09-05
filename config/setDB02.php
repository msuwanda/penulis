<?php
	/** database */
	include $_SERVER['DOCUMENT_ROOT']."/dbconfig.php";	
	$PHOST	= $_HOST;
	$PNAME	= $_DBNAME;
	$PUSER	= $_DBUSER;
	$PPASS	= $_DBPASS;
	$PLINK 	= new PDO("mysql:host=".$PHOST.";dbname=".$PNAME, $PUSER, $PPASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
?>
