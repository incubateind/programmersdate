var express = require("express");
var body_parser = require("body-parser");
var ext_api = require("./external-api-call-request")
var endpoints = express();

endpoints.use(function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
endpoints.use(body_parser.json());
endpoints.use(body_parser.urlencoded({extended: "false"}));

endpoints.get("/location/:lat/:lng", function(request, response){
    ext_api(request.params.lat, request.params.lng).then(data => {
        response.status(200).send(JSON.stringify(data));
    });
    // console.log(data);
    
    
});

endpoints.listen(3000, function(){
    console.log("API Server listening...");
});