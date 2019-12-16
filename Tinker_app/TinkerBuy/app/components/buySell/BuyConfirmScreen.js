import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from '../others/LabelTextComponent';
import Label_Field from '../others/Label_Field';


export default class BuyConfirmScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      sellerName: 'GANELLI COSMETICS',
    });
  }

  componentDidMount(){
    if(this.props.navigation.state.params) {
      this.setState({ sellerName: this.props.navigation.state.params.sellerName })
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.itemContainer}>
          <Text style={styles.contentText}>
            PURCHASE FROM {this.state.sellerName} COMPLETED
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.normalText}>
            Your purchase has been submitted to the seller. Wait for seller to confirm or give seller the below code to scan and verify your purchase instantly.
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Image source={require('../../photos/qr.png')} style={styles.imageStyle}/>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.normalText}>
            Your cashback will only be added after seller verifies and pays for this purchase
          </Text>
        </View>

        <View style={styles.itemContainerSmall}>
          <Button
            onPress={() => navigate('BuySellScreen')}
            title="BACK TO HOME"
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  itemContainerSmall: {
    flex: 0.2,
    marginHorizontal: 35,
    marginBottom: 10
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
  normalText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 15,
  },
});
