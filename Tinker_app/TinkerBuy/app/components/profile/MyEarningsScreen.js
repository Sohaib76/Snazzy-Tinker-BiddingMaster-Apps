import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';

export default class MyEarningsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cashback : $24.95',
      headerRight: (
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.toggleDrawer() }>
          <Icon name="navicon" color={'#71a1ed'} size={40}/>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <ScrollView>

          <View style={[styles.contentContainer2,{marginTop: 10}]}>
            <NetworkComponent Label1={''} Label3={'Earnings'} Label2={''} hideIcon={true}/>
          </View>
          <View style={styles.contentContainer}>
            <NetworkComponent Label1={'12 May'} Label3={'$32'} Label2={''} hideIcon={true}/>
          </View>
          <View style={styles.contentContainer}>
            <NetworkComponent Label1={'04 Aug'} Label3={'$45'} Label2={''} hideIcon={true}/>
          </View>
          <View style={styles.contentContainer}>
            <NetworkComponent Label1={'10 Sept'} Label3={'$53'} Label2={''} hideIcon={true}/>
          </View>
          <View style={styles.contentContainer}>
            <NetworkComponent Label1={'27 Nov'} Label3={'$21'} Label2={''} hideIcon={true}/>
          </View>
          <View style={styles.contentContainer}>
            <NetworkComponent Label1={'13 Dec'} Label3={'$67'} Label2={''} hideIcon={true}/>
          </View>
          <View style={styles.contentContainer}>
            <NetworkComponent Label1={'12 May'} Label3={'$32'} Label2={''} hideIcon={true}/>
          </View>
          <View style={styles.contentContainer}>
            <NetworkComponent Label1={'04 Aug'} Label3={'$45'} Label2={''} hideIcon={true}/>
          </View>
          <View style={styles.contentContainer2}>
          </View>
          <View style={styles.contentContainer}>
            <NetworkComponent Label1={''} Label3={'$300'} Label2={''} hideIcon={true}/>
          </View>



        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'stretch',
    padding: 10,
  },
  contentContainer2: {
    flex: 1,
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: '#71a1ed',
    padding: 10,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  labelContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  pickupButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
});
