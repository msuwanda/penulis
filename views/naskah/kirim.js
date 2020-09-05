function simpanData() {
    const form = new FormData(document.querySelector('#formdata'));
    const url = './upload.php'
    const request = new Request(url, {
        method: 'POST',
        body: form
    });
    var str = d.getId("dekse").value ;
    if (str.length > 150) { 
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
                    window.location.href = "/400000";
                }
                else {
                    console.log(data.error);
                }
            })
        })
    }
}

const data = { appkey: getKey() };
const url = '/api/kategori.php';
fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data),
}).then(res => res.json()).then((data) => {
    var opt = "" ;
    data.forEach(raw => {
        opt += "<option value='"+ raw.k_id +"'>" + raw.k_name + "</option>" ;

    });
    d.getId("kategori").innerHTML = opt ;
}).catch(error => console.error('Error:', error));