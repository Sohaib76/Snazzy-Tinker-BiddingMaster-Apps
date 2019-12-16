import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert, Dimensions, Platform, Text, Button, ActivityIndicator } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from '../others/LabelTextComponent';
import Label_Field from '../others/Label_Field';
import { connectFirebase, getData } from '../../backend/firebase/utility';
import { GlobalConst } from '../../config/imports';
import { _retrieveData } from '../../backend/AsyncFuncs';


export default class AddProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
    });
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount(){
    connectFirebase();
  }

  async onPress(flag){
    this.setState({ loader: true });
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);

    //if company details exists
    let sellerDetails = await getData('sellers', currentUserId);
    if(!sellerDetails){
      Alert.alert( 'WARNING!', 'Turning your TinkerBUY account into a seller account will result in you being unable to withdraw your cashback until this account has been approved by a TinkerBUY agent. A TinkerBUY agent will visits the seller personally to check the seller and also train the seller about all things related to TinkerBUY',
        [ {text: 'Cancel'}, {text: 'OK', onPress: () => this.props.navigation.navigate('SellerInfoScreen')} ] );
    }
    else {
      this.props.navigation.navigate('AddProductCategoryScreen', {onlineProduct: flag});
    }

    this.setState({ loader: false });
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={[styles.itemContainer, {flex: 0.2}]}>
          <Text style={styles.contentText}>
            ADVERTISE YOURSELF ON TINKERBUY
          </Text>
        </View>

        <View style={[styles.itemContainer, {flex: 0.5}]}>
          <Text style={styles.normalText}>
            Select this option if your shop does not have a website. You are a seller who sells offline products and services. You can add offline items here.
          </Text>
          <Text style={[styles.normalText, {color: '#a80000'}]}>
            Please note that you do not need to add items if you sell too many items. You can just give your buyers your seller ID to scan on their phones after they have bought the products from your shop. However, adding individual items will result in more buyers finding you when they search for sellers.
          </Text>
        </View>

        <View style={styles.itemContainerSmall}>
          <Button
            onPress={() => this.onPress(false)}
            title="ADD OFFLINE ITEMS"
            color="#71a1ed"
          />
          {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        </View>

        <View style={[styles.itemContainer, {flex: 0.1, justifyContent: 'flex-end'}]}>
          <Text style={styles.normalText}>
            Select this option if you are an online seller
          </Text>
        </View>

        <View style={styles.itemContainerSmall}>
          <Button
            onPress={() => this.onPress(true)}
            title="ADD ONLINE ITEMS"
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
    marginTop: '5%'
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  itemContainerSmall: {
    flex: 0.1,
    marginHorizontal: 35,
    marginVertical: 5
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
