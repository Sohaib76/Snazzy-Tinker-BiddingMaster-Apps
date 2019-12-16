import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MainStack } from ".././app.js";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MainStack />
      </SafeAreaView>
    );
  }
}
