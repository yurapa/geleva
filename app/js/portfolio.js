var data,
  xhr = new XMLHttpRequest();

xhr.open('GET', '/data/portfolio.json', false);
xhr.send();

if (xhr.status != 200) {
  console.log( 'Error: ' + xhr.status + ' -> ' + xhr.statusText );
} else {
  data = xhr.responseText;
}

data = JSON.parse(data);

var tmpl = _.template(document.getElementById('list-template').innerHTML);
var result = tmpl({data});

document.getElementById('portfolio').innerHTML = result;
