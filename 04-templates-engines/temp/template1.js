
var source=$("entry-template").html();

var template=Handlebars.compile(source);

var profile={[
	firstName: "Julieta";
	lastName: "Orecchia";
	dir: "comechingones 174";
	exp:"NADA";
	]}
Handlebars.registerHelper('name',function (firstName,lastName) {

	lastName=Handlebars.Utils.escapeExpression(lastName);
	firstName=Handlebars.Utils.escapeExpression(firstName);

	var result= firstName+ " "+lastName;
	return new Handlebars.SafeString(result); 	
})


//var html= template(profile);

