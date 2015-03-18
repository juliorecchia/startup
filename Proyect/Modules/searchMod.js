 define(['jquery'], function($) {

     $(function() {
         $('#bsearch').click(function() {
             var srh = $('#search-box').val();
             //console.log(srh);
             var ini = srh.replace(/ /g, '%20');
             //console.log(ini);
             return ini;
         });
     });
 });
