var express = require("express");
var body_parser = require("body-parser");
var mongoose = require("mongoose");
var ext_api = require("./external-api-call-request")
var endpoints = express();

mongoose.set('useFindAndModify', false);

var db = mongoose.connect("mongodb://localhost/map_api");

var Hospital = require("./../models/Hospital");

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
        // console.log(data);
        var promises = [];
        for(var i=0;i<data.length;i++){
            var temp_promise = new Promise((resolve, reject) => {
                var hospital = new Hospital(data[i]);
                Hospital.findOneAndUpdate({hospital_id: hospital.hospital_id}, hospital, {new: true, upsert: true}, (err, updated_hospital) => {
                    // if(updated_hospital == null){
                    //     hospital.save(function(err, saved){
                    //         if(err){
                    //             response.status(500).send({error: "Hospital couldn't be saved!"});
                    //         }
                    //     });
                    // }
                    if(1 == 2)
                        reject();
                    resolve();
                });
            });
            promises.push(temp_promise);
        }
        Promise.all(promises).then(arg => {
            response.status(200).send(JSON.stringify(data));
            // resolve(data);  
        });
    });
    // console.log(data);
});

endpoints.post("/set_marker", function(request, response){
    var hospitalWithoutId = {
      icu_marker: request.body.icu_marker,
      covid_marker: request.body.covid_marker,
      cardiology_marker: request.body.cardiology_marker,
      neurology_marker: request.body.neurology_marker,
      xray_marker: request.body.xray_marker,
      mri_marker: request.body.mri_marker
    };
    Hospital.findOneAndUpdate({hospital_id: request.body.hospital_id}, hospitalWithoutId, {new: true}, (err, task) => {
      // console.log(task);
      if(err)
        response.status(500).send({error: "Setting hospital-bed marker failed!"});
      else
        response.status(200).send(task);
    });
  });

endpoints.listen(3000, function(){
    console.log("API Server listening...");
});