 /*$(function() {

             $('#bsearch').click(function() {
                 var srh = $('#search-box').val();
                 var ini = srh.replace(/ /g, '%20');
                 console.log(ini);
                 var API = {
                         accessToken: 'BQDnO_0krNSHYcXPL3aiJdWfhYdttROq2svqfALOi86vGrnJmD5uaHQ0ZBBzzRspHyGOED_eMRVsSIHQxCREA6PJQYBnqVIUq8waw_XUHaSBIOPP28wkUXoitZ_guWutd-7DMBD-iXJUrw&token_type=Bearer&expires_in=3600',
                         base: 'https://api.spotify.com'
                     },
                     req = function(endpoint) {
                         $.ajax({
                             url: endpoint,
                             method: 'GET',
                             headers: {
                                 'Authorization': 'Bearer ' + API.accessToken
                             }
                         }).done(res);
                     },
                     res = function(data) {
                         console.log(data);
                     };
                 req(API.base + '/v1/search?q='+ ini +'&type=artist');
             });
});*/
