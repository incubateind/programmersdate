<?php
$cn=mysqli_connect("localhost","root","","tab");
if(!$cn)
{
die('could not connect');
}

$countq="SELECT COUNT(*) from hospital";
$c=mysqli_query($cn,$countq);
$result=mysqli_fetch_array($c);
$count=$result[0];
echo $count;


var count= <?php echo $count ?>;
	  

?>
<html>
<head>
   <title>Simple HERE Map</title>
   <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />
   <style>
      html, body { border: 0; margin: 0; padding: 0; }
      #map { height: 100vh; width: 100vw; }
   </style>
</head>
<body>
   <div id="map"></div>
   <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js"></script>
   <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js"></script>
   <script src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"></script>
   <script src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"></script>
   <script>
 /*  function addMarkersToMap(map) {
	for($i=0;$i<$count;$i++)
	{
	$ptsfq="SELECT lat,lng from hospital limit 1 offset $i";
	$ptsfc=mysqli_query($cn,$ptsfq);
	$ptsf=mysqli_fetch_array($ptsfc);
	$flat=$ptsf[0];
	$flng=$ptsf[1];
	}

    var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
    map.addObject(parisMarker);

    var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
    map.addObject(romeMarker);

    var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
    map.addObject(berlinMarker);

    var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
    map.addObject(madridMarker);

    var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
    map.addObject(londonMarker);
}*/

      const platform = new H.service.Platform({ apikey: 'ohvNqgjM7TkOiccpNljdm1FVnACIemW-ZoNLqjAYOsU' });
      const defaultLayers = platform.createDefaultLayers();
      const map = new H.Map(document.getElementById('map'),
         defaultLayers.vector.normal.map, {
         center: { lat: 21.122956, lng: 79.064923 }, 
         zoom: 16,
         pixelRatio: window.devicePixelRatio || 1
      });
      window.addEventListener('resize', () => map.getViewPort().resize());
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);
	  // Now use the map as required...
	  window.onload = function () {
	  addMarkersToMap(map);
	  }
	  

   </script>
</body>
</html>