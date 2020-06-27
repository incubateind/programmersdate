import 'dart:convert';

import 'package:bedtrack/database/data.dart';
import 'package:bedtrack/models/place.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/cupertino.dart';

class HospitalDataProvider with ChangeNotifier {
  List<DataBaseTemplate> _hospitaldata = [];

  Future<void> fetchData() async {
    const url = 'https://incubateind-hack.firebaseio.com/hospitals.json';
    try {
      final _response = await http.get(url);
      final _extractedcategory =
          jsonDecode(_response.body) as Map<String, dynamic>;
//      print(_extractedcategory);
      List<DataBaseTemplate> _loadeddata = [];
      _extractedcategory.forEach((key, value) {
        _loadeddata.add(DataBaseTemplate(
          id: value['id'],
          hospitalName: key,
          imageURL: value['imageUrl'],
          phoneNumber: value['phoneNumber'],
          bedNumber: value['bedsAvailable'],
          location: PlaceLocation(
            latitude: value['latitude'],
            longitude: value['longitude'],
            address: value['address'],
          ),
        ));
      });
      _hospitaldata = _loadeddata;
      notifyListeners();
    } catch (error) {
      throw (error);
    }
  }

  List<DataBaseTemplate> get datalist {
    return [..._hospitaldata];
  }
}
