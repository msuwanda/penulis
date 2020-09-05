var data = { filter: [{ name: "__ROW_ID__", value: getParam[0] }], appkey: "__API_KEY__" };
var url = '__URL_VIEWS__';
fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data)
}).then(function (res) {
  return res.json();
}).then(function (data) {
  var re = data[0];
  __RIN_ROWS__;
}) // end then result
.catch(function (error) {
  return console.error('Error:', error);
});

function simpanData() {
  var url = '__URL_TAMBAH__';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: getInput("#formdata", [{ name: "__ROW_ID__", value: getParam[0] }], "__API_KEY__")
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
        window.location.href = "/__RRL_TAMBAH__";
      } else {
        console.log("gagal");
      }
    });
  }) // end then result
  .catch(function (error) {
    return console.error('Error:', error);
  });
}