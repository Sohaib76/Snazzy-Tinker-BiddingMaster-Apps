import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import SearchComponent from '../others/SearchComponent';
import Label_Field from '../others/Label_Field';
import { connectFirebase } from '../../backend/firebase/utility';
import { _retrieveData, _retrieveMultipleData } from '../../backend/AsyncFuncs';
import { GlobalConst } from '../../config/imports';


export default class BuyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      refererId: '',
      refererName: '',
      isSellerCodeSet: false,
    });
    this.onBackFromScanScreen = this.onBackFromScanScreen.bind(this);
  }

  componentDidMount(){
    connectFirebase();
    //TODO use retrieve multiple
    this.props.navigation.addListener('willFocus', () => {
      _retrieveMultipleData(GlobalConst.STORAGE_KEYS.refererId,GlobalConst.STORAGE_KEYS.refererName).then((refererInfo) =>{
        if(this.state.isSellerCodeSet){
          this.setState({ refererId: refererInfo[0], refererName: refererInfo[1] },
            () => this.props.navigation.navigate('BuyDetailScreen', {sellerName: this.state.refererName, sellerId: this.state.refererId})
          );
        }
      });
    });
  }


  onBackFromScanScreen(flag){
    this.setState({ isSellerCodeSet: flag })
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('SearchScreen')}
            title="SEARCH FOR PRODUCTS"
            color="#71a1ed"
          />
        </View>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.contentText}>
            BUY FROM SELLER
          </Text>
        </View>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.normalText}>
            Scan Seller Code
          </Text>
        </View>

        <TouchableOpacity style={styles.itemContainer} onPress={() => navigate('QrScannerScreen', {onBackFromScanScreen: this.onBackFromScanScreen})}>
          <Image style={styles.imageStyle} source={require('../../photos/qr2.png')} />
        </TouchableOpacity>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.normalText}> </Text>
        </View>

        <View style={styles.itemContainerSmall}>
          <Label_Field
            label={'Or type the seller code here'}
            placeholder={this.state.refererId}
            textInputHeight={50}
            onChange={(text) => {}}
            onSubmitEditing={() => {}}
          />
        </View>

        <View style={styles.itemContainerSmall}>
        </View>

        <View style={styles.buttonContainer}>
        {this.state.isSellerCodeSet ?
          <Button
            onPress={() => navigate('BuyDetailScreen', {sellerName: this.state.refererName, sellerId: this.state.refererId})}
            title="SUBMIT"
            color="#71a1ed"
          />
        : null
        }
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
