function getPrice() {
    var data,
        tmpl = _.template(document.getElementById('price-template').innerHTML),
        result,
        xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "https://nails-api.herokuapp.com/api/price", false);
    xhttp.send();

    result = tmpl({ data });
    document.getElementById("price").innerHTML = result;
}

$(document).ready(function(){
    getPrice();
    setInterval(getPrice,60000);
});
