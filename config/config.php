<?php
include $_SERVER['DOCUMENT_ROOT']."/conf/setDB03.php";
//error_reporting(0) ;
class Pages extends DbConfig
{
	private $_grup_id   ;

	public $_parameter_pages   ;

	public  $_app_exe ;

	public $_app_nama ;
	public $_app_js ;
	public $_f_js ;

    public function __construct($parameter_pages,$grup_id)
    {
        parent::__construct();
        $this->_parameter_pages = $parameter_pages;
        $this->_grup_id = $grup_id;

        /* content */

        $content = $this->Content() ;
        $this->_app_exe  = $content['app_exe'].'.php' ;
		$this->_app_js   = $content['app_exe'].'.js' ;
		$this->_app_nama = $content['app_nama'] ;
		$this->_f_js = "lib" ;
    }


    public function Content()
    {
    	$que 	= "SELECT app_exe,app_nama FROM v_aplikasi WHERE app_id = '".$this->_parameter_pages."' AND grup_id = '".$this->_grup_id."'";
		$sth 	= $this->connection->prepare($que);
		$sth->execute();
		$row	= $sth->fetch(PDO::FETCH_ASSOC);
		$count	= $sth->rowCount(PDO::FETCH_ASSOC);

		if($count == 0){
    		return array("app_nama" => "null","app_exe" => "404") ;
    	}
    	else
    	{
    		return array("app_nama" => $row['app_nama'],"app_exe" => $row['app_exe']) ;
    	}
    }
    public function getContet() { return include "views/".$this->_app_exe ; }
	public function getScript() { return $this->_f_js."/".$this->_app_js ; }
    public function getMenu()
	{
		$que 	= "SELECT * FROM v_aplikasi WHERE app_menu = '1' AND grup_id = '".$this->_grup_id."' ORDER BY app_id ";
		$sth 	= $this->connection->prepare($que);
		$sth->execute();
		$row	= $sth->fetchAll(PDO::FETCH_ASSOC);
		$menu = "" ;
		$inAttr = substr($this->_parameter_pages,0,3) ;
		foreach ($row as $data ) {
			if (substr($data['app_id'],0,3) == $inAttr ) {
					$class = 'mm-active' ;
			}
			else {
					$class = '' ;
			}
			if ($data['app_index'] == '000000') {
				$menu .= '<li class="app-sidebar__heading">'.$data['app_nama'].'</li>' ;
			}
			else {
				$menu .= "<li>" ;
				$menu .=   "<a class='".$class."' href='/".$data['app_id']."' aria-expanded='false'>" ;
				$menu .=       		'<i class="metismenu-icon '.$data['app_icon'].'"></i>' ;
				$menu .=       "".$data['app_nama']."" ;
				$menu .=   "</a>" ;
				$menu .= "</li>" ;
			}

		}

		return $menu ;
	}
}
?>
