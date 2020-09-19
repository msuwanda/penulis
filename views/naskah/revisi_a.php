<div class="row">
  <div class="col-md-12 col-lg-12">
    <div class="mb-3 card">
      <div class="card-header-tab card-header-tab-animation card-header">
        <div class="card-header-title">
          <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
          Form Revisi Naskah
        </div>
      </div>
      <div class="card-body" >
        <form onsubmit="return false" id="formdata" enctype="multipart/form-data">
        <div class="row">
            <div class="col-md-12">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Komentar Revisi :</b></label>
                    <textarea name="ns_insta" class="form-control" required id="dekse" ></textarea>
                    <input type="hidden" name="ns_status" value="3" >
                </div>
            </div>
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