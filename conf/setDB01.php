<?php
	  include $_SERVER['DOCUMENT_ROOT']."/dbconfig.php";	
	 	define('_HOST_NAME',$_HOST);
    define('_DATABASE_NAME',$_DBNAME);
    define('_DATABASE_USER_NAME',$_DBUSER);
    define('_DATABASE_PASSWORD',$_DBPASS);

     $PLINK = new MySQLi(_HOST_NAME,_DATABASE_USER_NAME,_DATABASE_PASSWORD,_DATABASE_NAME);

     if($PLINK->connect_errno)
     {
       die("ERROR : -> ".$PLINK->connect_error);
     }
?>
