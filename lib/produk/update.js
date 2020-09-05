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
      method: 'POST',
      body: JSON.stringify(data)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setDatas(data);
    }).catch(function (error) {
      return console.error('Error:', error);
    });
  }, [count]);

  function saveData() {
    var url = '/update_s.php';
    fetch(url, {
      method: 'POST',
      body: getInput("#formdata", [{ name: "kln_id", value: getParam[0] }], "A-gxuUm4fcbfU"),
      headers: {
        'Content-Type': 'aplication/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      return Swal.fire({
        title: data.title,
        text: data.pesan,
        type: data.kelas,
        confirmButtonColor: '#2651be',
        confirmButtonText: 'OK'
      }).then(function (result) {
        if (data.error == 0) {
          window.location.href = "/200000";
        } else {
          console.log(gagal);
        }
      });
    }).catch(function (error) {
      return console.error('Error:', error);
    });
  }

  var items = Datas.map(function (data) {
    return React.createElement(
      "div",
      { key: data.kln_id },
      React.createElement(
        "div",
        { className: "position-relative row form-group" },
        React.createElement(
          "label",
          { className: "col-sm-2 col-form-label" },
          "Klien Nama"
        ),
        React.createElement(
          "div",
          { className: "col-md-10" },
          React.createElement("input", { type: "text", className: "form-control", name: "nama", defaultValue: data.kln_nama })
        )
      ),
      React.createElement(
        "div",
        { className: "position-relative row form-group" },
        React.createElement(
          "label",
          { className: "col-sm-2 col-form-label" },
          "Klien Npwp"
        ),
        React.createElement(
          "div",
          { className: "col-md-10" },
          React.createElement("input", { type: "text", className: "form-control", name: "npwp", defaultValue: data.kln_npwp })
        )
      ),
      React.createElement(
        "div",
        { className: "position-relative row form-group" },
        React.createElement(
          "div",
          { className: "col-sm-10 offset-sm-2" },
          React.createElement(
            "button",
            { className: "mb-2 mr-2 btn btn-primary btn-lg btn-block", onClick: function onClick() {
                return saveData();
              } },
            "Simpan"
          )
        )
      )
    );
  });
  return items;
}
var domContainer = document.querySelector('#formdata');
ReactDOM.render(React.createElement(Views, null), domContainer);