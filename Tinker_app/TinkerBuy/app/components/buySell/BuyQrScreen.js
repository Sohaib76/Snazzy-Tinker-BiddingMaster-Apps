import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import QRCode from 'react-native-qrcode';


export default class BuyQrScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      indexOfUnconfirmedSale: 0,
    });
  }

  componentDidMount(){
    this.setState({ indexOfUnconfirmedSale: this.props.navigation.state.params.indexOfUnconfirmedSale });
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.itemContainer}>
          <Text style={styles.contentText}>
            Give the Seller to scan the QR Code below
          </Text>
          <Text style={styles.contentText}>
            Or ask him to manually confirm it
          </Text>

        </View>

        <View style={styles.itemContainer}>
          <QRCode
            value={'confirmSale' + ' ' + this.state.indexOfUnconfirmedSale}
            size={200}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('BuySellScreen')}
            title="GO TO HOME"
            color="#71a1ed"
          />
          <Text style={styles.contentText}>
            {this.state.indexOfUnconfirmedSale}
          </Text>
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
    fontSize: 20,
    fontWeight: "normal",
  },
});
