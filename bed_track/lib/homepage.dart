import 'package:bedtrack/hospitalpage.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                width: 150,
                height: 150,
                decoration: BoxDecoration(
                    image: DecorationImage(
                  fit: BoxFit.fill,
                  image: AssetImage("images/splash.png"),
                )),
                margin: EdgeInsets.symmetric(vertical: 20),
//                  Image.asset("images/ic_launcher.png"),
              ),
              SizedBox(
                height: 40,
              ),
              GestureDetector(
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) {
                      return ShowHospital();
                    }));
                  },
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Text(
                          'Enter',
                          style: TextStyle(
                            fontSize: 25,
                          ),
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Icon(Icons.arrow_forward_ios)
                      ],
                    ),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(40),
                      gradient: LinearGradient(colors: [
                        Color(0xffff9966),
                        Color(0xffff5e62),
//                    Color(0xff0082c8),
//                    Color(0xff667db6)
                      ]),
                    ),
                  ))
            ],
          ),
        ),
      ),
    );
  }
}
//RaisedButton(
//child: Text(
//'Enter',
//style: TextStyle(
//fontSize: 25.0,
//),
//),
//color: Color(0xFF78eb86),
//onPressed: () {
//Navigator.push(
//context,
//MaterialPageRoute(
//builder: (context) => ShowHospital(),
//));
//},
//shape: RoundedRectangleBorder(
//borderRadius: BorderRadius.circular(20),
//),
//)
