 define(['Module1'],function(){


$('#bsearch').click(function() {
                var srh = $('#search-box').val();
				var ini = srh.replace(/ /g, '%20');
return ini;
});
});
