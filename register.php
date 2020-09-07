<!doctype html>
<html lang="en">
<?php
//error_reporting(E_ALL);
//ini_set('display_errors', 1);
?>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Language" content="en">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Register | Innovasi</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
  <meta name="description" content="This is an example dashboard created using build-in elements and components.">
  <meta name="msapplication-tap-highlight" content="no">
  <!--
    =========================================================
    * ArchitectUI HTML Theme Dashboard free edition - v1.1.0
    =========================================================
    * Product Page: https://dashboardpack.com
    * Copyright 2019 DashboardPack (https://dashboardpack.com)
    * Licensed under MIT (https://github.com/DashboardPack/architectui-html-theme-free/blob/master/LICENSE)
    =========================================================
    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    -->
  <link href="./main.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="assets/style.css" />
  <style>
    .form-line {
        display: block;
        width: 100%;
        height: calc(2.25rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 0px solid #ced4da;
        border-bottom: 1px solid #ced4da;
    }
  </style>
</head>

<body>
<div class="app-container app-theme-white body-tabs-shadow">
        <div class="app-container">
            <div class="h-100">
                <div class="h-100 no-gutters row">
                    <div class="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7">
                        <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                            <div class="app-logo"></div>
                            <h4>
                                <div>Welcome,</div>
                                <span>It only takes a <span class="text-success">few seconds</span> to create your account</span>
                            </h4>
                            <div>
                                <form class="" onsubmit="return false" id="formdata">
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <div class="position-relative form-group">
                                                <label for="exampleEmail" class=""><span class="text-danger">*</span> Email</label>
                                                <input name="email" id="dEmail" required placeholder="Email here..." type="email" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="position-relative form-group">
                                                <label for="exampleName" class="">Name</label>
                                                <input name="name" id="dName" required placeholder="Name here..." type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="position-relative form-group">
                                                <label for="examplePassword" class=""><span class="text-danger">*</span> Password</label>
                                                <input name="password" minlength="8" required id="Password" placeholder="Password here..." type="password" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="position-relative form-group">
                                                <label for="examplePasswordRep" class=""><span class="text-danger">*</span> Repeat Password</label>
                                                <input name="passwordrep" id="PasswordRep" placeholder="Repeat Password here..." type="password" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3 position-relative form-check">
                                        <input required name="check" id="exampleCheck" type="checkbox" class="form-check-input">
                                        <label for="exampleCheck" class="form-check-label">Accept our Terms and Conditions.</label>
                                    </div>
                                    <div class="mt-4 d-flex align-items-center">
                                        <h5 class="mb-0">Already have an account? <a href="/login" class="text-primary">Sign in</a></h5>
                                        <div class="ml-auto">
                                            <button class="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg" onclick="simpanData()">Create Account </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="d-lg-flex d-xs-none col-lg-5">

                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<script type="text/javascript" src="./assets/main.min.js"></script>
<script type="text/javascript" src="./config/config.js"></script>
<script src="./assets/sweetalert2.all.min.js"></script>
  <script>
    var password = document.getElementById("Password")
    var confirm_password = document.getElementById("PasswordRep");

    function validatePassword(){
      if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

    function ValidateEmail(mail) 
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
        return (false)
    }
    function simpanData() {
            const form = new FormData(document.querySelector('#formdata'));
            const url = './prosreg.php' ;
            const request = new Request(url, {
                method: 'POST',
                body: form
            });
            const str = d.getId("exampleCheck").checked;
            const str1 = d.getId("dEmail").value;
            const str2 = d.getId("PasswordRep").value;
            const str3 = ValidateEmail(str1) ; 
            const str4 = d.getId("dName").value;
            if (str == true & str1.length > 0 & str2.length > 0 & str3 == true & str4.length > 0 ) {
            fetch(request)
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    Swal.fire({
                        title: data.title,
                        text: data.pesan,
                        type: data.kelas,
                        confirmButtonColor: '#2651be',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (data.error == 0) {
                            window.location.href = "/login";
                        }
                        else {
                            console.log(data.error);
                        }
                    })
                })
        }
    }
  </script>

</html>

