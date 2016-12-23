(function(){

  //carousel for home page
  $('.carousel').carousel();

  //mobile menu
  $(".button-collapse").sideNav();

  $.getJSON("../data/portfolio.json", function(json) {
    console.log(json);
  });

})();
