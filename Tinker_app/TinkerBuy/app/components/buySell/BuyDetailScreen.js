import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions, Platform, Text, ActivityIndicator, Button, Alert } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from '../others/LabelTextComponent';
import Label_Field from '../others/Label_Field';
import { connectFirebase, addToArray, generateId, updateData, getData } from '../../backend/firebase/utility';
import { _retrieveData } from '../../backend/AsyncFuncs';
import { GlobalConst } from '../../config/imports';


export default class BuyDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      sellerName: 'seller not found',
      qty: '1',
      price: '0',
      receiptNo: '',
      buyerName: '',
      currency: ''
    });
    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getData = this.getData.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  componentDidMount(){
    connectFirebase();
    if(this.props.navigation.state.params) {
      this.setState({
        sellerName: this.props.navigation.state.params.sellerName,
        sellerId: this.props.navigation.state.params.sellerId
      });
    this.getData();
    }
    //TODO use retrieve multiple here
    _retrieveData(GlobalConst.STORAGE_KEYS.userName).then((userName) =>{
        this.setState({ buyerName: userName });
    });
    _retrieveData(GlobalConst.STORAGE_KEYS.userId).then((userId) =>{
        this.setState({ buyerId: userId });
    });
  }

  async getData(){
    let currency = await getData('sellers', this.props.navigation.state.params.sellerId, 'currency');
    await this.setState({ currency: currency });
  }

  async onPress(){
    this.setState({ loader: true });

    let date = new Date();

    if(this.state.receiptNo == '')
      await this.setState({ receiptNo: generateId(10) });

    await addToArray('purchases', this.state.buyerId, 'unapproved', {sellerId: this.state.sellerId, sellerName: this.state.sellerName, price: this.state.price, qty: this.state.qty, receiptNo: this.state.receiptNo, date: date.toString(), currency: this.state.currency } );
    let unconfirmedSales = await addToArray('sales', this.state.sellerId, 'unconfirmed', {buyerId: this.state.buyerId, buyerName: this.state.buyerName, sellerName: this.state.sellerName, price: this.state.price, qty: this.state.qty, receiptNo: this.state.receiptNo, date: date.toString(), currency: this.state.currency } );

    this.updateTotalUnconfirmedSales();

    this.setState({ loader: false });
    let unconfirmedSalesData = await unconfirmedSales.get();

    Alert.alert( '', 'Please make sure that seller verifies this sale immediately after your purchase to avoid disputes later',
      [ {text: 'OK', onPress: () => this.props.navigation.navigate('BuyQrScreen', {indexOfUnconfirmedSale: unconfirmedSalesData.data().unconfirmed.length - 1})} ] );
  }

  async  updateTotalUnconfirmedSales(){
    let salesData = await getData('sales', this.state.sellerId);
    let totalUnconfirmedSales = salesData.totalUnconfirmedSales;
    if(totalUnconfirmedSales == undefined)
      await updateData('sales', this.state.sellerId, {totalUnconfirmedSales: +this.state.price *  +this.state.qty} );
    else
      await updateData('sales', this.state.sellerId, {totalUnconfirmedSales: +totalUnconfirmedSales + (+this.state.price *  +this.state.qty)} );
  }


  onChange(text, identifier){
    text.then((text) =>{
      this.setState({ [identifier]: text })
    })
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.itemContainer}>
          <Text style={styles.contentText}>
            Buy From {this.state.sellerName}
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <LabelTextComponent label={'Currency'}
            text={this.state.currency}
          />
          <Label_Field label={'The total amount you paid to the seller'}
            placeholder={''}
            textInputHeight={50}
            onChange={(text) => this.onChange(text, 'price')}
            keyboardType={'decimal-pad'}
            onSubmitEditing={() => { this.focusNextField('qty') }}
          />
        </View>

        {/*}<View style={styles.itemContainer}>
          <Label_Field label={'Qty'}
            placeholder={'1'}
            textInputHeight={50}
            onChange={(text) => this.onChange(text, 'qty')}
            keyboardType={'numeric'}
            onRef={(ref) => { this.inputs['qty'] = ref }}
            onSubmitEditing={() => { this.focusNextField('receiptNo') }}
          />
        </View>*/}

        <View style={styles.itemContainer}>
          <Label_Field label={'Receipt Number provided by the seller - Leave if black'}
            placeholder={'e.g DABSJ213'}
            textInputHeight={50}
            onChange={(text) => this.onChange(text, 'receiptNo')}
            onRef={(ref) => { this.inputs['receiptNo'] = ref }}
            onSubmitEditing={() => console.log('on submit editing receipt no')}
          />
        </View>


        <View style={styles.buttonContainer}>
          {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
          <Button
            onPress={() => this.onPress()}
            title="SUBMIT"
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
    marginHorizontal: 25,
    marginTop: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 35,
  },
  contentText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 30,
    fontWeight: "bold",
  },
});
