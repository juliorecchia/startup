
// movie model
var  movie= Backbone.Model.extend(
    {
        defaults: function()
        {
            return{

                title: "No name Movie",
                director: "No name Director",
                actors: "No actors defined",
                gender: "No gender defined",
                score:"No score defined"
            };
        },

        initialize: function(){
            if(!this.get("title")){
                this.set({"title": this.defaults.title});
            }
        },

        clear: function(){
            this.destroy();
        }        
    });

//collection
var list_movie = Backbone.Collection.extend({
    model: movie,
    })
var movies= new list_movie;












list_movie.Router = Backbone.Router.extend({
    routes: {
        "": "http://localhost:8080/05-backbone/Topic5.html" 
    },
  
    defaultRoute: function () {
  2      console.log("defaultRoute");
        var movies = new list_movie.Collections.Movies()
        movies.fetch();
        console.log(movies.length)
    }
})
 
var appRouter = new list_movie.Router();
Backbone.history.start();