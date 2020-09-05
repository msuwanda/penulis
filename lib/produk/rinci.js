var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var R = React;
function Views() {
  var _R$useState = R.useState(0),
      _R$useState2 = _slicedToArray(_R$useState, 1),
      count = _R$useState2[0];

  var _R$useState3 = R.useState([]),
      _R$useState4 = _slicedToArray(_R$useState3, 2),
      Datas = _R$useState4[0],
      setDatas = _R$useState4[1];

  R.useEffect(function () {
    var data = { appkey: "A-gxuUm4fcbfU", filter: [{ name: "kln_id", value: getParam[0] }] };
    var url = '/view_s.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setDatas(data);
      console.log(data);
    }).catch(function (error) {
      return console.error('Error:', error);
    });
  }, [count]);

  var items = Datas.map(function (data) {
    return React.createElement(
      "table",
      { className: "table" },
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Kln id"
        ),
        React.createElement(
          "td",
          null,
          data.kln_id
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Kln Nama"
        ),
        React.createElement(
          "td",
          null,
          data.kln_nama
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Kln Npwp"
        ),
        React.createElement(
          "td",
          null,
          data.kln_npwp
        )
      )
    );
  });

  return React.createElement(
    "div",
    null,
    items
  );
}
var domContainer = document.querySelector('#datatable');
ReactDOM.render(React.createElement(Views, null), domContainer);