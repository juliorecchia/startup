define(['jquery'],function($) {

var API = {
        accessToken: 'BQCLbZBJhQA3c-q5h9gUztmXqq42rArSMWlkAXkbuLKJWrNdGSfbbggd_AC3qw34gj1XVyiNLFf8muuwURCh0lVFDhpK4en8ZjIwid1u80CsJfn_uUntZf-zlm2N9-_FRZltpiD9D1UDVQ&token_type=Bearer&expires_in=3600',
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

        localStorage.setItem('getData', JSON.stringify(data));

        var obj = JSON.parse(localStorage.getItem('getData'));
        console.log(obj);
        console.log(obj.tracks.items.length);
    },
    return {
        get : function(ht)
        {
            req(API.base + ht)
        },
    }

});
