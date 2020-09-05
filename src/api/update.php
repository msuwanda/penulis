<?php
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	header('Access-Control-Allow-Origin: '.$_SERVER['REMOTE_ADDR']);
	session_start() ;

	include $_SERVER['DOCUMENT_ROOT']."/conf/setDB02.php";



	/* methode **/
		$in = json_decode(file_get_contents("php://input"));
		/* get array filter */
		$filter = '' ;
    $arf = array();
    for ($i=0; $i < count($in->filter) ; $i++) {
      $arf[] = $in->filter[$i]->name." = '".$in->filter[$i]->value."'" ;
    }
    $filter = "WHERE ".implode(" AND ",$arf) ;
		/* get array datas */
		$datas = '' ;
    $ard = array();
    for ($i=0; $i < count($in->data) ; $i++) {
      $ard[] = $in->data[$i]->name." = '".$in->data[$i]->value."'" ;
    }
    $datas = implode(",",$ard) ;

	$error		= "";
	if ($in->appkey == "__API_KEY__") {
		try{
			$PLINK->beginTransaction();
			$que	= "UPDATE __TB_NAME__ SET ".$datas." ".$filter ;
			$PLINK->exec($que);
			$title  = "Good Job!" ;
			$pesan 	= "Data telah berhasil disimpan";
			$kelas	= "success";
			$error  = "0" ;
			$PLINK->commit();
		}
		catch(Exception $e){
			$PLINK->rollBack();
			$title  = "Sorry !" ;
			$pesan	= "Data gagal disimpan";
			$kelas	= "error";
			$error  = "1" ;
			//$error	= $e->getMessage();
		}
	} else {
		$title  = "Sorry !" ;
		$pesan	= "Aplikasi error silahkan hubungi customer service";
		$kelas	= "error";
		$error  = "1" ;
	}

	$pesan  = array("pesan"=>$pesan, "kelas"=>$kelas, "error"=>$error, "query"=>$que,"title" => $title);
	echo json_encode($pesan) ;
;
?>
