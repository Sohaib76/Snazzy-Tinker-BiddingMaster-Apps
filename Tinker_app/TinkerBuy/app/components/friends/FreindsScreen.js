import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardFriendComponent from '../others/CardFriendComponent';
import { getData } from '../../backend/firebase/utility';
import { _retrieveData } from '../../backend/AsyncFuncs';
import { GlobalConst } from '../../config/imports';


export default class FreindsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      visibility: false,
      loader: false,
      friends: []
    });
    this.getFriends = this.getFriends.bind(this);
  }

  componentDidMount(){
    this.props.navigation.addListener('willFocus', () => {
      this.getFriends();
    })
  }

  async getFriends(){
    this.setState({ loader: true });
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    let friends = await getData('friends', currentUserId);
    if(friends.friends == undefined){
      this.setState({ loader: false });
      alert('You have no friends in your friend list')
    }
    else if(friends.friends.length > 0)
      this.setState({ friends: friends.friends, loader: false });
  }

  render() {
    return (
      <View style={styles.container}>
          {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
          <CardFriendComponent data={this.state.friends} friendsScreen={true} navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 0.1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  contentContainer: {
    flex: 0.9,
  },
});
