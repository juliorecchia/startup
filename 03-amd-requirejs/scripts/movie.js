define('module_movie',["main"/*,"module_director"*/],function(main)
{			
			movie =function(titulo,genero)
			{
				this.titulo=titulo;
				this.genero=genero;

				var titulo;
				var genero;
				var director;
				
				this.set=function(titulo,genero)
				{ 
					this.titulo=titulo;
					this.genero=genero;
				}
				this.get=function()
				{
				console.log("Titulo pelicula: "+this.titulo+", Genero: "+this.genero);
				}
				/*this.addDirector=function(director)
				{
		 			//codigo para agregar director a la peli
 					
				}	*/				
			}
			return movie;
});