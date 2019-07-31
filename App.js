/**
 * Code adapted from
 * https://medium.com/@caphun/react-native-load-local-static-site-inside-webview-2b93eb1c4225
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { WebView } from "react-native-webview";

type Props = {};
export default class App extends Component<Props> {
  onMessage = (event: any) => {
    const { title, message } = JSON.parse(event.nativeEvent.data);
    Alert.alert(title, message, [], { cancelable: true });
  };

  render() {
    const params = "platform=" + Platform.OS;
    const sourceUri =
      (Platform.OS === "android" ? "file:///android_asset/" : "") +
      "Web.bundle/loader.html";
    const injectedJS = `if (!window.location.search) {
      var link = document.getElementById('progress-bar');
      link.href = './site/index.html?${params}';
      link.click();
    }`;

    return (
      <View style={styles.container}>
        <WebView
          injectedJavaScript={injectedJS}
          source={{ uri: sourceUri }}
          javaScriptEnabled={true}
          originWhitelist={["*"]}
          allowFileAccess={true}
          onMessage={this.onMessage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
