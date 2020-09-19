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
    const data = { appkey: getKey(), pages: `${count}`, search: [{ name: "usr_email", value: `${Search}` }, { name: "usr_name", value: `${Search2}` }] };
    const url = '/api/user.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
    }).then(res => res.json()).then((data) => {
      setDatas(data);
      //console.log(data);
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
    <tr key={data.usr_email} className="transition-table">
      <td> {data.usr_email } </td>
      <td> {data.usr_name} </td>
      <td> {data.usr_number } </td>
      <td> {data.usr_insta} </td>
    </tr>

  );

  return (
    <div>
      <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Penulis</th>
              <th>Number</th>
              <th>Instagram</th>
            </tr>
          <tr>
            <th><input className="form-control" onKeyUp={event => handleSearch(event.target.value)} placeholder="Search"></input></th>
            <th><input className="form-control" onKeyUp={event => handleSearch2(event.target.value)} placeholder="Search"></input></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>

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
