import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from '../others/LabelTextComponent';
import Label_Field from '../others/Label_Field';

export default class InviteFriendsMain extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.itemContainerSmall}>
          <Text style={styles.contentText}>
            Invite Friends to TinkerBuy
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.normalText}>
            You earn cashback from the people in your TinkerBUY network. When you invite friends, your TinkerBlJY network starts to grow and spread up to 5 levels deep. You will earn cashback everytime any of the people in your netuork shop for anything on TinkerBUY
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Image style={styles.imageStyle} source={require('../../photos/inviteFriends.png')} />
        </View>


        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('InviteFriendFromContactScreen')}
            title="Invite Friends From My Contact List"
            color="#71a1ed"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('InviteFriendFromQrScreen')}
            title="Invite Using My QR Code"
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
    flex: 0.35,
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
    resizeMode: 'contain',
  },
  contentText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 30,
    fontWeight: "bold",
  },
  contentText2: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 20,
    fontWeight: "bold",
  },
  normalText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 15,
    marginTop: 30
  },
  imageStyle:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
