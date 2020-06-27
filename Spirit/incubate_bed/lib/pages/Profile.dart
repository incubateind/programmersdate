import 'package:flutter/material.dart';
import 'AuthenticationHandler/AuthenticationClass.dart';
class Profile extends StatefulWidget {
  @override
  _ProfileState createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  @override
  Widget build(BuildContext context) {
    return AuthenticationClass();
  }
}