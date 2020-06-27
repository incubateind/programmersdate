import 'package:flutter/material.dart';
import '../Home.dart';
import '../Maps.dart';
import '../Profile.dart';

// class Variables {
  var bottomNavItem1 =
      BottomNavigationBarItem(icon: Icon(Icons.home), title: Text("Home"),);

  var bottomNavItem2 =
      BottomNavigationBarItem(icon: Icon(Icons.map), title: Text("Maps"));

  var bottomNavItem3 =
      BottomNavigationBarItem(icon: Icon(Icons.person), title: Text("Profile"));

  final tabs = [
    Home(),
    Maps(),
    Profile(),
  ];

  // final tabs = [
  //   home,
  //   maps,
  //   profile,
  // ];
// }
