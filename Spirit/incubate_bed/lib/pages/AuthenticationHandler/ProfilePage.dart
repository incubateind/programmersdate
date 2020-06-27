import 'EditScreen.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:incubate_bed/pages/AuthenticationHandler/RegistrationDetails.dart';

class ProfilePage extends StatefulWidget {
  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  FirebaseUser user;
  bool isSignedIn = false;

  String name;
  String bedCount;
  List<dynamic> facalities;
  int length;

  checkAuthentication() async {
    _auth.onAuthStateChanged.listen((user) {
      if (user == null) {
        Navigator.pushReplacementNamed(context, "/Signin");
      }
    });
  }

  getUser() async {
    FirebaseUser firebaseUser = await _auth.currentUser();
    await firebaseUser?.reload();
    firebaseUser = await _auth.currentUser();

    if (firebaseUser != null) {
      setState(() {
        this.user = firebaseUser;
        this.isSignedIn = true;
      });
    }
  }

  void signout() async {
    _auth.signOut();
  }

  @override
  void initState() {
    super.initState();
    this.checkAuthentication();
    this.getUser();
    this.getHospitalDetails();
  }

  void getHospitalDetails() async {
    FirebaseUser firebaseUser = await _auth.currentUser();
    await firebaseUser?.reload();
    firebaseUser = await _auth.currentUser();
    // DocumentReference userDoc = FirestoreService.registeredDocument(firebaseUser.uid);
    Stream registeredStream =
        FirestoreService.registeredStream(firebaseUser.uid);

    registeredStream.listen((event) {
      setState(() {
        name = event['name'];
        bedCount = event['beds'];
        facalities = event['facilities'];
        length = facalities.length;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    // const double height = MediaQuery.of(context).size.height*0.1;
    return Scaffold(
      // resizeToAvoidBottomInset: false,
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          FirebaseUser firebaseUser = await _auth.currentUser();
          await firebaseUser?.reload();
          firebaseUser = await _auth.currentUser();
          if (bedCount != null && firebaseUser.uid != null)
            navigateToEditScreen(firebaseUser.uid, bedCount, facalities);
        },
        child: Icon(Icons.edit),
        backgroundColor: Colors.red,
      ),
      body: length == null
          ? Center(child: CircularProgressIndicator())
          : Container(
              child: Center(
                child: !isSignedIn
                    ? CircularProgressIndicator()
                    : Stack(
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(top: 40, left: 10),
                            child: Align(
                              alignment: Alignment.topLeft,
                              child: Container(
                                child: Text(
                                  "${user.displayName}",
                                  style: TextStyle(fontSize: 15.0),
                                ),
                              ),
                            ),
                          ),
                          Container(
                            padding: EdgeInsets.only(top: 20.0),
                            child: Align(
                              alignment: Alignment.topRight,
                              child: IconButton(
                                color: Colors.red,
                                onPressed: signout,
                                // padding: EdgeInsets.fromLTRB(100, 20, 100, 20),
                                icon: Icon(Icons.person),
                              ),
                            ),
                          ),
                          Container(
                            padding: EdgeInsets.only(
                                top: 80, left: 10, right: 10, bottom: 10),
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(15.0),
                              ),
                              color: Colors.grey[200],
                              child: Center(
                                child: Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: <Widget>[
                                    Container(
                                      child: Center(
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.center,
                                          children: <Widget>[
                                            Padding(
                                              padding: EdgeInsets.all(8.0),
                                              child: ListTile(
                                                title: Text(
                                                  "Beds available:     $bedCount",
                                                  style:
                                                      TextStyle(fontSize: 20),
                                                ),
                                                leading: Icon(
                                                  Icons
                                                      .airline_seat_individual_suite,
                                                  size: 30,
                                                ),
                                              ),
                                            ),
                                            Text("Facilities available: ",
                                                style: TextStyle(fontSize: 20)),
                                          ],
                                        ),
                                      ),
                                    ),
                                    facalities.length == null
                                        ? Text("None")
                                        : Container(
                                            child: SizedBox(
                                              height: MediaQuery.of(context)
                                                      .size
                                                      .height *
                                                  0.5,
                                              width: MediaQuery.of(context)
                                                      .size
                                                      .width *
                                                  0.5,
                                              child: ListView.separated(
                                                itemBuilder: (context, index) {
                                                  if (facalities.length != 0)
                                                    return ListTile(
                                                      title: Center(
                                                        child: Text(
                                                            "${facalities[index].toString()}"),
                                                      ),
                                                    );
                                                  return Text("No facilities");
                                                },
                                                itemCount: facalities.length,
                                                separatorBuilder:
                                                    (context, index) => Divider(
                                                  thickness: 4.0,
                                                ),
                                                scrollDirection: Axis.vertical,
                                              ),
                                            ),
                                          ),
                                  ],
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
              ),
            ),
    );
  }

  void navigateToEditScreen(
      String uid, String beds, List<dynamic> facilities) async {
    bool result =
        await Navigator.push(context, MaterialPageRoute(builder: (context) {
      return EditScreen(uid, beds, facilities);
    }));
    // if (result == true) {
    //   updateListView();
    // }
  }
}
