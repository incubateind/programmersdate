import 'package:flutter/material.dart';
import 'HomeBody/MainHomeBody.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: MainHomeBody(),
      ),
      
    );
  }
}