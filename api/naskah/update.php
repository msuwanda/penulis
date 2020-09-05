<?php

	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	header('Access-Control-Allow-Origin: *');

    include $_SERVER['DOCUMENT_ROOT']."/conf/setDB02.php";        

	/* methode **/
    $input = $_POST ;
	$in = json_decode(file_get_contents("php://input"));
	$ard = array();
	for ($i=0; $i < count($in->data) ; $i++) {
		$ard[] = $in->data[$i]->name." = :".$in->data[$i]->name ;
	}
    $data = array();
    for ($i=0; $i < count($in->filter) ; $i++) {
        $data[] = $in->filter[$i]->name." = :".$in->filter[$i]->name ;
    }
    $filter = "WHERE ".implode(" AND ",$data) ;

	$datas = implode(",",$ard) ;
	$error		= "";
		try{
			$PLINK->beginTransaction();
			$que	= "UPDATE tm_naskah SET ".$datas." ".$filter;
			$sth	= $PLINK->prepare($que) ;
			for ($i=0; $i < count($in->data) ; $i++) {
				$sth->bindValue(":".$in->data[$i]->name,$in->data[$i]->value, PDO::PARAM_STR) ;
            }
            for ($i=0; $i < count($in->filter) ; $i++) {
                $sth->bindValue(":".$in->filter[$i]->name,$in->filter[$i]->value, PDO::PARAM_STR) ;
            }
			
			$sth->execute() ; 
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
			//$error  = "1" ;
			$error	= $e->getMessage();
		}


	$pesan  = array("pesan"=>$pesan, "kelas"=>$kelas, "error"=>$error,"title" => $title);
	echo json_encode($pesan);
?>
