$(document).ready(function()
{
 	$('.hidden').show(3000,function()
 	{
 		$('.alias').focus();
	});
/*
	$('#boton').click(function()
	{
		var name= $('.alias').val();
		var url="http://bootcamp.aws.af.cm/welcome/"+name.toString();
		$.ajax(url,
		{
			type= 'GET', 
			dataType: 'json',
			success: function(resp)
			{
				$('.hidden p').text(resp.response);
				$('.alias').val("");
			}
		});
	});*/
});