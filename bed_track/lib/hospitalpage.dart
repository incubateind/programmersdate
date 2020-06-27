import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import './providers/hospital_data.dart';
import './displaytile.dart';
import './database/data.dart';

class ShowHospital extends StatefulWidget {
  @override
  _ShowHospitalState createState() => _ShowHospitalState();
}

class _ShowHospitalState extends State<ShowHospital> {
  List<DataBaseTemplate> _filteredhospitals = [];
  // Future<PlaceLocation> _user = getLocation();
  bool _sorted = false;
  bool startonce = true;
  bool _isInit = true;
  List<DataBaseTemplate> _dataList;
  var distance;

  void start() {
    setState(() {
      if (startonce) {
        Provider.of<HospitalDataProvider>(context).fetchData();
        _dataList = Provider.of<HospitalDataProvider>(context).datalist;
        _filteredhospitals = _dataList;
      }
      startonce = false;
    });
  }

  @override
  void didChangeDependencies() {
    if (_isInit) {
      Provider.of<HospitalDataProvider>(context).fetchData();
    }
//    _isInit = false;
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    start();
    _dataList = Provider.of<HospitalDataProvider>(context).datalist;
    _filteredhospitals = _dataList;
    print("${_dataList.length}");
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      darkTheme: ThemeData.dark(),
      home: Scaffold(
        floatingActionButton: FloatingActionButton(
            backgroundColor: Colors.grey,
            child: Icon(_sorted ? Icons.keyboard_return : Icons.filter_list),
            onPressed: () {
              showModalBottomSheet<void>(
                  context: context,
                  builder: (BuildContext context) {
                    return Container(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: [Colors.black87, Colors.grey[850]],
                        ),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        mainAxisSize: MainAxisSize.min,
                        children: <Widget>[
                          Padding(
                            padding:
                                const EdgeInsets.only(top: 20.0, bottom: 10.0),
                            child: Text(
                              "Sort",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 20,
                                color: Colors.white,
                              ),
                            ),
                          ),
                          Divider(
                            color: Colors.white,
                          ),
                          FlatButton(
                            onPressed: () => setState(() {
                              _sorted = true;
                              Navigator.pop(context);
                            }),
                            child: Text(
                              "By distance",
                              style: TextStyle(color: Colors.cyanAccent),
                            ),
                          ),
                          FlatButton(
                            onPressed: () => setState(() {
                              _sorted = true;
                              Navigator.pop(context);
                            }),
                            child: Text(
                              "By availibility of beds",
                              style: TextStyle(color: Colors.cyanAccent),
                            ),
                          ),
                          FlatButton(
                            onPressed: () => setState(() {
                              _sorted = true;
                              Navigator.pop(context);
                            }),
                            child: Text(
                              "By availibility of ventilators",
                              style: TextStyle(color: Colors.cyanAccent),
                            ),
                          ),
                          FlatButton(
                            onPressed: () => setState(() {
                              _sorted = true;
                              Navigator.pop(context);
                            }),
                            child: Text(
                              "By availibility of oxygen tanks",
                              style: TextStyle(color: Colors.cyanAccent),
                            ),
                          ),
                          FlatButton(
                            onPressed: () => setState(() {
                              _sorted = false;
                              Navigator.pop(context);
                            }),
                            child: Text(
                              "None",
                              style: TextStyle(color: Colors.cyanAccent),
                            ),
                          ),
                        ],
                      ),
                    );
                  });
            }),
        body: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                height: 100,
                width: double.infinity,
                child: Center(
                  child: Text(
                    'HOSPITALS',
                    style: TextStyle(
                      shadows: <Shadow>[
                        Shadow(
                          color: Colors.grey,
                          offset: Offset(1, 1),
                        ),
                      ],
                      fontSize: 35,
                      wordSpacing: 10,
                      letterSpacing: 10,
                      fontWeight: FontWeight.w500,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.only(bottom: 8.0, left: 8.0, right: 8.0),
                child: TextField(
                  decoration: InputDecoration(
                    hintText: "Search Hospitals",
                    icon: Icon(Icons.search),
                  ),
                  onChanged: (text) {
                    setState(() {
                      _filteredhospitals = _dataList
                          .where(
                            (element) => (element.hospitalName
                                .toLowerCase()
                                .contains(text.toLowerCase())),
                          )
                          .toList();
                    });
                  },
                ),
              ),
              Expanded(
                  child: Center(
                child: GridView.builder(
                  gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                    childAspectRatio: 1,
                    maxCrossAxisExtent: 400,
                  ),
                  scrollDirection: Axis.vertical,
                  itemCount: _filteredhospitals.length,
                  itemBuilder: (BuildContext context, int index) {
                    return DisplayTile(
                      id: _filteredhospitals[index].id,
                      imageURL: _filteredhospitals[index].imageURL,
                      location: _filteredhospitals[index].location,
                      bedNumber: _filteredhospitals[index].bedNumber,
                      hospitalName: _filteredhospitals[index].hospitalName,
                      phoneNumber: _filteredhospitals[index].phoneNumber,
                    );
                  },
                ),
              )),
            ],
          ),
        ),
      ),
    );
  }
}
