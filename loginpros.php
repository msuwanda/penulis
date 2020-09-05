<?php 
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Access-Control-Allow-Origin: '.$_SERVER['REMOTE_ADDR']);
    include $_SERVER['DOCUMENT_ROOT']."/conf/setDB02.php";
    try{
        $PLINK->beginTransaction();
        $que	= "SELECT * FROM tm_users WHERE usr_email = :usrmail " ;
        $stmt	= $PLINK->prepare($que) ;
        $stmt->bindValue(":usrmail",$_POST['email'], PDO::PARAM_STR) ;
        $stmt->execute() ;
        if ($stmt->rowCount() > 0) {
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            if (password_verify($_POST['password'], $result['usr_pasd'])) {
                $title  = "Login success!" ;
                $pesan 	= ".";
                $kelas	= "success";
                $error  = "0" ;
                session_start() ;
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['name'] = $result['usr_name'];
                $_SESSION['email'] = $result['usr_email'];
                $_SESSION['grup'] = $result['grup_id']; 
            } else {
                $title  = "Sorry !" ;
                $pesan	= "Password incorect ";
                $kelas	= "error";
                $error  = "1" ;
            }
        } else {
            $title  = "Sorry !" ;
            $pesan	= "Incorrect username!";
            $kelas	= "error";
            $error  = "1" ;
        }
    }
    catch(Exception $e){
        $PLINK->rollBack();
        $title  = "error !" ;
        $error	= "" /*$e->getMessage()*/ ;
        $pesan	= "login error contact admin@penerbit.com";
        $kelas	= "error";
        $error  = "1" ;


    }

    $ques = "" ;
    $pesan  = array("pesan"=>$pesan, "kelas"=>$kelas, "error"=>$error, "query"=>$ques,"title" => $title);
    echo json_encode($pesan);