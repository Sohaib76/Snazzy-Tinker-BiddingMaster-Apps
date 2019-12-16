import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from '../others/LabelTextComponent';
import Label_Field from '../others/Label_Field';
import QRCode from 'react-native-qrcode';
import { _retrieveData } from '../../backend/AsyncFuncs';
import GlobalConst from '../../config/GlobalConst';


export default class InviteFriendFromQrScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      userId: '',
    });
  }

  componentDidMount(){
    _retrieveData(GlobalConst.STORAGE_KEYS.userId).then((userId) =>{
      this.setState({ userId: userId })
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const userId = this.state.userId
    return(
      <View style={styles.container}>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.contentText}>
            INVITE YOUR FRIENDS
          </Text>
        </View>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.normalText}>
            Scan the QR code from your friend's phone or type in the TinkerBuy ID manually which is given below
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <QRCode
            value={this.state.userId}
            size={200}
          />
          <View style={{marginTop: 20}}>
            <Text style={styles.contentText}>
              {this.state.userId}
            </Text>
          </View>
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
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
  },
  itemContainerSmall: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 1,
  },
  buttonContainer: {
    flex: 0.3,
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
