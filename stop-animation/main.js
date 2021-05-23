$(document).ready(function () {

    $(".content-header").click(function() {
        $(".content-header").animate({
            width: '500px',
            height: '800px'
        }, 3000).animate({
            fontSize: '30px'
        }, 3000);
    });

    $(".stop-animate").click(function () {
        $(".content-header").stop(true);
    });

});
