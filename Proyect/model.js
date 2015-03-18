require.config({
    baseUrl: 'js',
    paths: {
        jquery: '..libs/jquery',
    }
});
requirejs(['jquery', 'prueba'],
        $function() {

            // model
            var Track = Backbone.Model.extend({
                defaults: function() {
                    return {
                        name: "No name",
                        artist: "No artist",
                        genres: "No genres",
                        album: "No album".
                    };
                },

                initialize: function() {
                    if (!this.get("track")) {
                        this.set({
                            "track": this.defaults.track
                        });
                    }
                },
                clear: function() {
                    this.destroy();
                }
            });

            //Collection

            var PlayList = Backbone.Collection.extend({
                model: Track,
            });

            var List = new PlayList;

            // Views

            PlayListView = {};

            PlayList = Backbone.View.extend({

                        events: {
                            'click.bsearch': 'ClickSearch',
                        },
                        initialize: function() {
                            PlayList.bind('add', this.addList);
                            this.collection = PlayList;
                        },
                        clickSearch = function() {
                            $('#bsearch').click(function() {
                                        var srh = $('#search-box').val();
                                        var ini = srh.replace(/ /g, '%20');
                                        var obj = '/v1/search?q' + ini + '&type=track';
                                        var data = JSON.parse(localStorage.getItem('getData'));
                                        for (var i = 0; i < obj.tracks.items.length; i++) {

                                            var tra = new track;
                                            tra.set({
                                                track: obj.tracks.items[i].name,
                                                artist: obj.tracks.items[i].artists[1].name,
                                                duration: obj.tracks.items[i].duration_ms,
                                                album: obj.tracks.items[i].album.name
                                            });
                                            this.collection.add(tra);
                                        };
                                        localStorage.removeItem('getData');
                                        $('#bsearch').val('');
                                    },
                                    addList: function(tra) {
                                        var view = new musicView({
                                                model: mus)
                                        };
                                        $("#search_list").append(view.render().el);
                                        $("#search_list").listview('refresh');
                                    }                               
                                    // Falta definir musicView ..                               

                        });
