var host = "http://localhost:7777"
var ajax = {
    getData: function(url){
        return  fetch(host+url,{
            method:'GET',
            credentials:'include',
            headers:{
                'Accept':"application/json",
            },
            mode:'no-cors'
        }).then(function(response) {
            return response.json()
        })
  
    },
    postData:function(url, data) {
        // Default options are marked with *
        return fetch(host+url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
        .then(function(response) {return response.json()}) // parses response to JSON
    }
} 