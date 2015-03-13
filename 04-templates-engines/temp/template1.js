// template Handlebars
$(document).ready(function(){

	var source=$("#entry-template").html();
	var template=Handlebars.compile(source);

		$.getJSON("data.json",function(data)
		{
			Handlebars.registerHelper('fullName',function (person) 
			{
				return person.firstName+" "+person.lastName;	
			});	
				$('body').append(template(data));
		});
	
	//var data = $.getJSON({ 
	//		url: 'data.json'
	//	});
	
	/*data.done(function(profile)
	{
		var ctx = {};
		ctx.data = profile;
		var html= template(ctx);
		
		Handlebars.registerHelper('fullName',function (person) 
		{
			return person.firstName+" "+person.lastName;	
		});	
	
		
		$('body').append(template(html));
	});
*/
	
	

});



