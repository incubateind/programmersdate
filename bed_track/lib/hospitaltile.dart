import 'package:bedtrack/models/place.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';

class DataTile extends StatefulWidget {
  final String id;
  final int bedNumber;
  final String hospitalName;
  final PlaceLocation location;
  final String imageURL;
  final String phoneNumber;
  final double distance;
  DataTile({
    this.id,
    this.hospitalName,
    this.imageURL,
    this.location,
    this.phoneNumber,
    this.bedNumber,
    this.distance,
  });
  @override
  _DataTileState createState() => _DataTileState();
}

class _DataTileState extends State<DataTile> {
  String id;
  int bedNumber;
  String hospitalName;
  PlaceLocation location;
  String imageURL;
  String phoneNumber;
  double distance;

  void getData() {
//    id: widget.id;
    bedNumber = widget.bedNumber;
    hospitalName = widget.hospitalName;
    location = widget.location;
    imageURL = widget.imageURL;
    phoneNumber = widget.phoneNumber;
    distance = widget.distance;
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
    var height = MediaQuery.of(context).size.height;
    var width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: Center(
        child: Container(
            padding: EdgeInsets.all(0),
            margin: EdgeInsets.symmetric(horizontal: 10, vertical: 20),
            height: 0.9 * height,
            width: 0.9 * width,
            decoration: BoxDecoration(
              color: Colors.grey[850],
              borderRadius: BorderRadius.circular(20),
              boxShadow: [
                BoxShadow(
                  blurRadius: 15.0,
                  offset: Offset(4.0, 4.0),
                  color: Colors.black,
                  spreadRadius: 1.0,
                ),
              ],
            ),
            child: Container(
              child: Expanded(
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Container(
                      child: SingleChildScrollView(
                        child: Column(
                          children: <Widget>[
                            Hero(
                              tag: hospitalName,
                              child: Container(
                                height: height * 0.25,
                                width: double.infinity,
                                decoration: BoxDecoration(
                                    image: DecorationImage(
                                      image: NetworkImage(imageURL),
                                      fit: BoxFit.cover,
                                    ),
                                    borderRadius: BorderRadius.circular(10)),
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.all(10),
                              child: Text(
                                hospitalName,
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 30,
                                  fontWeight: FontWeight.w500,
                                ),
                                softWrap: true,
                              ),
                            ),
                            SizedBox(
                              width: 20,
                            ),
                            Container(
                              margin: EdgeInsets.symmetric(
                                  vertical: 10, horizontal: 10),
                              child: Text(
                                "Beds available = ${bedNumber.toString()}",
                                style: TextStyle(
                                  color: bedNumber == 0
                                      ? Colors.red
                                      : bedNumber <= 10
                                          ? Colors.yellow
                                          : Colors.green,
                                  fontSize: 20,
                                ),
                              ),
                            ),
                            Container(
                              margin: EdgeInsets.symmetric(
                                  vertical: 10, horizontal: 10),
                              child: Text(
                                "${location.address}",
                                style: TextStyle(
                                    color: Colors.white, fontSize: 20),
                              ),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: <Widget>[
                                Icon(
                                  Icons.phone,
                                  color: Colors.white,
                                  size: 20,
                                ),
                                Container(
                                  margin: EdgeInsets.symmetric(
                                      vertical: 10, horizontal: 10),
                                  child: Text(
                                    phoneNumber.toString(),
                                    style: TextStyle(
                                        color: Colors.white, fontSize: 20),
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: <Widget>[
                                Text(
                                  "${distance == null ? 0 : distance.ceil() / 1000}",
                                  style: TextStyle(
                                      color: Colors.white, fontSize: 20),
                                ),
                                SizedBox(
                                  width: 10,
                                ),
                                Icon(
                                  Icons.location_on,
                                  color: Colors.red.withOpacity(0.6),
                                  size: 20,
                                )
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.all(20),
                      child: FloatingActionButton(
                        elevation: 0,
                        highlightElevation: 0,
                        backgroundColor: Colors.grey,
                        child: Icon(
                          Icons.arrow_back_ios,
                          color: Colors.black,
                        ),
                        onPressed: () {
                          Navigator.pop(context);
                        },
                      ),
                    ),
                  ],
                ),
              ),
            )),
      ),
    );
  }
}
