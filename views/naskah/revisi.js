function simpanData() {
    const form = new FormData(document.querySelector('#formdata'));
    form.append('nsid', getParam[0]);
    const url = './revisi.php'
    const request = new Request(url, {
        method: 'POST',
        body: form
    });
    fetch(request)
        .then(response => response.json())
        .then(data => { console.log(data);
             
            Swal.fire({
                title: data.title,
                text: data.pesan,
                type: data.kelas,
                confirmButtonColor: '#2651be',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (data.error == 0) {
                    window.location.href = "/400100#" + getParam[0];
                }
                else {
                    console.log(data.error);
                }
            })
        })
}