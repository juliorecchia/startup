requirejs.config({
    baseUrl: 'Modules',
    paths: { // relative to the baseUrl
        jquery: '../libs/jquery',
    }
});

requirejs(['jquery', 'prueba'], //'Module1', 'searchMod'],

    function search($,prueba) {

        //var s = '/v1/search?q=' + searchMod + '&type=artist';
        var id = search.get(id);
        console.log(id);
        
    }
);
