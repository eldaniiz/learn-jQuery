$(document).ready(function() {

    $("#btn1").click(function() {
       $("#test1").text("i'm changed man");
    });

    $("#btn2").click(function() {
        $("#test2").html("<h2>My bold text changed to header</h2>");
    });

    $("#btn3").click(function() {
        $("#test3").val("That is new value of input");
    });
});

