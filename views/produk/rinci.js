const R = React;
function Views() {

  const [count] = R.useState(0);
  const [Datas, setDatas] = R.useState([]);

  R.useEffect(() => {
    const data = { appkey: "A-gxuUm4fcbfU", filter: [{ name: "kln_id", value: getParam[0] }] };
    const url = '/view_s.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
    }).then(res => res.json()).then((data) => {
      setDatas(data);
      console.log(data);
    }).catch(error => console.error('Error:', error));

  }, [count]);

  const items = Datas.map((data) =>
    <table className="table">
      <tr>
        <td>Kln id</td>
        <td>{data.kln_id}</td>
      </tr>
      <tr>
        <td>Kln Nama</td>
        <td>{data.kln_nama}</td>
      </tr>
      <tr>
        <td>Kln Npwp</td>
        <td>{data.kln_npwp}</td>
      </tr>
    </table>
  );

  return (
    <div>
      {items}
    </div>
  );
}
const domContainer = document.querySelector('#datatable');
ReactDOM.render(<Views />, domContainer);