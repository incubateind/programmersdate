import 'dart:math';

import 'package:geolocator/geolocator.dart';

import '../models/place.dart';

double distanceCalculator(
    {PlaceLocation firstplace, PlaceLocation secondplace}) {
  double lat1 = firstplace.latitude;
  double long1 = firstplace.longitude;
  double lat2 = secondplace.latitude;
  double long2 = secondplace.longitude;

  double _difflong = long2 - long1;
  double _distance = 6377.830272 *
      acos((sin(lat1) * sin(lat2)) + (cos(lat1) * cos(lat2) * cos(_difflong)));
  return _distance;
}

Future distanceCalculate1(PlaceLocation location) async {
  try {
    Position _user = await Geolocator()
        .getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
    print("${_user.longitude}");
    return await Geolocator().distanceBetween(
        _user.latitude, _user.longitude, location.latitude, location.longitude);
  } catch (error) {
    throw (error);
  }
}
