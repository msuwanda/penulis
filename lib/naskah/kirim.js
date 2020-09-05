function simpanData() {
    var form = new FormData(document.querySelector('#formdata'));
    var url = './upload.php';
    var request = new Request(url, {
        method: 'POST',
        body: form
    });
    var str = d.getId("dekse").value;
    if (str.length > 150) {
        fetch(request).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);

            Swal.fire({
                title: data.title,
                text: data.pesan,
                type: data.kelas,
                confirmButtonColor: '#2651be',
                confirmButtonText: 'OK'
            }).then(function (result) {
                if (data.error == 0) {
                    window.location.href = "/400000";
                } else {
                    console.log(data.error);
                }
            });
        });
    }
}

var data = { appkey: getKey() };
var url = '/api/kategori.php';
fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data)
}).then(function (res) {
    return res.json();
}).then(function (data) {
    var opt = "";
    data.forEach(function (raw) {
        opt += "<option value='" + raw.k_id + "'>" + raw.k_name + "</option>";
    });
    d.getId("kategori").innerHTML = opt;
}).catch(function (error) {
    return console.error('Error:', error);
});