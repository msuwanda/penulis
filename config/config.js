//defined javascript
var d = document;
d.getId = d.getElementById;
d.getName = d.getElementsByName;
d.getClasses = d.getElementsByClassName;
d.getTag = d.getElementsByTagName ;

var getParam = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.hash.substring(1);
  var vars = query.split("-");
  for (var i=0;i<vars.length;i++) {

    query_string[i] = decodeURIComponent(vars[i]);
  }
  return query_string;
}();
function getScript(source, callback) {
  var el = document.createElement('script') ;
  el.onload = callback ;
  el.src    = source ;

  document.body.appendChild(el);
}
function getInput(param,filter,apiKey) {
  var formElement = document.querySelector(param) ;
  var formData = new FormData(formElement);
  var object =[];
  let i = 0 ;
  formData.forEach(function(value, key) {
      object[i] =  {name:key,value: value} ;
      i++
  } );
  var data = {data: object ,filter: filter,appkey: apiKey}
  return JSON.stringify(data);
}
function getKey() {
  return "@?t-E#EC2JUge-^yxC!P97uvQ7K#eM8hrUj=PW=EV_x49_-Xxqu@TWt?FUtv" ;
}