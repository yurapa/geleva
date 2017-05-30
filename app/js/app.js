(function(){

    //carousel for home page
    $('.carousel').carousel();

    //mobile menu
    $(".button-collapse").sideNav();

})();


function ajaxGoToJsonFile(fileUrl, usedTemplate, includeTo) {
    var data,
        tmpl = _.template(document.getElementById(usedTemplate).innerHTML),
        result,
        xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
        }
    };
    xhr.open('POST', fileUrl, false);
    xhr.send();

    result = tmpl({data});
    document.getElementById(includeTo).innerHTML = result;
}
