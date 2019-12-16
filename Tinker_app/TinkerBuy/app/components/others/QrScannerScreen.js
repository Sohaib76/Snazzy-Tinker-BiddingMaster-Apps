import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking, } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { _storeData } from '../../backend/AsyncFuncs';
import GlobalConst from '../../config/GlobalConst';


export default class QrScannerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      show: true,
    });
  }

  async onSuccess(e) {
    let qrValue = e.data.split(' ');

    if(qrValue[0] == 'confirmSale'){
      await this.props.navigation.state.params.onBackFromScanScreen(qrValue[1]);
    }
    else{
      await _storeData(GlobalConst.STORAGE_KEYS.refererId, qrValue[0]);
      await _storeData(GlobalConst.STORAGE_KEYS.refererName, qrValue[1]);
      await this.props.navigation.state.params.onBackFromScanScreen(true);
    }
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>

        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text style={styles.centerText}>
              Sscan the QR code
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
