<!doctype html>
<html lang="en">
<?php
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: /login');
	exit;
}

//error_reporting(E_ALL);
//ini_set('display_errors', 1);
include_once 'config/config.php';
$pages = new Pages($_GET['pages'],$_SESSION['grup']) ;

?>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Language" content="en">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>APP | INNOVASI PUBLISHING</title>
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
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <div class="app-header header-shadow">
      <div class="app-header__logo">
        <div class="logo-src"></div>
        <div class="header__pane ml-auto">
          <div>
            <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <div>
          <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-header__menu">
        <span>
          <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div class="app-header__content">
        <div class="app-header-left">

        </div>
        <div class="app-header-right">
          <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
              <div class="widget-content-wrapper">
                <div class="widget-content-left">
                  <div class="btn-group">
                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                      <img width="42" class="rounded-circle" src="assets/images/avatars/1.jpg" alt="">
                      <i class="fa fa-angle-down ml-2 opacity-8"></i>
                    </a>
                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                      <div tabindex="-1" class="dropdown-divider"></div>
                      <a type="button" href="logout.php" tabindex="0" class="dropdown-item">Logout</a>
                    </div>
                  </div>
                </div>
                <div class="widget-content-left  ml-3 header-user-info">
                  <div class="widget-heading">
                    <?= ucfirst($_SESSION['name']) ?>
                  </div>
                  <div class="widget-subheading">
                    <?= $_SESSION['email'] ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-main">
      <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
          <div class="logo-src"></div>
          <div class="header__pane ml-auto">
            <div>
              <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div class="app-header__menu">
          <span>
            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
              <span class="btn-icon-wrapper">
                <i class="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
        <div class="scrollbar-sidebar">
          <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu">
                <?php echo $pages->getMenu() ; ?>
            </ul>
          </div>
        </div>
      </div>
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="app-page-title">
              <div class="page-title-wrapper">
                  <div class="page-title-heading">
                  <div class="page-title-icon">
                      <i class="pe-7s-bookmarks icon-gradient bg-mean-fruit">
                      </i>
                  </div>
                  <div>Innovasi Publishing
                      <div class="page-title-subheading">TERBITKAN BUKUMU bersama kami, jadilah satu dari satu juta penulis yang akan menghiasi sejarah literasi di Indonesia dan
                                    ikut dalam satu barisan untuk mengubah literasi ummah menjadi lebih baik
                      </div>
                  </div>
                  </div>
              </div>
          </div>
          <!-- Content -->
          <?php  $pages->getContet() ; ?>
          <!-- Content -->
        </div>
        <div class="app-wrapper-footer">
          <div class="app-footer">
            <div class="app-footer__inner">
              <div class="app-footer-left">
                <ul class="nav">
                  <li class="nav-item">
                    <a href="javascript:void(0);" class="nav-link">
                      Copyright INNOVASI PUBLISHING &copy;<script>document.write(new Date().getFullYear());</script>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="app-footer-right">
                <ul class="nav">
                  <li class="nav-item">
                    <a href="javascript:void(0);" class="nav-link">
                      Mandala
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0);" class="nav-link">
                      <div class="badge badge-success mr-1 ml-0">
                        <small>Version</small>
                      </div>
                      0.0.1-@~Alpha
                    </a>
                  </li>
                </ul>
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
<script src="./assets/react.development.js" ></script>
<script src="./assets/react-dom.development.js" ></script>
<script src="<?= $pages->getScript() ?>"></script>

</html>

