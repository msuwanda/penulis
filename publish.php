<?php 
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Access-Control-Allow-Origin: '.$_SERVER['REMOTE_ADDR']);
    session_start() ;
    include $_SERVER['DOCUMENT_ROOT']."/conf/setDB02.php";        
    $file = $_FILES ;
    $in = $_POST ;
    $namefile = rand(1,999)."-".$_FILES['upfile']['name'] ;
    if(move_uploaded_file($_FILES['upfile']['tmp_name'],"./files/".$namefile)) {

        try{
            $PLINK->beginTransaction();
            $que	= "UPDATE tm_naskah SET ns_cover = :fils, ns_insta = :insta, ns_wa = :wapp, ns_status = :nsstatus WHERE ns_id = :nsid ";
            $sth	= $PLINK->prepare($que) ;
            $sth->bindValue(":insta",$in['insta'], PDO::PARAM_STR) ;
            $sth->bindValue(":wapp",$in['wapp'], PDO::PARAM_STR) ;
            $sth->bindValue(":nsstatus",'6', PDO::PARAM_STR) ;
            $sth->bindValue(":nsid",$in['nsid'], PDO::PARAM_STR) ;
            $sth->bindValue(":fils",$namefile, PDO::PARAM_STR) ;
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
            $error  = "1" ;
            $error	= $e->getMessage();
        }
    } else {
            $title  = "Sorry !" ;
            $pesan	= "file tidak bisa di upload";
            $kelas	= "error";
            $error  = "1" ;
    }
    $ques = "" ;
    $pesan  = array("pesan"=>$pesan, "kelas"=>$kelas, "error"=>$error, "query"=>$ques,"title" => $title);
	echo json_encode($pesan);
?>