function simpanData() {
  var url = '/api/produk/create.php';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: getInput("#formdata", {}, "A-UcsCjA69sqD")
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
        console.log(data.error);
      }
    });
  }) // end then result
  .catch(function (error) {
    return console.error('Error:', error);
  });
}