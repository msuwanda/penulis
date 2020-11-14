var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var R = React;
function Views() {
  var _R$useState = R.useState(0),
      _R$useState2 = _slicedToArray(_R$useState, 2),
      count = _R$useState2[0],
      setCount = _R$useState2[1];

  var _R$useState3 = R.useState([]),
      _R$useState4 = _slicedToArray(_R$useState3, 2),
      Datas = _R$useState4[0],
      setDatas = _R$useState4[1];

  var _R$useState5 = R.useState(false),
      _R$useState6 = _slicedToArray(_R$useState5, 2),
      isLoade = _R$useState6[0],
      setLoaded = _R$useState6[1];

  var _R$useState7 = R.useState([]),
      _R$useState8 = _slicedToArray(_R$useState7, 2),
      Harga = _R$useState8[0],
      setHarga = _R$useState8[1];

  var _R$useState9 = R.useState([]),
      _R$useState10 = _slicedToArray(_R$useState9, 2),
      Tokoly = _R$useState10[0],
      setTokoly = _R$useState10[1];

  var _R$useState11 = R.useState([]),
      _R$useState12 = _slicedToArray(_R$useState11, 2),
      Tokopedia = _R$useState12[0],
      setTokopedia = _R$useState12[1];

  var _R$useState13 = R.useState([]),
      _R$useState14 = _slicedToArray(_R$useState13, 2),
      Bukalapak = _R$useState14[0],
      setBuklapak = _R$useState14[1];

  R.useEffect(function () {
    var data = { appkey: getKey(), filter: [{ name: "id", value: getParam[0] }] };
    var url = '/api/buku/view.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setDatas(data[0]);
      setLoaded(true);
      setCount(0);
      setHarga(data[0].harga);
      setTokoly(data[0].tokoly);
      setTokopedia(data[0].tokopedia);
      setBuklapak(data[0].bukalapak);
    }).catch(function (error) {
      return console.error('Error:', error);
    });
  }, [count]);

  function handleUpdate() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Ganti data tersebut",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then(function (result) {
      if (result.value) {
        var data = { filter: [{ name: "id", value: getParam[0] }], data: [{ name: "harga", value: Harga }, { name: "tokoly", value: Tokoly }, { name: "tokopedia", value: Tokopedia }, { name: "bukalapak", value: Bukalapak }] };
        var url = '/api/buku/update.php';
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data)
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          Swal.fire({
            title: data.title,
            text: data.pesan,
            type: data.kelas,
            confirmButtonColor: '#2651be',
            confirmButtonText: 'OK'
          }).then(function (result) {
            if (data.error == 0) {
              window.location.href = '/600100#' + getParam[0];
            } else {
              console.log(data.error);
            }
          });
        }).catch(function (error) {
          return console.error('Error:', error);
        });
      }
    });
  }
  if (isLoade) {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(
            'div',
            { className: 'position-relative form-group' },
            React.createElement(
              'label',
              { className: '' },
              React.createElement(
                'b',
                null,
                'Harga'
              )
            ),
            React.createElement('input', { name: 'harga', placeholder: 'Harga', type: 'number', className: 'form-control', defaultValue: Datas.harga, onKeyUp: function onKeyUp(event) {
                return setHarga(event.target.value);
              } })
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(
            'div',
            { className: 'position-relative form-group' },
            React.createElement(
              'label',
              { className: '' },
              React.createElement(
                'b',
                null,
                'toko.ly'
              )
            ),
            React.createElement('input', { name: 'tokoly', type: 'text', className: 'form-control', defaultValue: Datas.tokoly, onKeyUp: function onKeyUp(event) {
                return setTokoly(event.target.value);
              } })
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(
            'div',
            { className: 'position-relative form-group' },
            React.createElement(
              'label',
              { className: '' },
              React.createElement(
                'b',
                null,
                'Tokopedia'
              )
            ),
            React.createElement('input', { name: 'tokopedia', type: 'text', className: 'form-control', defaultValue: Datas.tokopedia, onKeyUp: function onKeyUp(event) {
                return setTokopedia(event.target.value);
              } })
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(
            'div',
            { className: 'position-relative form-group' },
            React.createElement(
              'label',
              { className: '' },
              React.createElement(
                'b',
                null,
                'Bukalapak'
              )
            ),
            React.createElement('input', { name: 'bukalapak', type: 'text', className: 'form-control', defaultValue: Datas.bukalapak, onKeyUp: function onKeyUp(event) {
                return setBuklapak(event.target.value);
              } })
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(
            'div',
            { className: 'position-relative row form-group' },
            React.createElement(
              'div',
              { className: 'col-sm-12' },
              React.createElement(
                'button',
                { className: 'mb-2 mr-2 btn btn-primary btn-lg btn-block', onClick: function onClick() {
                    return handleUpdate();
                  } },
                'Simpan'
              )
            )
          )
        )
      )
    );
  } else {
    return React.createElement(
      'div',
      null,
      'Loade'
    );
  }
}
var domContainer = document.querySelector('#datatable');
ReactDOM.render(React.createElement(Views, null), domContainer);