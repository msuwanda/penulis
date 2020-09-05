const R = React ;
function Views() {

  const [count, setCount] = R.useState(0);
  const [Datas, setDatas] = R.useState([]);
  const [Back, setBack] = R.useState(true);
  const [Next, setNext] = R.useState(true);
  const [Search, setSearch] = R.useState([]);
  const [Search2, setSearch2] = R.useState([]);
  const [Search3, setSearch3] = R.useState([]);

  R.useEffect(() => {
    const data = { appkey: "A-gxuUm4fcbfU", pages: `${count}`, search: [{ name: "kln_id", value: `${Search}` }, { name: "kln_nama", value: `${Search2}` }, { name: "kln_alamat", value: `${Search3}` }] };
    const url = 'http://penerbit.com/view_s.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
    }).then(res => res.json()).then((data) => {
      setDatas(data);
      console.log(data);
      if (count !== 0) { setBack(false) } else { setBack(true) }
      if (data.length < 10) { setNext(true) } else { setNext(false) }
    }).catch(error => console.error('Error:', error));

  }, [count, Search, Search2, Search3]);
  function handleSearch(param) {
    setSearch(param);
    setCount(0);
  } function handleSearch2(param) {
    setSearch2(param);
    setCount(0);
  } function handleSearch3(param) {
    setSearch3(param);
    setCount(0);
  }
  const items = Datas.map((data) =>
    <tr key={data.kln_id} className="transition-table">
      <td>{data.kln_id}</td>da
      <td>{data.kln_nama}</td>
      <td>{data.kln_npwp}</td>
      <td><ul className="pageaction">
        <button className="page-link-prev" onClick={() => window.location.href = '/200020#' + `${data.kln_id}` }>Rinci</button>
        <button className="page-link-next" onClick={() => window.location.href = '/200030#' + `${data.kln_id}`}>Update</button>
          </ul>
      </td>
    </tr>

  );

  return (
    <div>
      <table className="table">
          <thead>
            <tr>
              <th>App id</th>
              <th>App Nama</th>
              <th>App Com</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>
            <tr>
            <th><input className="form-control" onKeyUp={event => handleSearch(event.target.value)} placeholder="Search"></input></th>
            <th><input className="form-control" onKeyUp={event => handleSearch2(event.target.value)} placeholder="Search"></input></th>
            <th><input className="form-control" onKeyUp={event => handleSearch3(event.target.value)} placeholder="Search"></input></th>
            <th></th>
            </tr>
          </tfoot>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <button className="page-link-prev" onClick={() => setCount(count - 10)} disabled={(Back)}> Previous</button>
            <button className="page-link-next" onClick={() => setCount(count + 10)} disabled={(Next)}> Next</button>
          </ul>
        </nav>
    </div>
  );
}
const domContainer = document.querySelector('#datatable');
ReactDOM.render(<Views />, domContainer);
