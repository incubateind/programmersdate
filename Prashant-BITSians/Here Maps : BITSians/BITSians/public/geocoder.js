var geocoder = platform.getSearchService();

function geocoderSearch(){
    var loc = prompt("Enter your location");
    if(loc==null)
        alert("Null is not accepted");
    
    let geocodeParam ={
        q: loc,
        limit: 5, //Search results limitation
        //Coutry limitation here
        in: 'countryCode:USA',
                
    }
    function onResult(result){
        console.log(result);
        if(result.items.length>0){
            for(var i =0 ; i < result.items.length ; i++){
            let mrk = new H.map.Marker(result.items[i].position);
             map.addObject(mrk);
             mrk.setData(result.items[i].title);
        }
        document.getElementById("status").innerHTML = result.items.length + " Results Found";
    }
            
        
    }
    if(loc!="")
        geocoder.geocode(geocodeParam,onResult, alert);
        
        
}

function geocodeAndSearch(){
    var rad = prompt("Define Search Radius (in meters) : ");
    let geocodeParam ={
        q: 'hospitals',
        in: 'circle:'+ map.getCenter().lat +',' + map.getCenter().lng +';r='+rad
                
    }
    function onResult(result){
        console.log(result);
        if(result.items.length>0){
            for(var i =0 ; i < result.items.length ; i++){
                var mkr = new H.map.Marker(result.items[i].position);
                map.addObject(mkr);
                mkr.setData(result.items[i].title + ' (' + result.items[i].distance +' m)');
            }
            
        }
        ui.addBubble(new H.ui.InfoBubble(result.items[0].position,{
            content: result.items[0].title + ' (' + result.items[0].distance +' m)'
        }));
        document.getElementById("status").innerHTML = result.items.length + " Hospitals Found in " + rad + " meters";        
        //info bubble
        
       
    }

    
    geocoder.discover(geocodeParam,onResult, alert);
        
        
}

function geocodeBrowse(){
    var cat = prompt("Mention category id(s) to be included, seperated by commas : " + '\n' + "800-8000-0000 : Hospital or Health Care Facility" + '\n' + "800-8000-0154 : Dentist-Dental Office" + '\n' +"800-8000-0155 : Family-General Practice Physicians" + '\n' + "800-8000-0156 : Psychiatric Institute" + '\n' + "800-8000-0157 : Nursing Home" + '\n' + "800-8000-0158 : Medical Services-Clinics" + '\n' + "800-8000-0159 : Hospital" + '\n' + "800-8000-0161 : Optical" + '\n' + "800-8000-0162 : Veterinarian" + '\n' + "800-8000-0325 : Hospital Emergency Room" + '\n' + "800-8000-0340 : Therapist" + '\n' + "800-8000-0341 : Chiropractor" + '\n' + "800-8000-0367 : Blood Bank");
    let geocodeParam ={
        name: 'hospitals',
        at: map.getCenter().lat +',' + map.getCenter().lng, //use this for facilities
        categories: cat, 
        limit: 5
                
    }
    function onResult(result){
        console.log(result);
        if(result.items.length>0){
            for(var i =0 ; i < result.items.length ; i++){
                var mkrk = new H.map.Marker(result.items[i].position);
                map.addObject(mkrk);
                mkrk.setData(result.items[i].title + ' (' + result.items[i].distance +' m)');
            }
            
        }
        
       ui.addBubble(new H.ui.InfoBubble(result.items[0].position,{
            content: result.items[0].title + ' (' + result.items[0].distance +' m)'
        }));
        document.getElementById("status").innerHTML = result.items.length + " Suitable Medical Units Found Around You";
        
    }

    
    
    geocoder.browse(geocodeParam,onResult, alert);
}

function revGeocode(lat, lon){
    var sol = lat + "," + lon;
    let geocodeParam ={
        at: sol
                
    }

    function onResult(result){
        console.log(result);
        if(result.items.length>0){
            document.getElementById("status").innerHTML = result.items[0].title;
        }else if(result.items.length==0){
            document.getElementById("status").innerHTML = "Here Maps : BITSians";
        }
    }
   
    geocoder.reverseGeocode(geocodeParam,onResult, alert);

}
