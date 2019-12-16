import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Button, Platform } from 'react-native';
import { styles2, GlobalConst, Icon, FilterHeaderComponent, CardImageComponent } from '../../config/imports';
import { getData, addToArray, saveData, deleteData } from '../../backend/firebase/utility';
import { _retrieveData } from '../../backend/AsyncFuncs';
import NotificationComponent from '../others/NotificationComponent';


export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      showNotifications: false,
      friendRequestUserName: '',
      currentUserId: '',
      friendRequestUserId: ''
    });
    this.getNewNotifications = this.getNewNotifications.bind(this);
    this.onNotificationOKPress = this.onNotificationOKPress.bind(this);
    this.onNotificationCancelPress = this.onNotificationCancelPress.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cashback : $24.95',
      headerRight: (
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.toggleDrawer() }>
          <Icon name="navicon" color={'#71a1ed'} size={40}/>
        </TouchableOpacity>
      ),
      headerLeft: (
        <Image
          style={styles.imageStyle3}
          source={require('../../photos/logo.png')}
          fadeDuration={0}
        />
      )
    };
  };

  componentDidMount(){
    this.props.navigation.addListener('willFocus', () => {
      this.getNewNotifications();
    })
  }

  async getNewNotifications(){
    await this.setState({ loader: true });
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    this.setState({ currentUserId: currentUserId });

    let unseenData = await getData('notifications', currentUserId, 'unseen');
    //TODO check if unseenData exists
    //TODO iterate around all unseen friend requests
    if(unseenData.friendRequests)
      if(unseenData.friendRequests.length > 0){
        await this.setState({
          showNotifications: true,
          friendRequestUserName: unseenData.friendRequests[0].userName,
          friendRequestUserId: unseenData.friendRequests[0].userId
         });
      }

    //TODO delete unseen here
    await this.setState({ loader: false });
  }

  async onNotificationOKPress(){
    await this.setState({ showNotifications: false });
    await addToArray('friends', this.state.currentUserId, 'friends', {userId: this.state.friendRequestUserId, userName: this.state.friendRequestUserName} );
    await deleteData('notifications', this.state.currentUserId, 'unseen.friendRequests')
    alert('Friend added');
  }

  async onNotificationCancelPress(){
    await this.setState({ showNotifications: false });
  }

  render() {
    const data = [
      {title: 'Bought and shared by John', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared by Steward', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook Pro 13 inches', seller: 'Apple', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Apple', userTitle: 'Some title description here', boughtNumber: '12'},
      {title: 'Bought and shared by John', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared by Steward', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook Pro 13 inches', seller: 'Apple', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Apple', userTitle: 'Some title description here', boughtNumber: '12'},
      {title: 'Bought and shared by John', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared by Steward', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Featured item', seller: 'Sponsored', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Apple', userTitle: 'Buy from us', boughtNumber: '12'},
      {title: 'Bought and shared by John', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared by Steward', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Featured item', seller: 'Sponsored', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Apple', userTitle: 'Buy from us', boughtNumber: '12'},
    ];

    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

        <View style={styles.header}>
          <NotificationComponent show={this.state.showNotifications} notificationText={this.state.friendRequestUserName + ' sent you a friend request'}
            buttonText1={'Accept'} buttonText2={'Decline'} onPress1={() => this.onNotificationOKPress()} onPress2={() => this.onNotificationCancelPress()} />
          <FilterHeaderComponent navigation={this.props.navigation} isRow={false}/>
        </View>

        <View style={styles.contentContainer}>
          <CardImageComponent data={data} navigation={this.props.navigation} viewRequired={'big'}
            extraData={this.state} onRefresh={() => this.getNewNotifications()} refreshing={this.state.loader}
          />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    padding: 5,
  },
  contentContainer: {
    flex: 0.88,
    marginTop: 10,
  },
  itemsContainer: {
    flex: 1,
    marginVertical: 20,
  },
  titleText: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center'
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
