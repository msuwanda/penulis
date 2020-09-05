var data = {filter: [{name: "__ROW_ID__" ,value: getParam[0]}],appkey: "__API_KEY__"} ;
var url = '__URL_VIEWS__';
fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data),
}).then(res => res.json())
.then(function(data) {
  const re = data[0] ;
  __RIN_ROWS__
}) // end then result
.catch(error => console.error('Error:', error));

function simpanData() {
  var url = '__URL_TAMBAH__';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: getInput("#formdata",[{name: "__ROW_ID__",value: getParam[0]}],"__API_KEY__"),
  }).then(res => res.json())
  .then(data => (
    Swal.fire({
      title: data.title,
      text: data.pesan,
      type: data.kelas,
      confirmButtonColor: '#2651be',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (data.error == 0 ) {
        window.location.href = "/__RRL_TAMBAH__";
      }
      else {
        console.log("gagal");
      }
    })
  )) // end then result
  .catch(error => console.error('Error:', error));
}
