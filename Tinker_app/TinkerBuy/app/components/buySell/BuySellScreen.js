import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import CardTextComponent from '../others/CardTextComponent';


export default class BuySellScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cashback : $24.95',
      headerLeft: (
        <Image
          style={styles.imageStyle3}
          source={require('../../photos/logo.png')}
          fadeDuration={0}
        />
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => navigate('BuyScreen')} style={styles.contentContainer}>
          <Text style={styles.text}>BUY</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('SellScreen')} style={styles.contentContainer}>
          <Text style={styles.text}>SELL</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  contentContainer: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#71a1ed'
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
