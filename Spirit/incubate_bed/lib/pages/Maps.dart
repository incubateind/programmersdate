import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';
import 'dart:async';
import 'MapsMain/MainMapBody.dart';

// final places =
//     GoogleMapsPlaces(apiKey: "AIzaSyBR7oFZTwyjW9xipPg2EGaREJiJ_M89vQ4");

Completer<GoogleMapController> _controller = Completer();
Position _currentPosition;

class Maps extends StatefulWidget {
  @override
  _MapsState createState() => _MapsState();
}

class _MapsState extends State<Maps> {
  void initState() {
    super.initState();
    _getLocation();
    moveCamera(_currentPosition);
  }

  Future<void> _getLocation() async {
    Position position = await Geolocator()
        .getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
    setState(() {
      _currentPosition = position;
    });

    GoogleMapController mapController = await _controller.future;

    mapController.animateCamera(CameraUpdate.newCameraPosition(CameraPosition(
      target: LatLng(_currentPosition.latitude, _currentPosition.longitude),
      zoom: 17.0,
    )));
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Stack(
          children: <Widget>[
            //Main maps body
            MainMapBody(),
            //Custom defined move camera button
            Positioned(
              bottom: 120,
              left: MediaQuery.of(context).size.width - 80,
              child: RawMaterialButton(
                onPressed: () {
                  _getLocation();
                  moveCamera(_currentPosition);
                },
                child: Icon(
                  Icons.gps_fixed,
                ),
                shape: CircleBorder(),
                elevation: 4.0,
                fillColor: Colors.red,
                padding: EdgeInsets.all(15.0),
              ),
            ),
          ],
        ),
      ),
    );
  }
}


