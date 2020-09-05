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
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>File Naskah :</b></label>
                    <input name="upfile" required type="file" class="form-control-file" accept=".docx">
                    <small class="form-text text-muted">
                        This is some placeholder block-level help
                        text for the above input. It's a bit lighter and easily wraps to a new
                        line.
                    </small>
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