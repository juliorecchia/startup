
$(document).ready(function(){

 $('.hidden').show(3000,function(){
 	$('.alias').focus();

 	var $obj=('a');
		$('.alias').bind("myCustomEvent", function(){
		$( this ).text( $obj );
		});

		$( '.boton' ).click(function() {
		$( '.alias' ).trigger( "myCustomEvent");
		});
 	}); 
 
});
 

