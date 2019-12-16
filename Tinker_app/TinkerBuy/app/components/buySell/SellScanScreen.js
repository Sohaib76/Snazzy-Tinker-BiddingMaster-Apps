import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import SearchComponent from '../others/SearchComponent';


export default class SellScanScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.contentText}>
            SELL TO BUYER
          </Text>
        </View>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.normalText}>
            Check the purchase on buyer's phone. If correct, scan the purchase code to verify the transaction
          </Text>
        </View>

        <TouchableOpacity style={styles.itemContainer} onPress={() => navigate('QrScannerScreen')}>
          <Image style={styles.imageStyle} source={require('../../photos/qr.png')} />
        </TouchableOpacity>

        <View style={[styles.itemContainerSmall, {flex: 0.3}]}>
          <Text style={styles.normalText}>
            Please note, once you verify a purchase, you will have to pay TinkerBuy 12% of the value of this transaction
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('Sale Confirmed!')}
            title="CONFIRM"
            color="#71a1ed"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: '10%'
  },
  itemContainer: {
    flex: 0.4,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: '10%',
  },
  itemContainerSmall: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 1,
  },
  buttonContainer: {
    flex: 0.1,
    justifyContent: 'center',
    marginHorizontal: 35,
  },
  imageStyle:{
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#aaaaaa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    backgroundColor: 'white'
  },
  contentText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 30,
    fontWeight: "bold",
  },
  normalText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 15,
  },
});
