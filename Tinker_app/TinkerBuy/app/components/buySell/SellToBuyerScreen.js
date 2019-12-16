import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from '../others/LabelTextComponent';
import Label_Field from '../others/Label_Field';
import QRCode from 'react-native-qrcode';
import { _retrieveData } from '../../backend/AsyncFuncs';
import GlobalConst from '../../config/GlobalConst';
import { connectFirebase, getData } from '../../backend/firebase/utility';



export default class SellToBuyerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      userId: '',
    });
  }

  componentDidMount(){
    connectFirebase();
    this.getData();
  }

  async getData(){
    let userId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    await this.setState({ userId: userId });
    let sellerName = await getData('sellers', this.state.userId, 'companyName');
    if(!sellerName)
      sellerName = await getData('users', this.state.userId, 'userName');
    await this.setState({ sellerName: sellerName });
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.contentText}>
            SELL TO BUYER
          </Text>
          <Text style={styles.normalText}>
            Give buyer your QR code to scan
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <QRCode
            value={this.state.userId + ' ' + this.state.sellerName}
            size={200}
          />
          <View style={{marginTop: 10}}>
            <Text style={styles.contentText}>
              {this.state.userId}
            </Text>
          </View>
        </View>

        {/*<View style={styles.itemContainerSmall}>
          <Text style={styles.normalText}>
            When the payment has been completed click the button below to confirm that the buyer really paid you.
          </Text>
        </View>*/}


        {/*<View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('ConfirmSaleDetailScreen', {title: 'UNCONFIRMED SALES', status: 'unconfirmed'})}
            title="CONFIRM PAYMENT"
            color="#71a1ed"
          />
        </View>*/}

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
    flex: 0.5,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 1,
  },
  itemContainerSmall: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 1,
  },
  buttonContainer: {
    flex: 0.2,
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
  normalText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 15,
  },
});
