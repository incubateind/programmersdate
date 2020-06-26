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




	  

?>
<html>
<head>
   <title>Track a Bed</title>
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
   function addMarkersToMap(map) {	
	 var h1 = new H.map.Marker({lat:19.98627000, lng: 73.77989930});
    map.addObject(h1);

    var h2 = new H.map.Marker({lat:19.98776220, lng:73.78086490});
    map.addObject(h2);

    var h3 = new H.map.Marker({lat:19.98944600, lng: 73.78592890});
    map.addObject(h3);

    var h4 = new H.map.Marker({lat:19.99688540, lng:73.77600970});
    map.addObject(h4); 

    var h5 = new H.map.Marker({lat:19.99163410, lng:73.78325930});
    map.addObject(h5); 

    var h6 = new H.map.Marker({lat:19.99163380, lng:73.77669320});
    map.addObject(h6); 
	}

      const platform = new H.service.Platform({ apikey: 'ohvNqgjM7TkOiccpNljdm1FVnACIemW-ZoNLqjAYOsU' });
      const defaultLayers = platform.createDefaultLayers();
      const map = new H.Map(document.getElementById('map'),
         defaultLayers.vector.normal.map, {
         center: { lat: 19.99237010, lng: 73.78427850 }, 
         zoom: 15,
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
   <?php
function getDistanceBetweenPointsNew($latitude1, $longitude1, $latitude2, $longitude2, $unit = 'Mi') {
    $theta = $longitude1 - $longitude2;
    $distance = sin(deg2rad($latitude1)) * sin(deg2rad($latitude2)) + cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta));

    $distance = acos($distance); 
    $distance = rad2deg($distance); 
    $distance = $distance * 60 * 1.1515;

    switch($unit) 
    { 
        case 'Mi': break;
        case 'Km' : $distance = $distance * 1.609344; 
    }

    return (round($distance,2)); 
}

 
$ilat=19.99237010;
$ilng=73.78427850;
//function showbeds(){
for($i=0;$i<$count;$i++)
{
	$ptsfq="SELECT lat,lng from hospital limit 1 offset $i";
	$ptsfc=mysqli_query($cn,$ptsfq);
	$ptsf=mysqli_fetch_array($ptsfc);
	$flat=$ptsf[0];
	$flng=$ptsf[1];
	$coldistance = getDistanceBetweenPointsNew($ilat,$ilng,$flat,$flng,'Km');
	/*echo $coldistance;
	echo "<br>";
	echo "<br>";*/
	if($coldistance<1)
	{
		$rnameq="SELECT name,TotalBeds,Patients from hospital limit 1 offset $i";
		$rnamec=mysqli_query($cn,$rnameq);
		$rname=mysqli_fetch_array($rnamec);
		$rn=$rname[0];
		$rtb=$rname[1];
		$rp=$rname[2];
		$availablebeds=$rtb-$rp;
		echo $i+1;
	    echo ") ";
		echo $rn;
		echo "<br>";
		echo " Available Beds: ";
		echo $availablebeds;
		echo "<br>";
		echo "<br>";
	}
	//$updatedistance="UPDATE report_$tablename SET distance=$coldistance WHERE lat=$flat and lng=$flng";
	//$ud=mysqli_query($cn,$updatedistance);
}
//}
//showbeds();

   
  
   //echo "<button onclick='showbeds()'>Click me</button>";
   
   
   ?>
   
   
</body>
</html>