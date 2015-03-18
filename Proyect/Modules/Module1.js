define(['jquery'], function($) {

    var API = {
            accessToken: 'BQCZpl4fkp7j5HZjyIpYHbqaxTV23mWipqkgOqWQ5WePs8s6AvIJgo8qgIH3TtNcvUbQJU7sn6YTsqFDCyCouLNHNaGpYopGg816aLBFPax_hsdSuWHqn8kOmelKsgvOLnTZtuZlhpk8gg&token_type=Bearer&expires_in=3600',
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

            localStorage.setItem('data', $('#').val());
            id = ((data.artists.items[0].id));
            console.log(data.artists.items);
            
        },

    get = function(){
        console.log(id);
    }
    req(API.base + '/v1/search?q=' + ini + '&type=artist');
};
return 


}});
