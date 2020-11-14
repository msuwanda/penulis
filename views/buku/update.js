const R = React;
function Views() {

  const [count,setCount] = R.useState(0);
  const [Datas, setDatas] = R.useState([]);
  const [isLoade, setLoaded] = R.useState(false);
  const [Harga, setHarga] = R.useState([]);
  const [Tokoly, setTokoly] = R.useState([]);
  const [Tokopedia, setTokopedia] = R.useState([]);
  const [Bukalapak, setBuklapak] = R.useState([]);

  R.useEffect(() => {
    const data = { appkey: getKey(), filter: [{ name: "id", value: getParam[0] }] };
    const url = '/api/buku/view.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
    }).then(res => res.json()).then((data) => {
      setDatas(data[0]);
      setLoaded(true) ;
      setCount(0) ;
      setHarga(data[0].harga);
      setTokoly(data[0].tokoly);
      setTokopedia(data[0].tokopedia);
      setBuklapak(data[0].bukalapak);
    }).catch(error => console.error('Error:', error));

  }, [count]);

  function handleUpdate() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Ganti data tersebut",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        const data = { filter: [{ name: "id", value: getParam[0] }], data: [{ name: "harga", value: Harga }, { name: "tokoly", value: Tokoly }, { name: "tokopedia", value: Tokopedia },{ name: "bukalapak", value: Bukalapak }] };
        const url = '/api/buku/update.php';
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
        }).then(res => res.json()).then((data) => {
          Swal.fire({
            title: data.title,
            text: data.pesan,
            type: data.kelas,
            confirmButtonColor: '#2651be',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (data.error == 0) {
              window.location.href = '/600100#' + getParam[0];
            }
            else {
              console.log(data.error);
            }
          })
        }).catch(error => console.error('Error:', error));
      }
    })
  }
  if (isLoade) {  
    return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="position-relative form-group">
                <label  className=""><b>Harga</b></label>
              <input name="harga" placeholder="Harga" type="number" className="form-control" defaultValue={Datas.harga} onKeyUp={(event) => setHarga(event.target.value)}></input>
                </div>
            </div>
            <div className="col-md-12">
              <div className="position-relative form-group">
                <label  className=""><b>toko.ly</b></label>
              <input name="tokoly" type="text" className="form-control" defaultValue={Datas.tokoly} onKeyUp={(event) => setTokoly(event.target.value)}></input>
            </div>
              </div>
              <div className="col-md-12">
                <div className="position-relative form-group">
                  <label  className=""><b>Tokopedia</b></label>
              <input name="tokopedia" type="text" className="form-control" defaultValue={Datas.tokopedia} onKeyUp={(event) => setTokopedia(event.target.value)}></input>
            </div>
                </div>
            <div className="col-md-12">
                <div className="position-relative form-group">
                    <label  className=""><b>Bukalapak</b></label>
              <input name="bukalapak" type="text" className="form-control" defaultValue={Datas.bukalapak} onKeyUp={(event) => setBuklapak(event.target.value)}></input>
                </div>
            </div>
            <div className="col-md-12">
              <div className="position-relative row form-group">
                <div className="col-sm-12">
                <button className="mb-2 mr-2 btn btn-primary btn-lg btn-block" onClick={() => handleUpdate()}>Simpan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
 
  } else {
    return (<div>Loade</div>)
  }
}
const domContainer = document.querySelector('#datatable');
ReactDOM.render(<Views />, domContainer);