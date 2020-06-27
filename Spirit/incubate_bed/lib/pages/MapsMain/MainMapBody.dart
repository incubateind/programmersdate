import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';
import 'dart:async';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:google_maps_webservice/places.dart';

Completer<GoogleMapController> _controller = Completer();
Marker marker;
Position _currentPosition;
Set<Marker> createdMarkers;

final places =
    new GoogleMapsPlaces(apiKey: "AIzaSyCWjbyGKi7BoRJslCL03ppjWjTjd_uBhZ0");

Future<void> moveCamera(Position pos) async {
  GoogleMapController mapController = await _controller.future;

  mapController.animateCamera(CameraUpdate.newCameraPosition(CameraPosition(
    target: LatLng(pos.latitude, pos.longitude),
    zoom: 17.0,
  )));
}

class MainMapBody extends StatefulWidget {
  @override
  _MainMapBodyState createState() => _MainMapBodyState();
}

class _MainMapBodyState extends State<MainMapBody> {
  GoogleMapController mapController;
  Position position;
  Widget _child;

  @override
  void initState() {
    getLocation();

    Future.delayed(Duration(seconds: 2)).then((value) {
      getCurrentLocation();
    });
    super.initState();
  }

  List<Placemark> placemark;

  void getAddress(String address, int j, String name) async {
    setState(() {
      _child = mapWidget();
    });
    print("Address of hospital $j " + address);
    placemark = await Geolocator().placemarkFromAddress(address);
    print("Name " + placemark[0].locality);

    initMarker(placemark[0], j.toString(), name,
        BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueRed));

    await Firestore.instance
        .collection('registeredHospitals')
        .getDocuments()
        .then((doc) {
      if (doc.documents.isNotEmpty) {
        for (int i = 0; i < doc.documents.length; ++i) {
          if (doc.documents[i].data['name'].toString() == name) {
            if (doc.documents[i].data['beds'] == '0') {
              initFireMarker(
                  placemark[0],
                  j.toString(),
                  name,
                  BitmapDescriptor.defaultMarkerWithHue(
                      BitmapDescriptor.hueYellow),
                  "Beds available: ${doc.documents[i].data['beds']} ;  Facilities: ${doc.documents[i].data['facilities'].toString()}");
            } else if (doc.documents[i].data['beds'] != '0') {
              initFireMarker(
                  placemark[0],
                  j.toString(),
                  name,
                  BitmapDescriptor.defaultMarkerWithHue(
                      BitmapDescriptor.hueGreen),
                  "Beds available: ${doc.documents[i].data['beds']} ;  Facilities: ${doc.documents[i].data['facilities'].toString()}");
            }
          }
        }
      }
    });

    setState(() {
      _child = mapWidget();
    });
  }

  void getLocation() async {
    Position res = await Geolocator().getCurrentPosition(
        locationPermissionLevel: GeolocationPermission.locationAlways,
        desiredAccuracy: LocationAccuracy.high);
    setState(() {
      position = res;
      _currentPosition = res;
    });
  }

  void getCurrentLocation() async {
    Position res = await Geolocator().getCurrentPosition(
        locationPermissionLevel: GeolocationPermission.locationAlways,
        desiredAccuracy: LocationAccuracy.high);
    setState(() {
      position = res;
      _currentPosition = res;
    });

    var _lat = position.latitude;
    var _lng = position.longitude;

    PlacesSearchResponse response = await places.searchByText("hospitals",
        location: Location(_lat, _lng), radius: 5000, opennow: true);
    // response.results[0].
    for (int i = 0; i < response.results.length; i++) {
      print("Name $i: " + response.results[i].name);
      await getAddress(
          response.results[i].name +
              ", " +
              response.results[i].formattedAddress,
          i,
          response.results[i].name);
    }
    if (response.hasNoResults ||
        response.isDenied ||
        response.isInvalid ||
        response.isNotFound) print("Here err: " + response.errorMessage);
  }

  Widget mapWidget() {
    return GoogleMap(
      mapType: MapType.normal,
      markers: Set<Marker>.of(markers.values),
      myLocationEnabled: true,
      myLocationButtonEnabled: false,
      buildingsEnabled: false,
      compassEnabled: true,
      indoorViewEnabled: false,
      // liteModeEnabled: true,
      trafficEnabled: false,

      initialCameraPosition: CameraPosition(
          target: LatLng(position.latitude, position.longitude), zoom: 15.0),
      onMapCreated: (GoogleMapController controller) {
        _controller.complete(controller);
      },
    );
  }

  Map<MarkerId, Marker> markers = <MarkerId, Marker>{};

  void initMarker(request, requestId, name, BitmapDescriptor icon) {
    var markerIdVal = requestId;
    final MarkerId markerId = MarkerId(markerIdVal);
    final Marker marker = Marker(
        markerId: markerId,
        position: LatLng(request.position.latitude, request.position.longitude),
        infoWindow: InfoWindow(
            title: "$name, ${request.subLocality}",
            snippet: "(${request.position})"),
        draggable: false,
        icon: icon);

    setState(() {
      markers[markerId] = marker;
      print(markerId);
    });
  }

  void initFireMarker(
      request, requestId, name, BitmapDescriptor icon, String aval) {
    var markerIdVal = requestId;
    final MarkerId markerId = MarkerId(markerIdVal);
    final Marker marker = Marker(
        markerId: markerId,
        position: LatLng(request.position.latitude, request.position.longitude),
        infoWindow: InfoWindow(
            title: "$name, ${request.subLocality}, ${request.locality}",
            snippet: aval),
        draggable: false,
        icon: icon);

    setState(() {
      markers[markerId] = marker;
      print(markerId);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(body: _child);
  }
}
