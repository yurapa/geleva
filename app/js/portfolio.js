(function () {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      dataJson = JSON.parse(this.responseText);
      dataJson.forEach(function (item) {

        //var portfolioImgWrapper = "<div class='card-image'>" + portfolioImg + "</div>";
        $("<img>").attr({
          "src": './images/portfolio/' + item.imgUrl,
          "class": "materialboxed",
          "alt": ""
        }).appendTo("#portfolioList");
      });
    }
  };
  xmlhttp.open("GET", "../data/portfolio.json", true);
  xmlhttp.send();

})();
