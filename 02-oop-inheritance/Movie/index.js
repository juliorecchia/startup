
function Movie(titulo,genero,año,duracion){
	this.titulo=titulo;
	this.genero=genero;
	this.año=año;
	this.duracion=duracion;
}
Movie.prototype.play = function() {
	alert("la pelicula"+this.titulo+"se esta reproduciendo.")
};
Movie.prototype.stop=function(){};
Movie.prototype.set=function(titulo,genero,año,duracion){
	titulo=titulo;
	genero=genero;
	año=año;
	duracion=duracion;


};
Movie.prototype.get=function(){
	return("Titulo pelicula: "+this.titulo+"Genero:"+this.genero)
};

var movie1=new Movie();
var movie2=new Movie();


