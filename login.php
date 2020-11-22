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
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Login | INNOVASI</title>
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
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J7RNXCB1G9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J7RNXCB1G9');
</script>
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
                    <div class="d-none d-lg-block col-lg-4">
                    </div>
                    <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                        <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                            <div class="app-logo"></div>
                            <h4 class="mb-0">
                                <span class="d-block">Selamat datang kembali,</span>
                                <span>Harap masuk ke akun Anda.</span>
                            </h4>
                            <h6 class="mt-3">Tidak ada akun? <a href="/register" class="text-primary">Sign up sekarang</a></h6>
                            <div class="divider row"></div>
                            <div>
                                <form class="" onsubmit="return false" id="formdata">
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <div class="position-relative form-group">
                                                <label for="exampleEmail" class="">Email</label>
                                                <input name="email" id="eEmail" placeholder="Email here..." type="email" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="position-relative form-group">
                                                <label for="examplePassword" class="">Password</label>
                                                <input name="password" id="ePassword" placeholder="Password here..." type="password" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider row"></div>
                                    <div class="d-flex align-items-center">
                                        <div class="ml-auto">
                                            <!--<a href="javascript:void(0);" class="btn-lg btn btn-link">Recover Password</a>-->
                                            <button class="btn btn-primary btn-lg" onclick="simpanData()">Login to Dashboard</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
    function simpanData() {
            const form = new FormData(document.querySelector('#formdata'));
            const url = './proslog.php' ;
            const request = new Request(url, {
                method: 'POST',
                body: form
            });

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
                            sessionStorage.setItem('email', d.getId("eEmail").value);
                            window.location.href = "/200000";
                        }
                        else {
                            //console.log(data.error);
                        }
                    })
                })
        }
  </script>


</html>

