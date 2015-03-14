requirejs.config({
    baseUrl: 'Modules',
    paths: { // relative to the baseUrl
        jquery: 'http://code.jquery.com/jquery-2.1.3',
        }
});
requirejs(['jquery', 'Module1', 'Module2'], 
	function($,module1, module2) {

		require.ready(function(){
			function search(){
				var s = Module2.get(ini);
				var t = Module1.get(data);

				req(API.base + '/v1/search?q=' + ini + '&type=artist');
			};
		});

    
});
