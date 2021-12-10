console.log("Assignment 7")

var bText = document.getElementById("highlight-text");

$(document).ready(function(){
    $("highlight-text").mouseover(function(){
        $("highlight-text").css("background-color", "yellow");
    });

    $("highlight-text").mouseout(function(){
        $("highlight-text").css("background-color", "white");
    });
});


