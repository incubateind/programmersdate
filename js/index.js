/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
//function moveMapToBerlin(map){
//  map.setCenter({lat:52.5159, lng:13.3777});
//  map.setZoom(14);
//}

var latitude = 52.5159;
var longitude = 13.3777;

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: 'lUG-hi8SVgFZqxxI8-TGTndI2Vxiu-19ihGvzANv2WU'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
	var requestURL = "http://localhost:3000/location/" + latitude + "/" + longitude;
	
	$.ajax({
		url: requestURL,
		type: 'GET',
		crossDomain: true,
		contentType: "text/json",
		success: function (data) { 
			generateMap(map, JSON.parse(data));
		},
		error: function (xhr, status, error) { 
			console.log(error);
		}
	});
}

function generateMap(map, mapData) {
//	console.log(mapData);
	plotCurrentLocation(latitude, longitude);
	mapData.forEach(plotPoint);
}

function plotCurrentLocation(latitude, longitude) {
	var locationMarker = new H.map.Marker({ lat: latitude, lng: longitude });
	
	// Add the marker to the map
	map.addObject(locationMarker);
	
	// Add event listener to the marker
	locationMarker.addEventListener('tap', function(evt) {
		// Create an info bubble object at a specific geographic location
		var bubble = new H.ui.InfoBubble({ lng: longitude, lat: latitude }, {
                content: ''
             });
		bubble.setContent(
			"<div><h5>You are here!</h5></div>"
		);
		
		// Add info bubble to the UI
		ui.addBubble(bubble);
	});
}

function plotPoint(point) {
	console.log(point);
	var id = point.id;
	var lat = point.lat;
	var lng = point.lng;
	var name = point.title;
	var city = point.city;
	var county = point.county;
	var country = point.countryName;
	var postalCode = point.postalCode;
	var distance = (point.distance/1000).toFixed(2);
	
	var locationMarker = new H.map.Marker({ lat: lat, lng: lng });
	
	// Add the marker to the map
	map.addObject(locationMarker);
	
	// Add event listener to the marker
	locationMarker.addEventListener('tap', function(evt) {
		// Create an info bubble object at a specific geographic location
		var bubble = new H.ui.InfoBubble({ lng: lng, lat: lat }, {
                content: ''
             });
		bubble.setContent(
			"<div style='height: 130px; overflow: auto; width: 270px;'><h5>Name: " + name + "</h5><p class='mb-0'>City: " + city + "</p><p class='mb-0'>County: " + county + "</p><p class='mb-0'>Postal Code: " + postalCode + "</p><p class='mb-0'>Distance: " + distance + " km</p><a href='#'>Know More...</a></div>"
		);
		
		// Add info bubble to the UI
		ui.addBubble(bubble);
	});
}