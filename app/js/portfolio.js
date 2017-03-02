$(function(){
    $.getJSON("../data/portfolio.json", function(portfolioData) {
        var wrapper = $("<div>").addClass("row portfolioList");

        portfolioData.forEach(function (item) {
            var gridBox = $("<div>").addClass("col s12 m3"),
                cardWrapper = $("<div>").addClass("card hoverable"),
                imageWrapper = $("<div>").addClass("card-image"),
                image = $("<img />").addClass("materialboxed"),
                cardContent = $("<div>").addClass("card-content"),
                tag = $("<div>").addClass("chip"),
                masterPhoto = $("<img />");

            // Add image
            $( image ).attr({
                src: "/images/portfolio/" + item.imgUrl,
                alt: item.tag
            }).appendTo( imageWrapper );
            cardWrapper.append(imageWrapper);

            // Add content, tags
            cardContent.text(item.tag);

            // Add information about master
            tag.text(item.author.authorName)
            $( masterPhoto ).attr({
              src: "/images/master/" + item.author.authorPhoto,
              alt: item.author.authorName
            }).appendTo( tag );
            cardContent.append(tag);

            cardWrapper.append(cardContent);
            gridBox.append(cardWrapper);
            wrapper.append(gridBox);
        });
        $("#portfolio .container").append( $(wrapper) );

    });
});
