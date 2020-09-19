const R = React;
function Views() {

  const [count,setCount] = R.useState(0);
  const [Datas, setDatas] = R.useState([]);
  const [isLoade, setLoaded] = R.useState(false)
  R.useEffect(() => {
    const data = { appkey: getKey(), filter: [{ name: "ns_id", value: getParam[0] }] };
    const url = '/api/naskah/view.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
    }).then(res => res.json()).then((data) => {
      setDatas(data[0]);
      setLoaded(true) ;
      setCount(0) ;
    }).catch(error => console.error('Error:', error));

  }, [count]);
  function handleUpdate(param,status) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Ganti status menjadi " + param,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        const data = { filter: [{ name: "ns_id", value: getParam[0] }], data: [{ name: "ns_status", value: status }] };
        const url = '/api/naskah/update.php';
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
              setCount(1);
            }
            else {
              console.log(data.error);
            }
          })
        }).catch(error => console.error('Error:', error));
      }
    })
  }
  const Publish = () => {
    if (Datas.ns_status == 3 || Datas.ns_status == 4) {
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="data-full">
              <div className="data-title">Apa yang harus dirubah</div>
              <div className="data-body">{Datas.ns_insta}</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div></div>)
    }
  } 
  if (isLoade) { 
    const Prosses = () => { 
      if (Datas.ns_status == 3) { 
        return (
        <div className="col-md-12">
          <div className="position-relative row form-group">
            <div className="col-sm-12">
                <button onClick={() => window.location.href = '/400110#' + getParam[0] } className="mb-2 mr-2 btn btn-primary btn-lg btn-block">
                  Upload Revisi 
              </button>
            </div>
          </div>
        </div>
        )  
      }  else {
        return (<div className="col-md-12"></div>)  
      }

    }
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
              <div className="data-title">Status</div>
              <div className="data-body">
                <span className={"alert-" + Datas.s_class} style={{padding: "0px 10px 4px 10px",borderRadius: "5px"}}>
                  {Datas.s_name}
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="data-full">
              <div className="data-title">Naskah</div>
              <div className="data-body">
                <i className="pe-7s-file icon-gradient bg-mean-fruit"></i> 
                {Datas.ns_files}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="data-full">
              <div className="data-title">Cover</div>
              <div className="data-body">
                <i className="pe-7s-file icon-gradient bg-mean-fruit"></i> 
                {Datas.ns_copyright}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="data-full">
              <div className="data-title">Sinopsis</div>
              <div className="data-body">{Datas.ns_dekripsi}</div>
            </div>
            <br></br>
          </div>
        </div>
        </div>
        <div className="col-md-12" style={{marginBottom: "20px"}}>
          <Publish></Publish>
        </div>
        <Prosses></Prosses>

        

      </div>
    );
 
  } else {
    return (<div>Loade</div>)
  }
}
const domContainer = document.querySelector('#datatable');
ReactDOM.render(<Views />, domContainer);