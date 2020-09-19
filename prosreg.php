<?php 
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Access-Control-Allow-Origin: '.$_SERVER['REMOTE_ADDR']);
    include $_SERVER['DOCUMENT_ROOT']."/conf/setDB02.php";

    try{
        $PLINK->beginTransaction();
        $que	= "INSERT INTO tm_users SET usr_email = :usrmail, usr_name = :usrname, usr_number = :number, usr_insta = :insta, usr_pasd = :usrpass, grup_id = '112'" ;
        $sth	= $PLINK->prepare($que) ;
        $sth->bindValue(":usrmail",$_POST['email'], PDO::PARAM_STR) ;
        $sth->bindValue(":usrname",$_POST['name'], PDO::PARAM_STR) ;
        $sth->bindValue(":number",$_POST['number'], PDO::PARAM_STR) ;
        $sth->bindValue(":insta",$_POST['insta'], PDO::PARAM_STR) ;
        $sth->bindValue(":usrpass",password_hash($_POST['password'], PASSWORD_DEFAULT), PDO::PARAM_STR) ;
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
        $error	= explode("'",$e->getMessage());
        $pesan	= "Email '".$error[1]."' has been registered";
        $kelas	= "error";
        $error  = "1" ;


    }
        $ques = "" ;
        $pesan  = array("pesan"=>$pesan, "kelas"=>$kelas, "error"=>$error, "query"=>$ques,"title" => $title);
        echo json_encode($pesan);