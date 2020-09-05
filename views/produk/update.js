const R = React;
function Views() {

  const [count] = R.useState(0);
  const [Datas, setDatas] = R.useState([]);

  R.useEffect(() => {
    const data = { appkey: "A-gxuUm4fcbfU", filter: [{ name: "kln_id", value: getParam[0] }] };
    const url = '/view_s.php';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => res.json()).then((data) => {
      setDatas(data);
    }).catch(error => console.error('Error:', error));

  }, [count]);

  function saveData() {
    const url = '/update_s.php';
    fetch(url, {
      method: 'POST',
      body: getInput("#formdata", [{ name: "kln_id", value: getParam[0] }], "A-gxuUm4fcbfU"),
      headers: {
        'Content-Type': 'aplication/json'
      },
    }).then(res => res.json())
      .then(data => (
        Swal.fire({
          title: data.title,
          text: data.pesan,
          type: data.kelas,
          confirmButtonColor: '#2651be',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (data.error == 0) {
            window.location.href = "/200000";
          } else {
            console.log(gagal);
          }
        })
      )).catch(error => console.error('Error:', error));
  }

  const items = Datas.map((data) =>
    <div key={data.kln_id}>
      <div className="position-relative row form-group">
        <label className="col-sm-2 col-form-label">Klien Nama</label>
        <div className="col-md-10">
          <input type="text" className="form-control" name="nama" defaultValue={data.kln_nama}></input>
        </div>
      </div>
      <div className="position-relative row form-group">
        <label className="col-sm-2 col-form-label">Klien Npwp</label>
        <div className="col-md-10">
          <input type="text" className="form-control" name="npwp" defaultValue={data.kln_npwp}></input>
        </div>
      </div>
      <div className="position-relative row form-group">
        <div className="col-sm-10 offset-sm-2">
          <button className="mb-2 mr-2 btn btn-primary btn-lg btn-block" onClick={() => saveData()}>Simpan</button>
        </div>
      </div>

    </div>
  );
  return items ;
}
const domContainer = document.querySelector('#formdata');
ReactDOM.render(<Views />, domContainer);

