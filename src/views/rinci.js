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
