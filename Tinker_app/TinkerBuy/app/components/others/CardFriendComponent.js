import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalComponent from '../others/ModalComponent';
import { saveData } from '../../backend/firebase/utility';
import { _retrieveData } from '../../backend/AsyncFuncs';
import { GlobalConst } from '../../config/imports';


export default class CardFriendComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      messages: [],
    }
    this.onPress = this.onPress.bind(this);
    this.onPressInvite = this.onPressInvite.bind(this);
  }

  onPress(name, location){
    if(this.props.chatMainScreen){
      this.props.navigation.navigate('ChatScreen', {name: name, location: location});
      return;
    }
    else if(this.props.allContacts){
      return;
    }
    else{
      this.props.navigation.navigate('ProfileScreen', {name: name, location: location});
    }
  }

  async onPressInvite(targetUserId){
    this.setState({ loader: true });
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    let currentUserName = await _retrieveData(GlobalConst.STORAGE_KEYS.userName);
    //TODO the method below will overwrite existing unseen data. Need to add to  array.
    await saveData('notifications', targetUserId, {unseen: {friendRequests: [{userName: currentUserName, userId: currentUserId}] } });
    this.setState({ loader: false });
    alert('A friend request has been sent')
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

      {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

      <View style={[styles.contentContainer, {flex: this.props.chatMainScreen ? 1 : 0.9}]}>
        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
            <View style={styles.listCardContainer}>

              <TouchableOpacity style={styles.row1} onPress={this.props.allContacts ? null : () => navigate('ProfileScreen', {name: item.givenName + ' ' + item.familyName, location: item.location})}>
                <Icon name="user-circle-o" color={'#71a1ed'} size={50}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.row2} onPress={() => this.onPress()}>
                <View style={styles.textContainer}>
                  <Text style={styles.boldText}>
                    {this.props.allContacts ?
                      item.givenName + ' ' + item.familyName
                    : null
                    }
                    {this.props.allUsers ?
                      item.userName
                      : null
                    }
                    {this.props.friendsScreen ?
                      item.userName
                      : null
                    }
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.smallText, {fontSize: this.props.allContacts ? 15 : this.props.allUsers ? 15 : this.props.chatMainScreen ? 14 : 12}]}>
                  {this.props.chatMainScreen ?
                    item.messageHeadline
                  : null
                  }
                  {this.props.allContacts ?
                    item.hasOwnProperty('phoneNumbers') ?  ( item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : null ) : null
                    : null
                  }
                  {this.props.allUsers ?
                    'USER ID: ' + item.userId
                    : null
                  }
                  {this.props.friendsScreen ?
                    'network or friends'
                    : null
                  }
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.row3}>
                {this.props.allContacts ?
                  <TouchableOpacity style={styles.textTopContainer} onPress={() => alert('A message with instructions has been sent to the user')}>
                    <Icon name="plus" color={'#71a1ed'} size={30}/>
                  </TouchableOpacity>
                  :
                  null
                }
                {this.props.allUsers ?
                  <TouchableOpacity style={styles.textTopContainer} onPress={() => this.onPressInvite(item.userId)}>
                    <Icon name="users" color={'#71a1ed'} size={30}/>
                  </TouchableOpacity>
                  :
                  null
                }
                {this.props.chatMainScreen ?
                  <View style={styles.textTopContainer}>
                    <Text style={[styles.smallText, {fontSize: 12, color: '#aaaaaa'}]}>{item.messageDate}</Text>
                  </View>
                : null
                }
                {this.props.friendsScreen ?
                  <TouchableOpacity style={[styles.textTopContainer, {borderLeftWidth: 1}]} onPress={() => navigate('ChatScreen', {name: item.userName, friendId: item.userId}) }>
                    <Icon name="comments" color={'#71a1ed'} size={30}/>
                  </TouchableOpacity>
                  : null
                }
              </TouchableOpacity>

            </View>
          }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: '#f7f7f7',
    padding: 10
  },
  contentContainer: {
    flex: 0.9,
  },
  listCardContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ffffff'
  },
  row1: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row2: {
    flex: 0.6
  },
  row3: {
    flex: 0.2,
  },
  textContainer: {
    paddingVertical: 5,
  },
  textTopContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d8d8d8'
    //borderBottomWidth: 1,
  },
  textBottomContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  normalText: {
    fontSize: 15,
    color: '#333333',
  },
  smallText: {
    color: '#333333',
  },
  bigText: {
    fontSize: 22,
    color: '#333333',
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
});
