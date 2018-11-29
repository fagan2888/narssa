$(document).ready(function() {
	var arr = [], user = "";
	$("#logInBtn").click( function(){
		LogInValidation();
	});
	$("#registerBtn").click( function(){
		RegisterValidation();
	});
	$("#preferencesBtn").click( function(){
		LoadHomeRegisterPage();
	});
	$("#newsContainer figure").click( function(){
		LoadArticle(this.figure);
	});
});

function LogInValidation(){
	if($("#email").val() == "vata695@gmail.com"){
		if($("#password").val() == "vata123"){
			$("#password").removeClass("border-color-red");
			$("#email").removeClass("border-color-red");
			window.location = "/home/vaidehi/FlaskApp/templates/home_login.html";
		}
		else{
			$("#password").addClass("border-color-red");
		}
	}
	else if($("#email").val() == "avengers123@gmail.com"){
		if($("#password").val() == "carteragent"){
			$("#password").removeClass("border-color-red");
			$("#email").removeClass("border-color-red");
			window.location = "file:///C:/Users/HP/Desktop/project/home_login.html";
		}
		else{
			$("#password").addClass("border-color-red");
		}
	}
	else {
		$("#email").addClass("border-color-red");
		$("#password").addClass("border-color-red");
	}
}
function RegisterValidation(){
	if($("#regPassword").val() == $("#regConfirmPassword").val() && $("#regName").val() != "" && $("#regEmail").val() != ""){
		window.location = "file:///C:/Users/HP/Desktop/project/preferences.html";
	}
}
function LoadHomeRegisterPage(){
	var htmlChunk = "";
    $(':checkbox:checked').each(function(i){
		htmlChunk += '	<li role="presentation"><a href="#">' + $(this).val() + '</a></li>';
    });
	
	window.location = "file:///C:/Users/HP/Desktop/project/home_login.html";
	$("#genreTabs ul").html(htmlChunk);
}
function LoadArticle(){
	window.location = "file:///C:/Users/HP/Desktop/project/article_1.html"
}
