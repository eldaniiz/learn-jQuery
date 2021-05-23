$(document).ready(function () {

    $("#h1").hover(function (){
        $(this).hide();
    });

    $("#h2").click(function () {
        $(this).hide();
    });

    $("#h3").dblclick(function (){
       $(this).hide();
    });

    $("#h4").mouseout(function () {
       $(this).hide();
    });
});
