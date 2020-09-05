<?php
class DbConfig
{
    private $_host     = 'localhost';
    private $_username = 'root';
    private $_password = 'aldiani123';
    private $_database = 'penerbit';

    protected $connection;

    public function __construct()
    {
        if (!isset($this->connection)) {

            $this->connection = new PDO("mysql:host=".$this->_host.";dbname=".$this->_database, $this->_username, $this->_password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)) ;

            if (!$this->connection) {
                echo 'Cannot connect to database server';
                exit;
            }
        }

        return $this->connection;
    }
}

?>
