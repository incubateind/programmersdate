import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';
import 'dart:async';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:google_maps_webservice/places.dart';

final places =
    new GoogleMapsPlaces(apiKey: "AIzaSyCWjbyGKi7BoRJslCL03ppjWjTjd_uBhZ0");

Position _currentPosition;

class MainHomeBody extends StatefulWidget {
  @override
  _MainHomeBodyState createState() => _MainHomeBodyState();
}

class _MainHomeBodyState extends State<MainHomeBody> {
  Position position;

  Stream registeredHospitals =
      Firestore.instance.collection('registeredHospitals').snapshots();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(top: 50, left: 10, right: 10, bottom: 10),
      child: Card(
        color: Colors.grey[200],
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15.0),
        ),
        child: ListView(
          children: <Widget>[
            Center(
                child: Padding(
              padding: EdgeInsets.all(20),
              child: Text(
                "Home page",
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
              ),
            )),
            Divider(
              thickness: 4.0,
              indent: 50,
              endIndent: 50,
            ),
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.75,
              // width: MediaQuery.of(context).size.width * 0.5,
              child: StreamBuilder(
                stream: registeredHospitals,
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    return ListView.separated(
                      itemCount: snapshot.data.documents.length,
                      padding: EdgeInsets.only(bottom: 15.0),
                      itemBuilder: (context, index) {
                        return Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: snapshot.data.documents[index].data['beds']
                                      .toString() ==
                                  "0"
                              ? Card(
                                  color: Colors.amber,
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(15.0),
                                  ),
                                  child: ListTile(
                                    title: Text(
                                      "${snapshot.data.documents[index].data['name'].toString()}",
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold),
                                    ),
                                    subtitle: Text(
                                        "Beds available: ${snapshot.data.documents[index].data['beds'].toString()}\nFacilities: ${snapshot.data.documents[index].data['facilities'].toString()}"),
                                  ),
                                )
                              : Card(
                                  color: Colors.green,
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(15.0),
                                  ),
                                  child: ListTile(
                                    title: Text(
                                      "${snapshot.data.documents[index].data['name'].toString()}",
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold),
                                    ),
                                    subtitle: Text(
                                        "Beds available: ${snapshot.data.documents[index].data['beds'].toString()}\nFacilities: ${snapshot.data.documents[index].data['facilities'].toString()}"),
                                  ),
                                ),
                          // Card(
                          //   color: Colors.white,
                          //   shape: RoundedRectangleBorder(
                          //     borderRadius: BorderRadius.circular(15.0),
                          //   ),
                          //   child: ListTile(
                          //     title: Text(
                          //         "${snapshot.data.documents[index].data['name'].toString()}",style: TextStyle(fontWeight: FontWeight.bold),),
                          //     subtitle: Text("Beds available: ${snapshot.data.documents[index].data['beds'].toString()}\nFacilities: ${snapshot.data.documents[index].data['facilities'].toString()}"),

                          //   ),
                          // ),
                        );
                      },
                      separatorBuilder: (context, index) {
                        return SizedBox(
                          width: 10,
                          height: 10,
                        );
                      },
                    );
                  } else if (snapshot.hasError) {
                    return Text("Error here: " + snapshot.error);
                  } else if (!snapshot.hasData) {
                    return CircularProgressIndicator();
                  }
                  return Text("Empty snapshot?");
                },
              ),
            )
          ],
        ),
      ),
    );
  }
}
