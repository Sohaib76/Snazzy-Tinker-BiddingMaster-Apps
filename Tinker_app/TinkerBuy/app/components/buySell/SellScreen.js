import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from '../others/LabelTextComponent';
import { connectFirebase } from '../../backend/firebase/utility';

export default class SellScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    connectFirebase();
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.contentText}>
            Sell Through TinkerBuy
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.normalText}>
            TinkerBUY accepts all kinds of sellers from individuals selling single items to small or large shops selling many products. If you are willing to pay TinkerBUY 12% for every sale, then TinkerBUY is willing to bring a flood of sales to you
          </Text>
        </View>

        <View style={styles.contentContainer}>

          <View style={styles.titleContainer}>
            <Text style={styles.contentText2}>
              Manage Your Seller Account
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={'SHOW MY SELLER CODE'} hideOtherLabels={true} onPress={() => navigate('SellToBuyerScreen', {title: 'SELLER CODE'})}/>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={'ADD PRODUCTS OR SERVICES'} hideOtherLabels={true} onPress={() => navigate('AddProductScreen', {title: 'ADD PRODUCTS OR SERVICES'})}/>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={'VIEW MY PRODUCTS'} hideOtherLabels={true} onPress={() => navigate('MyProductsScreen', {title: 'MY PRODUCTS'})}/>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={'CONFIRM SALES'} hideOtherLabels={true} onPress={() => navigate('ConfirmSaleDetailScreen', {title: 'UNCONFIRMED SALES', status: 'unconfirmed'})}/>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={'ACCOUNT SUMMARY'} hideOtherLabels={true} onPress={() => navigate('ConfirmSaleScreen', {title: 'ACCOUNT SUMMARY'})}/>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={'SELLER INFORMATION'} hideOtherLabels={true} onPress={() => navigate('SellerInfoScreen', {title: 'SELLER INFORMATION'})}/>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: '3%'
  },
  itemContainer: {
    flex: 0.3,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 1,
  },
  itemContainerSmall: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 1,
  },
  contentContainer: {
    flex: 0.6,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 30,
    fontWeight: "bold",
  },
  contentText2: {
    textAlign: 'center',
    color: '#0873BE',
    fontSize: 25,
    fontWeight: "bold",
  },
  normalText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 15,
    marginTop: 30
  },
  imageStyle:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageStyle3:{
    flex: 1,
    width: 100,
    height: 50,
    resizeMode: 'center',
    borderRadius: 10,
    marginLeft: 5
  },
});
