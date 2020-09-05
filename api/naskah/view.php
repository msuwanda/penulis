<?php
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	header('Access-Control-Allow-Origin: '.$_SERVER['REMOTE_ADDR']);
	include $_SERVER['DOCUMENT_ROOT']."/conf/setDB02.php";
	$in = json_decode(file_get_contents("php://input"));
	$filter = '' ;
	$page = '' ;
	if (isset($in->filter)) {
		$data = array();
		for ($i=0; $i < count($in->filter) ; $i++) {
			$data[] = $in->filter[$i]->name." = :".$in->filter[$i]->name ;
		}
		$filter = "WHERE ".implode(" AND ",$data) ;
	}

	if (isset($in->pages)) {
	$page = "LIMIT ".$in->pages.",10 "  ;
	}
	if (isset($in->search)) {
		$data = array();
		for ($i=0; $i < count($in->search) ; $i++) {
			$data[] = $in->search[$i]->name." LIKE :".$in->search[$i]->name ;
		}
		$filter = "WHERE ".implode(" AND ",$data) ;
	}
	if ($in->appkey == "@?t-E#EC2JUge-^yxC!P97uvQ7K#eM8hrUj=PW=EV_x49_-Xxqu@TWt?FUtv") {
		try {
			$que 	= "SELECT * FROM v_naskah ".$filter." ".$page;
			$sth 	= $PLINK->prepare($que);
			if (isset($in->search)) {
				$data = array();
				for ($i=0; $i < count($in->search) ; $i++) {
					$sth->bindValue(":".$in->search[$i]->name,"%".$in->search[$i]->value."%", PDO::PARAM_STR) ;
				}
			}
			if (isset($in->filter)) {
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
