<?php
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	header('Access-Control-Allow-Origin: *');
	include $_SERVER['DOCUMENT_ROOT']."/conf/setDB02.php";
	$in = json_decode(file_get_contents("php://input"));
	$filter = '' ;
	$page = '' ;
	if (isset($in->filter) AND $in->filter[0]->value != 0 ) {
		$data = array();
		for ($i=0; $i < count($in->filter) ; $i++) {
			$data[] = $in->filter[$i]->name." = :".$in->filter[$i]->name ;
		}
		$filter = "WHERE ".implode(" AND ",$data) ;
	}

	if (isset($in->pages)) {
	$page = "LIMIT ".$in->pages.",12 "  ;
	}
	if (isset($in->search)) {
		$data = array();
		for ($i=0; $i < count($in->search) ; $i++) {
			$data[] = $in->search[$i]->name." LIKE :".$in->search[$i]->name ;
		}
		$filter = "WHERE ".implode(" AND ",$data) ;
	}
	if ($in->appkey == "@?t-E#EC2JUge") {
		try {
			$que 	= "SELECT * FROM v_buku ".$filter." ".$page;
			$sth 	= $PLINK->prepare($que);
			if (isset($in->search)) {
				$data = array();
				for ($i=0; $i < count($in->search) ; $i++) {
					$sth->bindValue(":".$in->search[$i]->name,"%".$in->search[$i]->value."%", PDO::PARAM_STR) ;
				}
			}
			if (isset($in->filter) AND $in->filter[0]->value != 0) {
				$data = array();
				for ($i=0; $i < count($in->filter) ; $i++) {
					$sth->bindValue(":".$in->filter[$i]->name,$in->filter[$i]->value, PDO::PARAM_STR) ;
				}
			}

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
