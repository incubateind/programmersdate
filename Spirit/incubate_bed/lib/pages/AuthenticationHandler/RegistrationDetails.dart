import 'dart:async';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class UserData {
  String _name;
  String _bedCount;
  List<dynamic> _facilities;

  UserData(this._name, this._bedCount, this._facilities);

  // Getters
  String get name => _name;
  String get beds => _bedCount;
  List<dynamic> get facilities => _facilities;

  // Setters
  set name(String newName) {
    this._name = newName;
  }

  set beds(String newCount) {
    this._bedCount = newCount;
  }

  set facilities(List<dynamic> newList) {
    this._facilities = newList;
  }

  Map<String, dynamic> toMap() {
    Map<String, dynamic> userData = {
      'name': _name,
      'beds': _bedCount,
      'facilities': _facilities
    };
    return userData;
  }
}

class FirestoreService {
  final CollectionReference registeredHospitals =
      Firestore.instance.collection('registeredHospitals');

  static Stream registeredStream(String uid) => Firestore.instance
      .collection('registeredHospitals')
      .document('$uid')
      .snapshots();

  static DocumentReference registeredDocument(String uid) =>
      Firestore.instance.collection('registeredHospitals').document('$uid');

  Future<void> updateNewUser(UserData user, String uid) async =>
      await registeredDocument(uid).setData(user.toMap(), merge: true);

  static Future<void> deleteUser(String uid) async =>
      await registeredDocument(uid).delete();
}
