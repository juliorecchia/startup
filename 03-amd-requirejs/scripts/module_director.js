define("module_director",function(module_movie)
		{
				director =function(name)
				{
					this.name=name;

					var name;
					this.quotes=[];
				
					this.set=function(name)
					{ 
						this.name=name;
					}
					this.get=function()
					{
					console.log("Director: "+this.name);
					}
					this.speak=function()
					{
						console.log(this.name+ " says: " +this.qoutes.toString());
					}
					this.addQuotes=function(quote)
					{
						this.qoutes.push(quote);
						return this;
					}					
				}
				addDirectorQuotes=function()
					{
						director.addQuotes(this.quote); 
					}	
					return module_director;

		});