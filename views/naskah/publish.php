<div class="row">
  <div class="col-md-12 col-lg-12">
    <div class="mb-3 card">
      <div class="card-header-tab card-header-tab-animation card-header">
        <div class="card-header-title">
          <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
          Form Publish Naskah
        </div>
      </div>
      <div class="card-body" >
        <form onsubmit="return false" id="formdata" enctype="multipart/form-data">
        <div class="row">
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Instragram :</b></label>
                    <input name="insta" placeholder="user.name" type="text" class="form-control" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Whatsapp :</b></label>
                    <input name="wapp" placeholder="+6281000000" type="text" class="form-control" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Cover :</b></label>
                    <input name="upfile" required type="file" class="form-control-file" accept=".psd">
                    <small class="form-text text-muted">
                        <a href="#">download<a> Template conver jika anda mau bikin cover sendiri <br> (untuk yang tidak punya cover upload template kosong)
                    </small>
                </div>
            </div>
            <div class="col-md-12">
              <div class="position-relative form-check">
                  <input required="" name="check" id="eCheck" type="checkbox" class="form-check-input">
                  <label for="exampleCheck" class="form-check-label">Accept our <a href="javascript:void(0);">Terms and Conditions</a>.</label>
              </div>
            </div> <br><br>
            <div class="col-md-12">
                <div class="position-relative row form-group">
                    <div class="col-sm-12">
                        <button class="mb-2 mr-2 btn btn-primary btn-lg btn-block" onclick="simpanData()">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>