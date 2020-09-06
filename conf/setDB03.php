<?php
    include $_SERVER['DOCUMENT_ROOT']."/dbconfig.php";

class DbConfig
{   
    protected $connection;

    public function __construct()
    {
            global $_HOST;
            global $_DBUSER;
            global $_DBPASS;
            global $_DBNAME;
        if (!isset($this->connection)) {

            $this->connection = new PDO("mysql:host=".$_HOST.";dbname=".$_DBNAME, $_DBUSER, $_DBPASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)) ;

            if (!$this->connection) {
                echo 'Cannot connect to database server';
                exit;
            }
        }

        return $this->connection;
    }
}

?>
