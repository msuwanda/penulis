$(document).ready(function() {
  var dt = $('#datatable').dataTable( {
    "bProcessing": true,
    "bServerSide": true,
    "ordering": false,
    "sAjaxSource": "__URL_VIEWS__",
    "columns":[
__COL_ROWS__
            {  "width": "24%" ,"defaultContent": "<button class='btn btn-info edit'>sunting</button> <button class='btn btn-warning rinci'>Detail</button> <button class='btn btn-danger hapus'>Hapus</button>"},
           ]
  } );

  $('#datatable tbody').on( 'click', 'tr button.edit ', function () {
      var data = dt.api().row( $(this).parents('tr') ).data();
      window.location.href = "/__R_UPDATE__#"+ data[0] +"";
  } );
  $('#datatable tbody').on( 'click', 'tr button.rinci ', function () {
      var data = dt.api().row( $(this).parents('tr') ).data();
      window.location.href = "/__R_RINCI__#"+ data[0] +"";
  } );
  $('#datatable tbody').on( 'click', 'tr button.hapus ', function () {
      var data = dt.api().row( $(this).parents('tr') ).data();
      hapusData(data[0]) ;
  } );
  jQuery("#datatable_filter").html('<button type="button" data-toggle="collapse" href="#collapseExample123" class="btn-transition btn btn-outline-primary"><i class="fa fa-bars"></i> &#160 search &#160</button>');
	// On each draw, loop over the `detailRows` array and show any child rows
__FLM_ROWS__

  function hapusData(param) {
    Swal.fire({
      title: 'Anda yakin?',
      text: "Anda tidak akan dapat mengembalikan ini!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        var data = {filter: [{name: "__ROW_ID__" ,value: param}],appkey: "__API_KEY__"} ;
        var url = '__URL_HAPUS__';
        fetch(url, {
          method: 'POST', // or 'PUT'
          body:  JSON.stringify(data),
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
              location.reload(true);
            }
          })
        )) // end then result
        .catch(error => console.error('Error:', error));
      }
    })
  }
} );
