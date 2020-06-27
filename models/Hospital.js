var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Hospital = new Schema({
    title: String,
    hospital_id: String,
    resultType: String,
    label: String,
    countryCode: String,
    countryName: String,
    state: String,
    county: String,
    city: String,
    district: String,
    postalCode: Number,
    lat: Number,
    lng: Number,
    distance: Number,
    icu: {type: Number, default: 0},
    icu_marker: {type: Boolean, default: false},
    covid: {type: Number, default: 0},
    covid_marker: {type: Boolean, default: false},
    cardiology: {type: Number, default: 0},
    cardiology_marker: {type: Boolean, default: false},
    neurology: {type: Number, default: 0},
    neurology_marker: {type: Boolean, default: false},
    xray: {type: Number, default: 0},
    xray_marker: {type: Boolean, default: false},
    mri: {type: Number, default: 0},
    mri_marker: {type: Boolean, default: false}
});

module.exports = mongoose.model("Hospital", Hospital);