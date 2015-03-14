$function () {
	// model

	var Track=Backbone.Model.extend({
		defaults:{
			name:
			artis:
			duration:
			album:
		}
	});

	//Collection

	var PlayList=Backbone.Collection.extend({
		model: Track,
	});

	var List = new PlayList;

	// Views

	var PlayListView = Backbone.View.extend({
		render: function(){
			var  source = $(#Template).html();
			var temp=Hanlebars.compile(source);
			var html = temp (this.collection.toJSON());
			this.$el.html(html);
		}
		initialize: function(){
			this.collection.on('add',this.render,this);
		}
	});

	var PlayList = new PlayList();
	var PlayListView = new PlayListView({
		collection: PlayList;
	});


}