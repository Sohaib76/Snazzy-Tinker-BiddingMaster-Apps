import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from '../others/LabelTextComponent';
import Label_Field from '../others/Label_Field';


export default class SellConfirmScreenDetail extends React.Component {
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

        <View style={styles.itemContainer}>
          <Text style={styles.normalText}> GaniZani paid you: </Text>
          <Text style={styles.contentText2}> $10 </Text>
          <Text style={styles.normalText}>Receipt Number: </Text>
          <Text style={styles.contentText2}>SALN1232FWE </Text>
        </View>

        <View style={styles.itemContainerSmall}>
        </View>


        <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('Payment Confirmed!')}
            title="YES, CONFIRM PAYMENT"
            color="#71a1ed"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('Payment Declined')}
            title="NO, DECLINE PAYMENT"
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
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 1,
  },
  itemContainerSmall: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 1,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    marginHorizontal: 35,
  },
  imageStyle:{
    flex: 1,
    resizeMode: 'contain',
  },
  contentText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 30,
    fontWeight: "bold",
  },
  contentText2: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 20,
    fontWeight: "bold",
  },
  normalText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 15,
    marginTop: 30
  },
});
