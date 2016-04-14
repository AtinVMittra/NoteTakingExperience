$(document).ready(function(){
    $("button").mouseup(function(){
        $(this).css("background-color", "#FFFFFF");
	});

    $("button").mousedown(function(){
        $(this).css("background-color", "#299AAB");
    });   

    $("#note").click(function(){
        $("#first").val("/note");
    });   

    $("#task").click(function(){
        $("#first").val("/task");
    });  

    $("#decision").click(function(){
        $("#first").val("/decision");
    });  

    $("#learning").click(function(){
        $("#first").val("/learning");
    }); 

});

