function simpanData() {
  var url = '/api/produk/create.php';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: getInput("#formdata",{},"A-UcsCjA69sqD"),
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
        window.location.href = "/200000";
      }
      else {
        console.log(data.error);
      }
    })
  )) // end then result
  .catch(error => console.error('Error:', error));
}
