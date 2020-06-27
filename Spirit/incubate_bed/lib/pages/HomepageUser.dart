import 'package:flutter/material.dart';
import 'variables/variables.dart';
import 'Home.dart';
import 'Maps.dart';
import 'Profile.dart';

class HomepageUser extends StatefulWidget {
  @override
  _HomepageUserState createState() => _HomepageUserState();
}

class _HomepageUserState extends State<HomepageUser> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: tabs[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        type: BottomNavigationBarType.fixed,
        fixedColor: Colors.red,
        items: [
          bottomNavItem1,
          bottomNavItem2,
          bottomNavItem3,
        ],
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}
