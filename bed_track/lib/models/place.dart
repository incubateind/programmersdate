import 'package:flutter/material.dart';

class PlaceLocation {
  double latitude;
  double longitude;
  final String address;
  
  PlaceLocation({@required this.latitude, @required this.longitude, this.address});
}