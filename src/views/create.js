function simpanData() {
  var url = '/__URL_TAMBAH__';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: getInput("#formdata",{},"__API_KEY__"),
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
