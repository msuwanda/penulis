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

  R.useEffect(function () {
    var data = { appkey: getKey(), filter: [{ name: "ns_id", value: getParam[0] }] };
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
    }).catch(function (error) {
      return console.error('Error:', error);
    });
  }, [count]);
  function handleUpdate(param, status) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Ganti status menjadi " + param,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then(function (result) {
      if (result.value) {
        var data = { filter: [{ name: "ns_id", value: getParam[0] }], data: [{ name: "ns_status", value: status }] };
        var url = '/api/naskah/update.php';
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
              setCount(1);
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
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col-md-12' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-12' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Judul'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                Datas.ns_judul
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Penulis'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                Datas.ns_penulis
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Kategori'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                Datas.k_name
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Audience'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                Datas.ns_audience
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Harga'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Datas.harga)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-12' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Sinopsis'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                Datas.ns_dekripsi
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-12' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Toko.ly'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                Datas.tokoly
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-12' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Tokopedia'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                Datas.tokopedia
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-12' },
            React.createElement(
              'div',
              { className: 'data-full' },
              React.createElement(
                'div',
                { className: 'data-title' },
                'Bukalapak'
              ),
              React.createElement(
                'div',
                { className: 'data-body' },
                Datas.bukalapak
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'position-relative row form-group' },
              React.createElement(
                'div',
                { className: 'col-sm-12' },
                React.createElement(
                  'button',
                  { onClick: function onClick() {
                      return window.location.href = "/400200#" + getParam[0];
                    }, className: 'mt-4 mr-2 btn btn-success btn-lg btn-block' },
                  'Update'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'position-relative row form-group' },
              React.createElement(
                'div',
                { className: 'col-sm-12' },
                React.createElement(
                  'button',
                  { onClick: function onClick() {
                      return window.location.href = "/400200#" + getParam[0];
                    }, className: 'mt-4 mr-2 btn btn-success btn-lg btn-block' },
                  'Update photo produk'
                )
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