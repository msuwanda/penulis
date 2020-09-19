function simpanData() {
    const url = '/api/naskah/update.php';
    const request = new Request(url, {
        method: 'POST',
        body: getInput('#formdata', [{ name: "ns_id", value: getParam[0] }],'')
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
                    window.location.href = "/300100#" + getParam[0];
                }
                else {
                    console.log(data.error);
                }
            })
        })
}