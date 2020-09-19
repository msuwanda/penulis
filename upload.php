<?php 
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Access-Control-Allow-Origin: '.$_SERVER['REMOTE_ADDR']);
    session_start() ;
    include $_SERVER['DOCUMENT_ROOT']."/conf/setDB02.php";        
    $file = $_FILES ;
    $in = $_POST ;
    if ($in['copg'] == '1' ) {
        $namecover = rand(1,999)."-".$_FILES['upfilec']['name'] ;
        move_uploaded_file($_FILES['upfilec']['tmp_name'],"./files/".$namecover) ;
    } else {
        $namecover = 'Rancangan Innovasi' ;
    }
    $namefile = rand(1,999)."-".$_FILES['upfile']['name'] ;
    if(move_uploaded_file($_FILES['upfile']['tmp_name'],"./files/".$namefile)) {

        try{
            $PLINK->beginTransaction();
            $que	= "INSERT INTO tm_naskah SET ns_judul = :judl, ns_penulis = :namp, ns_kategori = :katg,ns_audience = :aude, ns_copyright = :copg, ns_dekripsi = :deks,  ns_status = :nstatus, usr_email = :usremail, ns_files = :fils, ns_date = NOW() ";
            $sth	= $PLINK->prepare($que) ;
            $sth->bindValue(":judl",$in['judl'], PDO::PARAM_STR) ;
            $sth->bindValue(":namp",$in['namp'], PDO::PARAM_STR) ;
            $sth->bindValue(":katg",$in['katg'], PDO::PARAM_STR) ;
            $sth->bindValue(":aude",$in['aude'], PDO::PARAM_STR) ;
            $sth->bindValue(":copg",$namecover, PDO::PARAM_STR) ;
            $sth->bindValue(":deks",$in['deks'], PDO::PARAM_STR) ;
            $sth->bindValue(":nstatus",'1', PDO::PARAM_STR) ;
            $sth->bindValue(":usremail",$_SESSION['email'], PDO::PARAM_STR) ;
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
    $pesan  = array("pesan"=>$pesan, "kelas"=>$kelas, "error"=>$error, "query"=>$que,"title" => $title);
	echo json_encode($pesan);
?>