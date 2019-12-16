import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { getData, addToArray, saveData } from '../../backend/firebase/utility';
import { _retrieveData } from '../../backend/AsyncFuncs';
import { GlobalConst } from '../../config/imports';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class ChatScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.onSend = this.onSend.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };

  componentDidMount() {
    //get current user Id and then his message history
    _retrieveData(GlobalConst.STORAGE_KEYS.userId).then((userId) => {
      this.setState({ currentUserId: userId }, () => this.getMessages() )
    })
  }



  async getMessages(){
    const friendId = this.props.navigation.state.params.friendId;
    let messages = await getData('chats', this.state.currentUserId, friendId);
    if(messages)
      await this.setState({ messages: messages });
    else
      return 0;

    let that = this;
    firebase.firestore().collection('chats').doc(this.state.currentUserId)
    .onSnapshot(function(doc) {
        that.setState({ messages: doc.data()[friendId].reverse() });
    });
  }



  async onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    messages[0].createdAt = messages[0].createdAt.toString();

    await addToArray('chats', this.state.currentUserId, this.props.navigation.state.params.friendId, messages[0]);
    messages[0].user._id = 2;
    await addToArray('chats', this.props.navigation.state.params.friendId, this.state.currentUserId, messages[0]);
    messages[0].user._id = 1;
  }


  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        isAnimated={true}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
