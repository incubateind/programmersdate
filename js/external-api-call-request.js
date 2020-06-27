var Hospital = require("./Hospital_Class");

// var lat = 12.96643;
// var lng = 77.5871;
var API_KEY = "lUG-hi8SVgFZqxxI8-TGTndI2Vxiu-19ihGvzANv2WU";
var lim = 10;
// var URL = "https://discover.search.hereapi.com/v1/discover?at=12.96643,77.5871&q=hospital&apikey=" + API_KEY + "&limit=5"

const request = require('request');

callExtApi = (lat, lng) => {
    return new Promise(resolve => {
        var URL = "https://discover.search.hereapi.com/v1/discover?at=" + lat + "," + lng + "&q=hospital&apikey=" + API_KEY + "&limit=" + lim;
        // URL = encodeURIComponent(URL);
        request(URL, { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
                // console.log(body.url);
                // console.log(body.explanation);
                // console.log(JSON.parse(JSON.stringify(body)));
                var result = JSON.parse(JSON.stringify(body));
                var arr = [];
                for(var i=0;i<result.items.length;i++){
                    var obj = result.items[i];    
                    arr.push(new Hospital(obj.title, obj.id, obj.resultType, obj.address.label, obj.address.countryCode, obj.address.countryName, obj.address.state, obj.address.county, obj.address.city, obj.address.district, obj.address.postalCode, obj.position.lat, obj.position.lng, obj.distance));
                }
                // console.log(arr);
                // return result;
                resolve(arr);
            });
    });
}

module.exports = callExtApi;