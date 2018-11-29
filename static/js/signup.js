$(function(){
	$('#btnsignup').click(function(){
		
		var user = $('#inputUname').val();
		var email=  $('#inputEmail').val();
		var password=$('#inputPassword').val();
		var cpassword=$('#inputConfirmPassword').val();
		$.ajax({
			url: '/signup',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});
