import 'package:flutter/material.dart';
import 'screens/home.dart';
import 'package:flutter/services.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // set orientation and remove status bar
    SystemChrome.setPreferredOrientations(
        [DeviceOrientation.landscapeLeft, DeviceOrientation.landscapeRight]);
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.manual, overlays: []);
    return MaterialApp(
      title: 'Flutter Web Views',
      theme: ThemeData(
          primarySwatch: Colors.blue,
          fontFamily: "Arial",
          textTheme: TextTheme(
              labelLarge: TextStyle(color: Colors.white, fontSize: 18.0),
              titleLarge: TextStyle(color: Colors.red))),
      home: Home(),
    );
  }
}
