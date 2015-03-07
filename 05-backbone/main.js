var  list_movie={
	Models:{},
	Collections:{},
	Views:{},
	Templates:{}
}
list_movie.Models.Movie=Backbone.Model.extend({});

list_movie.Collections.Movies = Backbone.Collection.extend({
    model: list_movie.Models.Movie,
    url: "data/list.json",
    initialize: function(){
        console.log("Movies initialize")
    }
});

list_movie.Router = Backbone.Router.extend({
    routes: {
        "": "http://localhost:8080/05-backbone/Topic5.html" 
    },
  
    defaultRoute: function () {
        console.log("defaultRoute");
        var movies = new list_movie.Collections.Movies()
        movies.fetch();
        console.log(movies.length)
    }
})
 
var appRouter = new list_movie.Router();
Backbone.history.start();