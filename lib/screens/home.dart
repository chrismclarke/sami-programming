import 'dart:async';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class Home extends StatelessWidget {
  final Completer<WebViewController> _controller =
      Completer<WebViewController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: const Text('Flutter WebView example 2'),
      // ),
      body: Builder(builder: (BuildContext context) {
        return WebView(
          initialUrl:
              'file:///android_asset/flutter_assets/assets/blockly-games/en/index.html',
          javascriptMode: JavascriptMode.unrestricted,
          onWebViewCreated: (WebViewController webViewController) {
            _controller.complete(webViewController);
          },
        );
      }),
      // floatingActionButton: favoriteButton(),
    );
  }

  Widget favoriteButton() {
    return FutureBuilder<WebViewController>(
        future: _controller.future,
        builder: (BuildContext context,
            AsyncSnapshot<WebViewController> controller) {
          if (controller.hasData) {
            return FloatingActionButton(
              onPressed: () async {
                controller.data.evaluateJavascript(
                    "cube.material.color.setHex('0x' + Math.floor(Math.random() * 16777215).toString(16));");
              },
              child: const Icon(Icons.refresh),
            );
          }
          return Container();
        });
  }
}
