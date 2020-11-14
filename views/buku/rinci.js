const R = React;
function Views() {

  const [count,setCount] = R.useState(0);
  const [Datas, setDatas] = R.useState([]);
  const [isLoade, setLoaded] = R.useState(false)
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
      console.log(data[0]);
    }).catch(error => console.error('Error:', error));

  }, [count]);
  if (isLoade) {  
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <div className="data-full">
                <div className="data-title">Judul</div>
                <div className="data-body">{Datas.ns_judul}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="data-full">
                <div className="data-title">Penulis</div>
                <div className="data-body">{Datas.ns_penulis}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="data-full">
                <div className="data-title">Kategori</div>
                <div className="data-body">{Datas.k_name}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="data-full">
                <div className="data-title">Audience</div>
                <div className="data-body">{Datas.ns_audience}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="data-full">
                <div className="data-title">Harga</div>
                <div className="data-body">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Datas.harga)}
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="data-full">
                <div className="data-title">Sinopsis</div>
                <div className="data-body">{Datas.ns_dekripsi}</div>
              </div>  
            </div>
            <div className="col-md-12">
              <div className="data-full">
                <div className="data-title">Toko.ly</div>
                <div className="data-body">{Datas.tokoly}</div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="data-full">
                <div className="data-title">Tokopedia</div>
                <div className="data-body">{Datas.tokopedia}</div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="data-full">
                <div className="data-title">Bukalapak</div>
                <div className="data-body">{Datas.bukalapak}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative row form-group">
                <div className="col-sm-12">
                  <button onClick={() => window.location.href = "/600200#" + getParam[0]} className="mt-4 mr-2 btn btn-success btn-lg btn-block">
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative row form-group">
                <div className="col-sm-12">
                  <button onClick={() => window.location.href = "/600300#" + getParam[0]} className="mt-4 mr-2 btn btn-success btn-lg btn-block">
                    Update photo produk
                  </button>
                </div>
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