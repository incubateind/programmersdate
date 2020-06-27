import 'package:bedtrack/models/place.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:geolocator/geolocator.dart';

import 'hospitaltile.dart';

class DisplayTile extends StatefulWidget {
  final String id;
  final int bedNumber;
  final String hospitalName;
  final PlaceLocation location;
  final String imageURL;
  final String phoneNumber;

  DisplayTile({
    this.id,
    this.hospitalName,
    this.imageURL,
    this.location,
    this.phoneNumber,
    this.bedNumber,
  });

  @override
  _DisplayTileState createState() => _DisplayTileState();
}

class _DisplayTileState extends State<DisplayTile> {
  String id;
  int bedNumber;
  String hospitalName;
  PlaceLocation location;
  String imageURL;
  String phoneNumber;
  double distance;

  void getData() {
    id = widget.id;
    bedNumber = widget.bedNumber;
    hospitalName = widget.hospitalName;
    location = widget.location;
    imageURL = widget.imageURL;
    phoneNumber = widget.phoneNumber;
  }

  Future<void> distanceCalculate(PlaceLocation location) async {
    try {
      Position _user = await Geolocator()
          .getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
      print("${_user.longitude} + ${_user.latitude}");
      distance = await Geolocator().distanceBetween(_user.latitude,
          _user.longitude, location.latitude, location.longitude);
    } catch (error) {
      throw (error);
    }
  }

  @override
  void initState() {
    getData();
    this.distanceCalculate(location);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      key: ValueKey(id),
      child: Container(
        margin: EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.grey[850],
          borderRadius: BorderRadius.circular(10),
          boxShadow: [
            BoxShadow(
              blurRadius: 15.0,
              offset: Offset(4.0, 4.0),
              color: Colors.grey[900],
              spreadRadius: 1.0,
            ),
            BoxShadow(
              blurRadius: 13.0,
              offset: Offset(-4.0, -4.0),
              color: Colors.grey[800],
              spreadRadius: 1.0,
            )
          ],
        ),
        child: Column(
          children: <Widget>[
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(10),
                  topRight: Radius.circular(10),
                ),
                gradient: LinearGradient(
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                  colors: [
                    Colors.black.withOpacity(0.6),
                    Colors.black.withOpacity(0)
                  ],
                ),
              ),
              child: Hero(
                tag: "$hospitalName",
                child: Container(
                  height: 100,
                  width: 200,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    image: DecorationImage(
                      image: NetworkImage(imageURL),
                      fit: BoxFit.fill,
                    ),
                  ),
                ),
              ),
            ),
            Container(
              height: 40,
              margin: EdgeInsets.symmetric(vertical: 5),
              child: Center(
                child: Text(
                  hospitalName,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.w500,
                  ),
                  overflow: TextOverflow.fade,
                ),
              ),
            ),
            Row(
              children: <Widget>[
                Icon(
                  Icons.location_on,
                  color: Colors.white70,
                ),
                Text(
                  "${distance == null ? 0 : distance.ceil() / 1000} km",
                  style: TextStyle(color: Colors.white70),
                ),
              ],
            ),
          ],
        ),
      ),
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute<void>(
            builder: (BuildContext context) {
              return DataTile(
                id: id,
                imageURL: imageURL,
                location: location,
                bedNumber: bedNumber,
                hospitalName: hospitalName,
                phoneNumber: phoneNumber,
                distance: distance,
              );
            },
          ),
        );
      },
    );
  }
}
