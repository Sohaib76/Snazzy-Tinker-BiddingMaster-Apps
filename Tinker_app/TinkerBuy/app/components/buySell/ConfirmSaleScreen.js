import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import { connectFirebase, getData } from '../../backend/firebase/utility';
import { GlobalConst } from '../../config/imports';
import { _retrieveData } from '../../backend/AsyncFuncs';


export default class ConfirmSaleScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      loader: false,
      amountOwedToTinkerbuy: '',
      currency: '',
      unconfirmedCount: '0',
      confirmedCount: '0',
      clearedCount: '0',
      disputedCount: '0',
      unconfirmedSales: '0',
      confirmedSales: '0',
      clearedSales: '0',
      disputedSales: '0',
    });
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    connectFirebase();
    this.props.navigation.addListener('willFocus', () => {
      this.getData();
    })
  }

  async getData(){
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    await this.setState({ currentUserId: currentUserId });

    //count and amount
    let saleData = await getData('sales', this.state.currentUserId);
    await this.setState({
      unconfirmedCount: saleData.unconfirmed == undefined ? 0 : saleData.unconfirmed.length,
      confirmedCount: saleData.confirmed == undefined ? 0 : saleData.confirmed.length,
      clearedCount: saleData.cleared == undefined ? 0 : saleData.cleared.length,
      disputedCount: saleData.disputed == undefined ? 0 : saleData.disputed.length,
      unconfirmedSales: saleData.totalUnconfirmedSales == undefined ? 0 : saleData.totalUnconfirmedSales,
      confirmedSales: saleData.totalConfirmedSales == undefined ? 0 : saleData.totalConfirmedSales,
      clearedSales: saleData.totalClearedSales == undefined ? 0 : saleData.totalClearedSales,
      disputedSales: saleData.totalDisputedSales == undefined ? 0 : saleData.totalDisputedSales,
    });

    //total amount due
    let amountOwedToTinkerbuy = await getData('sales', this.state.currentUserId, 'commission');
    let currency = await getData('sellers', this.state.currentUserId, 'currency');
    await this.setState({ amountOwedToTinkerbuy: parseFloat(amountOwedToTinkerbuy).toFixed(2), currency: currency });
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.contentText}>
            ACCOUNT SUMMARY
          </Text>
        </View>

        <View style={styles.contentContainer}>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={this.state.unconfirmedCount + ' - UNCONFIRMED SALES' + ' (' + (this.state.currency == false ? '$' : this.state.currency) + this.state.unconfirmedSales + ')'} hideOtherLabels={true} onPress={() => navigate('ConfirmSaleDetailScreen', {title: 'UNCONFIRMED SALES', status: 'unconfirmed'})}/>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={this.state.confirmedCount + ' - CONFIRMED SALES' + ' (' + (this.state.currency == false ? '$' : this.state.currency) + this.state.confirmedSales + ')'} hideOtherLabels={true} onPress={() => navigate('ConfirmSaleDetailScreen', {title: 'CONFIRMED SALES', status: 'confirmed'})}/>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={this.state.clearedCount + ' - CLEARED SALES' + ' (' + (this.state.currency == false ? '$' : this.state.currency) + this.state.clearedSales + ')'} hideOtherLabels={true} onPress={() => navigate('ConfirmSaleDetailScreen', {title: 'CLEARED SALES', status: 'cleared'})}/>
          </View>

          <View style={styles.buttonContainer}>
            <NetworkComponent Label1={this.state.disputedCount + ' - DISPUTED SALES' + ' (' + (this.state.currency == false ? '$' : this.state.currency) + this.state.disputedSales + ')'} hideOtherLabels={true} onPress={() => navigate('ConfirmSaleDetailScreen', {title: 'DISPUTED SALES', status: 'disputed'})}/>
          </View>

        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bigText}>TOTAL DUE PAYMENT</Text>
          <Text style={styles.bigText2}>{this.state.currency}{this.state.amountOwedToTinkerbuy}</Text>
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
  header: {
    flex: 0.15,
    padding: 5,
  },
  contentContainer: {
    flex: 0.4,
    marginTop: 10,
  },
  bottomContainer: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  contentText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 30,
    fontWeight: "bold",
  },
  bigText: {
    textAlign: 'center',
    color: '#0873BE',
    fontSize: 25,
    fontWeight: "bold",
  },
  bigText2: {
    textAlign: 'center',
    color: '#b20c0c',
    fontSize: 25,
    fontWeight: "bold",
  }
});
