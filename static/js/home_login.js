$(document).ready(function(){
	GetArticle();
	
});

function GetArticle() {
    	
    $.ajax({
        url: '/showuserhome',
        type: 'GET',
        success: function(res) {
            console.log(res);
        },
        error: function(error) {
            console.log(error);
        }
    });
});	
