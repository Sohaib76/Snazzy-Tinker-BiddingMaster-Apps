import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from './scr/app.js';

export default class App extends React.Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}
