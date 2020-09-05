<?php
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	header('Access-Control-Allow-Origin: '.$_SERVER['REMOTE_ADDR']);

	include_once $_SERVER['DOCUMENT_ROOT'].'/conf/setDB02.php';

  $in = json_decode(file_get_contents("php://input"));
  $filter = '' ;
  if (isset($in->filter)) {
    $data = array();
    for ($i=0; $i < count($in->filter) ; $i++) {
      $data[] = $in->filter[$i]->name." = '".$in->filter[$i]->value."'" ;
    }
    $filter = "WHERE ".implode(" AND ",$data) ;
  }
	/* database **/
	if ($in->appkey == "A-UcsCjA69sqD") {
		try {
			$que 	= "SELECT * FROM produk ".$filter." ORDER BY app_id ASC";
			$sth 	= $PLINK->prepare($que);
			$sth->execute();
			$row	= $sth->fetchAll(PDO::FETCH_ASSOC);
			$PLINK 	= null;
		}
		catch (PDOException $e){
	        $row    = array("pesan"=>"Inquiry data gagal dilakukan", "error"=>$e->getMessage());
		}
	}else {
		$row    = array("pesan"=>"You're trying to do something wrong", "error"=>"You're trying to do something wrong");
	}


	echo json_encode($row);
    flush();
?>
