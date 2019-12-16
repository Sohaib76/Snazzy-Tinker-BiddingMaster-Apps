import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator, PermissionsAndroid, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardFriendComponent from '../others/CardFriendComponent';
import { getAllOfCollection } from '../../backend/firebase/utility';
import { _retrieveData } from '../../backend/AsyncFuncs';
import { GlobalConst } from '../../config/imports';
import Contacts from 'react-native-contacts';
import SearchComponent from '../others/SearchComponent';


export default class InviteFreindsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      allContacts: [],
      allUsers: []
    });
    this.getAllTinkerBuyUsers = this.getAllTinkerBuyUsers.bind(this);
    this.getAllContacts = this.getAllContacts.bind(this);
  }

  componentDidMount(){
    this.setState({ loader: true });

    Platform.OS === 'android' ?
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts.'
        }
      ).then(() => {
        this.getAllContacts()
      })
    :
      this.getAllContacts()

    this.setState({ leader: false });
    this.getAllTinkerBuyUsers();
  }

  getAllContacts(){
    Contacts.getAll((err, contacts) => {
      if (err) {
        console.log(err);
      }
      else {
        //console.log(contacts);
        this.setState({ allContacts: contacts });
      }
    });
  }

  async getAllTinkerBuyUsers(){
    await this.setState({ loader: true });
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    let allUsers = await getAllOfCollection('users');
    let allUsersData = []
    //TODO think of a better way to leave out the current user from the list
    for(let i=0; i<allUsers.length; i++){
      if(allUsers[i].userId == currentUserId)
        console.log('removed the current user from the list on invite screen');
      else
        allUsersData.push(allUsers[i]);
    }

    await this.setState({ allUsers: allUsersData, loader: false });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        <View style={styles.headerContainer}>
          <SearchComponent placeholder={'Search...'} />
        </View>
        <ScrollView style={styles.contentContainer}>

          <Text style={styles.labelText}>TINKER BUY USERS</Text>
          <CardFriendComponent data={this.state.allUsers} allUsers={true} navigation={this.props.navigation}/>

          <Text style={styles.labelText}>MY CONTACTS</Text>
          <CardFriendComponent data={this.state.allContacts} allContacts={true} navigation={this.props.navigation}/>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer:{
    flex: 0.1,
    marginTop: 3
  },
  contentContainer: {
    flex: 0.9,
  },
  labelText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    marginVertical: 10
  }
});
