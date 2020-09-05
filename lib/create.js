function simpanData() {
  var url = '/__URL_TAMBAH__';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: getInput("#formdata", {}, "__API_KEY__")
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