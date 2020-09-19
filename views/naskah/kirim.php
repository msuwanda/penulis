<div class="row">
  <div class="col-md-12 col-lg-12">
    <div class="mb-3 card">
      <div class="card-header-tab card-header-tab-animation card-header">
        <div class="card-header-title">
          <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
          Form Naskah
        </div>
      </div>
      <div class="card-body" >
        <form onsubmit="return false" id="formdata" enctype="multipart/form-data">
        <div class="row">
            <div class="col-md-12">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Judul :</b></label>
                    <input name="judl" placeholder="Judul Buku" type="text" class="form-control" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Nama Penulis :</b></label>
                    <input name="namp" placeholder="Nama Penulis" type="text" class="form-control" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Kategori :</b></label>
                    <select name="katg" id="kategori" class="form-control">
                        <option>-</option>

                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Audience :</b></label>
                    <select name="aude" id="exampleSelect" class="form-control">
                        <option>-</option>
                        <option value="Anak-Anak">Anak Anak</option>
                        <option value="Remaja">Remaja</option>
                        <option value="Dewasa">Dewasa</option>
                        <option value="Semua-Umur">Semua Umur</option>
                    </select>                
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Cover :</b></label>
                    <select name="copg" id="exampleSelect" class="form-control">
                        <option value="2">-</option>
                        <option value="1">Rancangan sendiri</option>
                        <option value="2">Rancangan innovasi</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>File Naskah :</b></label>
                    <input name="upfile" required type="file" class="form-control-file" accept=".docx">
                    <small class="form-text text-muted">
                        Download format naskah <a href="https://drive.google.com/file/d/1mxyRfLKwBL_oBbn-ulx8nz17HXRk-QR0/view?usp=sharing" >template ukuran novel (13,20).docx </a>
                    </small>
                </div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>File Cover :</b></label>
                    <input name="upfilec" type="file" class="form-control-file" accept=".psd">
                    <small class="form-text text-muted">
                        Download format cover <a href="https://drive.google.com/file/d/14nATLFlOxIgh-pREdJuFtD0IexkYdgMR/view?usp=sharing" >template cover.psd </a>
                    </small>
                </div>
            </div>
            <div class="col-md-12">
                <div class="position-relative form-group">
                    <label for="exampletext" class=""><b>Sinopsis :</b></label>
                    <textarea name="deks" class="form-control" required minlength="150" id="dekse" maxlength="250"></textarea>
                </div>
            </div>
            <div class="col-md-12">
                <div class="position-relative row form-group">
                    <div class="col-sm-12">
                        <button class="mb-2 mr-2 btn btn-primary btn-lg btn-block" onclick="simpanData()">Kirim Naskah</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
