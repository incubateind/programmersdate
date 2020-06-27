var mongoose = require("mongoose");

var esriSchema = new mongoose.Schema({
	X:Number,
	Y:Number,
	FID:Number,
	HOSPITAL_NAME:String,
	HOSPITAL_TYPE:String,
	HQ_ADDRESS:String,
	HQ_CITY:String,
	HQ_STATE:String,
	HQ_ZIP_CODE:Number,
	COUNTY_NAME:String,
	STATE_NAME:String,
	FIPS:Number,
	NUM_LICENSED_BEDS:Number,
	NUM_STAFFED_BEDS:Number,
	NUM_ICU_BEDS:Number,
	ADULT_ICU_BEDS:Number,
	PEDI_ICU_BEDS:String,
	BED_UTILIZATION:Number,
	Potential_Increase_In_Bed_Capac:Number,
	AVG_VENTILATOR_USAGE:Number
},{collection:"esri"});

module.exports = mongoose.model("Esri",esriSchema)
