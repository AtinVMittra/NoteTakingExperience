$(document).ready(function(){
	var users = [
  		{username: 'Bob', fullname: 'Bob Russel'},
  		{username: 'Kimmy', fullname: 'Kimmy Schmidt'},
  		{username: 'Jimmy', fullname: 'Jimmy Fallon'},
	];

	 var NTDL = [
  		{type: 'note'},
  		{type: 'task'},
  		{type: 'decision'},
  		{type: 'learning'},
	]; 

	var workspaces = [
		{space: 'sales'},
		{space: 'marketing'},
		{space: 'business development'},
		{space: 'product'},
	];

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

	$('#first').suggest('/', {
  		data: NTDL,
  		map: function(user) {
    		return {
      			value: user.type,
      			text: user.type
		    }
  		}
	});

	$('#second').suggest('@', {
  		data: users,
  		map: function(user) {
    		return {
      			value: user.username,
      			text: user.username
		    }
  		}
	});


	$('#third').suggest('#', {
  		data: workspaces,
  		map: function(user) {
    		return {
      			value: user.space,
      			text: user.space
		    }
  		}
	});

});

