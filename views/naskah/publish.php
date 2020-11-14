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
                    <label for="exampletext" class=""><b>Harga</b></label>
                    <input name="harga" placeholder="Harga" type="number" class="form-control" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Photo buku :</b></label>
                    <input name="upfile" required type="file" class="form-control-file">
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>toko.ly</b></label>
                    <input name="tokoly" placeholder="https://toko.ly/penerbitinnovasi/" type="text" class="form-control" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Tokopedia</b></label>
                    <input name="tokopedia" placeholder="https://www.tokopedia.com/name-toko/name-produk" type="text" class="form-control" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Bukulapak</b></label>
                    <input name="bukulapak" placeholder="https://www.bukalapak.com/p/name-produk" type="text" class="form-control" required>
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