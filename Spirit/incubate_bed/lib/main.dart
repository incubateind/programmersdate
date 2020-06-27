import 'package:flutter/material.dart';
import 'pages/HomepageUser.dart';
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomepageUser(),
      debugShowCheckedModeBanner: false,
    );
  }
}