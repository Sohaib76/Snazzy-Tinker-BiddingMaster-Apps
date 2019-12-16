import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Alert, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LabelTextComponent from '../others/LabelTextComponent';
import NetworkComponent from '../network/NetworkComponent';
import { connectFirebase, getData, saveData, addToArray, updateData } from '../../backend/firebase/utility';
import { GlobalConst } from '../../config/imports';
import { _retrieveData } from '../../backend/AsyncFuncs';


export default class ConfirmSaleDetailScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      loader: false,
      receiptNo: '',
      buyerName: '',
      price: '',
      qty: '',
      status: '',
      data: [],
      currency: ''
    });
    this.getData = this.getData.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressTick = this.onPressTick.bind(this);
    this.updateUnconfirmedSalesAmount = this.updateUnconfirmedSalesAmount.bind(this);
    this.removeFromUnconfirmedSales = this.removeFromUnconfirmedSales.bind(this);
    this.updateCommission = this.updateCommission.bind(this);
    this.onBackFromScanScreen = this.onBackFromScanScreen.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  componentDidMount(){
    connectFirebase();
    this.getData();
  }

  async getData(){
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    await this.setState({ currentUserId: currentUserId });

    let salesData = await getData('sales', this.state.currentUserId);
    let currency = await getData('sellers', this.state.currentUserId, 'currency');
    await this.setState({
      salesData: salesData,
      data: salesData[this.props.navigation.state.params.status],
      currency: currency
    });
  }

  async onPressDelete(index){
    await this.updateUnconfirmedSalesAmount(index);

    let removedData = await this.removeFromUnconfirmedSales(index);
    await addToArray('sales', this.state.currentUserId, 'disputed', removedData[0] );

    //update total disputed sales amount
    let totalDisputedSales = this.state.salesData.totalDisputedSales;
    if(totalDisputedSales == undefined)
      await updateData('sales', this.state.currentUserId, {totalDisputedSales: removedData[0].price} );
    else
     await updateData('sales', this.state.currentUserId, {totalDisputedSales: +totalDisputedSales + +removedData[0].price } );
  }

  async onPressTick(index){
    await this.updateUnconfirmedSalesAmount(index);

    //update total confirmed sales amount
    let totalConfirmedSales = this.state.salesData.totalConfirmedSales;
    if(totalConfirmedSales == undefined)
      await updateData('sales', this.state.currentUserId, {totalConfirmedSales: +this.state.data[index].price * +this.state.data[index].qty} );
    else
     await updateData('sales', this.state.currentUserId, {totalConfirmedSales: +totalConfirmedSales + (+this.state.data[index].price * +this.state.data[index].qty) } );

    await this.updateCommission(index);

    //remove from unconfirmed - seller
    let removedData = await this.removeFromUnconfirmedSales(index);

    //add to confirmed - seller
    let saleDocRef = await addToArray('sales', this.state.currentUserId, 'confirmed', removedData[0] );

    this.updatePurchases(removedData[0], saleDocRef.id);
  }

  async updateUnconfirmedSalesAmount(index){
    let totalUnconfirmedSales = this.state.salesData.totalUnconfirmedSales;
    await updateData('sales', this.state.currentUserId, {totalUnconfirmedSales: totalUnconfirmedSales - this.state.data[index].price * this.state.data[index].qty} );
  }

  async updatePurchases(removedData, sellerId){
    //remove from purchases
    let unApprovedPurchases = await getData('purchases', this.state.currentUserId, 'unapproved');
    let indexOfUnapprovedPurchase = 0;
    for(let i=0; i<unApprovedPurchases.length; i++){
      if(unApprovedPurchases[i].receiptNo == removedData.receiptNo)
        indexOfUnapprovedPurchase = i
    }
    unApprovedPurchases.splice(indexOfUnapprovedPurchase, 1);
    await saveData('purchases', this.state.currentUserId, {unapproved: unApprovedPurchases});

    //add to purchases - buyer
    let date = new Date();
    await addToArray('purchases', removedData.buyerId, 'approved', {sellerId: sellerId, sellerName: removedData.sellerName, buyerName: removedData.buyerName, price: removedData.price, qty: removedData.qty, receiptNo: removedData.receiptNo, date: date.toString() } );
  }

  async removeFromUnconfirmedSales(index){
    let removedData = this.state.data.splice(index, 1);
    await this.setState({ data: this.state.data });
    await saveData('sales', this.state.currentUserId, {unconfirmed: this.state.data});
    return removedData;
  }

  async updateCommission(index){
    let oldCommissions = await getData('sales', this.state.currentUserId, 'commission');
    let currentCommission = 12 * ( this.state.data[index].price * this.state.data[index].qty ) / 100;
    let allCommissions = 0.00;

    if(isNaN(oldCommissions)){
      allCommissions = parseFloat(currentCommission).toFixed(2);
    }
    else{
      oldCommissions = oldCommissions * 1.00;
      currentCommission = currentCommission * 1.00;
      allCommissions = oldCommissions + currentCommission;
    }

    await updateData('sales', this.state.currentUserId, {commission: allCommissions.toString()} );
  }

  onBackFromScanScreen(index){
    this.onPressTick(index);
    Alert.alert( '', 'The recent sale has been confirmed',
      [ {text: 'OK', onPress: () => this.props.navigation.navigate('SellScreen')} ] );
  }


  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigate('QrScannerScreen', {onBackFromScanScreen: this.onBackFromScanScreen})}
          title="CONFIRM BY SCANNING QR CODE"
          color="#71a1ed"
        />
      </View>

      {this.state.data == undefined ?
        <View style={[styles.container, {marginHorizontal: 20}]}>
          <Text>Nothing to show</Text>
        </View>
      :
        this.state.data.length == 0 ?
        <View style={[styles.container, {marginHorizontal: 20}]}>
          <Text>Nothing to show</Text>
        </View>
        :
        <FlatList
          data={this.state.data}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) =>

            <View style={styles.fieldContainer}>

              <NetworkComponent
                Label1={'Receipt No: ' + item.receiptNo}
                hideOtherLabels={true}
                hideIcon={true}
              />

              <View style={styles.container}>

                <NetworkComponent
                  Label1={'Date'}
                  Label2={'Name'}
                  Label3={'Price'}
                  hideIcon={true}
                  labelAllBlack={true}
                />

                <NetworkComponent
                  Label1={item.date.substring(4, 21)}
                  Label2={item.buyerName}
                  Label3={this.state.currency + ' ' + item.price}
                  showCheckIcon={ this.props.navigation.state.params.title == 'UNCONFIRMED SALES' ? true : false}
                  hideIcon={true}
                  onPressIcon={() => this.onPressTick(index)}
                  labelAllBlack={true}
                  fontWeightNormal={true}
                />

                <NetworkComponent
                  Label1={''}
                  hideOtherLabels={true}
                  hideIcon={true}
                  showDelete={this.props.navigation.state.params.title == 'UNCONFIRMED SALES' ? true : false}
                  onPressIcon={() =>
                    Alert.alert( '', 'The recent sale has been confirmed',
                      [ {text: 'Cancel', onPress: () => console.log('Cancelled')},
                        {text: 'OK', onPress: () => this.onPressDelete(index)}
                      ])
                    }
                />

              </View>
            </View>

          }
        />
      }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldContainer: {
    flex:1,
    paddingTop: 20,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderBottomColor: '#aaa',
  },
  labelContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    marginHorizontal: 35,
    marginTop: 10
  },
  titleText: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center'
  },
});
