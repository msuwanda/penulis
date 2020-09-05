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

  var _R$useState5 = R.useState(true),
      _R$useState6 = _slicedToArray(_R$useState5, 2),
      Back = _R$useState6[0],
      setBack = _R$useState6[1];

  var _R$useState7 = R.useState(true),
      _R$useState8 = _slicedToArray(_R$useState7, 2),
      Next = _R$useState8[0],
      setNext = _R$useState8[1];

  var _R$useState9 = R.useState([]),
      _R$useState10 = _slicedToArray(_R$useState9, 2),
      Search = _R$useState10[0],
      setSearch = _R$useState10[1];

  var _R$useState11 = R.useState([]),
      _R$useState12 = _slicedToArray(_R$useState11, 2),
      Search2 = _R$useState12[0],
      setSearch2 = _R$useState12[1];

  var _R$useState13 = R.useState([]),
      _R$useState14 = _slicedToArray(_R$useState13, 2),
      Search3 = _R$useState14[0],
      setSearch3 = _R$useState14[1];

  R.useEffect(function () {
    var data = { appkey: "A-gxuUm4fcbfU", pages: "" + count, search: [{ name: "kln_id", value: "" + Search }, { name: "kln_nama", value: "" + Search2 }, { name: "kln_alamat", value: "" + Search3 }] };
    var url = 'http://penerbit.com/view_s.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setDatas(data);
      console.log(data);
      if (count !== 0) {
        setBack(false);
      } else {
        setBack(true);
      }
      if (data.length < 10) {
        setNext(true);
      } else {
        setNext(false);
      }
    }).catch(function (error) {
      return console.error('Error:', error);
    });
  }, [count, Search, Search2, Search3]);
  function handleSearch(param) {
    setSearch(param);
    setCount(0);
  }function handleSearch2(param) {
    setSearch2(param);
    setCount(0);
  }function handleSearch3(param) {
    setSearch3(param);
    setCount(0);
  }
  var items = Datas.map(function (data) {
    return React.createElement(
      "tr",
      { key: data.kln_id, className: "transition-table" },
      React.createElement(
        "td",
        null,
        data.kln_id
      ),
      "da",
      React.createElement(
        "td",
        null,
        data.kln_nama
      ),
      React.createElement(
        "td",
        null,
        data.kln_npwp
      ),
      React.createElement(
        "td",
        null,
        React.createElement(
          "ul",
          { className: "pageaction" },
          React.createElement(
            "button",
            { className: "page-link-prev", onClick: function onClick() {
                return window.location.href = '/200020#' + ("" + data.kln_id);
              } },
            "Rinci"
          ),
          React.createElement(
            "button",
            { className: "page-link-next", onClick: function onClick() {
                return window.location.href = '/200030#' + ("" + data.kln_id);
              } },
            "Update"
          )
        )
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "table",
      { className: "table" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "App id"
          ),
          React.createElement(
            "th",
            null,
            "App Nama"
          ),
          React.createElement(
            "th",
            null,
            "App Com"
          ),
          React.createElement(
            "th",
            null,
            "Aksi"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        items
      ),
      React.createElement(
        "tfoot",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            React.createElement("input", { className: "form-control", onKeyUp: function onKeyUp(event) {
                return handleSearch(event.target.value);
              }, placeholder: "Search" })
          ),
          React.createElement(
            "th",
            null,
            React.createElement("input", { className: "form-control", onKeyUp: function onKeyUp(event) {
                return handleSearch2(event.target.value);
              }, placeholder: "Search" })
          ),
          React.createElement(
            "th",
            null,
            React.createElement("input", { className: "form-control", onKeyUp: function onKeyUp(event) {
                return handleSearch3(event.target.value);
              }, placeholder: "Search" })
          ),
          React.createElement("th", null)
        )
      )
    ),
    React.createElement(
      "nav",
      { "aria-label": "Page navigation example" },
      React.createElement(
        "ul",
        { className: "pagination" },
        React.createElement(
          "button",
          { className: "page-link-prev", onClick: function onClick() {
              return setCount(count - 10);
            }, disabled: Back },
          " Previous"
        ),
        React.createElement(
          "button",
          { className: "page-link-next", onClick: function onClick() {
              return setCount(count + 10);
            }, disabled: Next },
          " Next"
        )
      )
    )
  );
}
var domContainer = document.querySelector('#datatable');
ReactDOM.render(React.createElement(Views, null), domContainer);