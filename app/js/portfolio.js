$(function(){

  $.getJSON("../data/portfolio.json", function(jsonData) {
    var pTemplate = $('<div class=dcell></div><img /></div>');
    $.each(jsonData, function () {
      var itemImgUrl = this.imgUrl;
      pTemplate.clone().appendTo("#portfolioList").children()
        .filter('img').attr('src', itemImgUrl).end();
      console.log(pTemplate);


      //var portfolioImgWrapper = "<div class='card-image'>" + portfolioImg + "</div>";
      //$("<img>").attr({
      //  "src": './images/portfolio/' + this.imgUrl,
      //  "class": "materialboxed",
      //  "alt": ""
      //}).appendTo("#portfolioList");

    });
  });

});






//(function () {

  //var xmlhttp = new XMLHttpRequest();
  //xmlhttp.onreadystatechange = function () {
  //  if (this.readyState == 4 && this.status == 200) {
  //    jsonData = JSON.parse(this.responseText);
  //    jsonData.forEach(function (item) {
  //
  //      //var portfolioImgWrapper = "<div class='card-image'>" + portfolioImg + "</div>";
  //      $("<img>").attr({
  //        "src": './images/portfolio/' + item.imgUrl,
  //        "class": "materialboxed",
  //        "alt": ""
  //      }).appendTo("#portfolioList");
  //    });
  //  }
  //};
  //xmlhttp.open("GET", "../data/portfolio.json", true);
  //xmlhttp.send();



//})();
