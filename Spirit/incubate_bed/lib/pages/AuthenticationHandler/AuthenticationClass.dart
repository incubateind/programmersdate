import 'package:flutter/material.dart';
import 'ProfilePage.dart';
import 'Signin.dart';
import 'Signup.dart';

// void main() => runApp(MyApp());

class AuthenticationClass extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Firebase login',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: ProfilePage(),
      routes: <String,WidgetBuilder>{
        "/Signin": (BuildContext context) => Signin(),
        "/Signup": (BuildContext context) => Signup(),
      },
    );
  }
}