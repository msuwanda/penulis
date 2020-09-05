var data = { filter: [{ name: "__ROW_ID__", value: getParam[0] }], appkey: "__API_KEY__" };
var url = '__URL_VIEWS__';
fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data)
}).then(function (res) {
  return res.json();
}).then(function (data) {
  var re = data[0];
  __RIN_ROWS__;
}) // end then result
.catch(function (error) {
  return console.error('Error:', error);
});