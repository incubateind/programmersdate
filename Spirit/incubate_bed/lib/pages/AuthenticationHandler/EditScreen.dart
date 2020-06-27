import 'package:flutter/material.dart';
import 'RegistrationDetails.dart';

class EditScreen extends StatefulWidget {
  String bedCount;
  List<dynamic> facilities;
  String uid;

  EditScreen(this.uid, this.bedCount, this.facilities);

  @override
  _EditScreenState createState() => _EditScreenState();
}

class _EditScreenState extends State<EditScreen> {
  UserData userData;
  String temp, uid;
  String bedCountTemp;
  List<dynamic> facilitiesTemp;
  TextEditingController countController = TextEditingController();

  @override
  void initState() {
    bedCountTemp = widget.bedCount;
    facilitiesTemp = widget.facilities;
    uid = widget.uid;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    countController.text = bedCountTemp;
    return WillPopScope(
      onWillPop: () {
        moveToLastScreen();
      },
      child: Scaffold(
        resizeToAvoidBottomInset: false,
        body: Padding(
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
                    "Edit screen",
                    style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                  ),
                )),
                Padding(
                  padding: EdgeInsets.only(
                      top: 15.0, bottom: 5.0, left: 10, right: 10),
                  child: TextField(
                    controller: countController,
                    style: TextStyle(fontSize: 20.0),
                    decoration: InputDecoration(
                        labelText: 'Bed count',
                        icon: Icon(
                          Icons.airline_seat_individual_suite,
                        )),
                    onChanged: (value) {
                      bedCountTemp = value;
                    },
                  ),
                ),
                Row(
                  children: <Widget>[
                    Expanded(
                      child: Padding(
                        padding: EdgeInsets.all(30),
                        child: Center(
                            child: Text(
                          "Facilities",
                          style: TextStyle(fontSize: 20),
                        )),
                      ),
                    ),
                    Expanded(
                      child: Padding(
                          padding: EdgeInsets.only(
                              top: 15.0, bottom: 5.0, left: 15.0),
                          child: IconButton(
                              icon: Icon(Icons.add_box),
                              onPressed: () {
                                showDialog(
                                    context: context,
                                    builder: (BuildContext context) {
                                      return AlertDialog(
                                        title: Text("Add facilities"),
                                        content: TextField(
                                          onChanged: (value) {
                                            temp = value;
                                          },
                                        ),
                                        contentPadding: EdgeInsets.all(10.0),
                                        actions: <Widget>[
                                          FlatButton(
                                              child: Text("Add facility"),
                                              onPressed: () {
                                                if (temp.isNotEmpty) {
                                                  Navigator.pop(context);
                                                  setState(() {
                                                    facilitiesTemp.add(temp);
                                                  });
                                                }
                                              })
                                        ],
                                      );
                                    });
                              })),
                    )
                  ],
                ),
                Padding(
                  padding: EdgeInsets.all(30),
                  child: Center(
                    //     child: StreamBuilder(
                    //   stream: Stream.value(facilitiesTemp),
                    //   builder: (context, snapshot) {
                    //     return Text("${snapshot.data}");
                    //   },
                    // )
                    child: SizedBox(
                      height: MediaQuery.of(context).size.height * 0.2,
                      width: MediaQuery.of(context).size.width * 0.5,
                      child: ListView.separated(
                        itemBuilder: (context, index) {
                          if (facilitiesTemp.length != 0)
                            return ListTile(
                              title: Center(
                                child:
                                    Text("${facilitiesTemp[index].toString()}"),
                              ),
                            );
                          return Text("No facilities");
                        },
                        itemCount: facilitiesTemp.length,
                        separatorBuilder: (context, index) => Divider(
                          thickness: 4.0,
                        ),
                        scrollDirection: Axis.vertical,
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.all(15.0),
                  child: SizedBox(
                    width: 50,
                    height: 50,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(30),
                      child: RaisedButton(
                        elevation: 4.0,
                        color: Colors.grey[500],
                        child: Text(
                          "Save",
                          textScaleFactor: 1.5,
                        ),
                        onPressed: () async {
                          // FirestoreService().updateNewUser(userData, uid);
                          await FirestoreService.registeredDocument(uid)
                              .setData({
                            "beds": bedCountTemp,
                            "facilities": facilitiesTemp
                          }, merge: true);
                          moveToLastScreen();
                        },
                      ),
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }

  void updateCount(value) {
    userData.beds = value;
    // userData.beds = countController.text;
  }

  void moveToLastScreen() {
    Navigator.pop(context, true);
  }
}
