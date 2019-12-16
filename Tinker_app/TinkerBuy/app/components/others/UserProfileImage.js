import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { styles, styles2, GlobalConst, Icon, TextInputComponent, ArrowBackComponent,
        ButtonComponent, ListComponent } from '../../config/imports';
import { withNavigation } from 'react-navigation';
import { connectFirebase, getData } from '../../backend/firebase/utility';
import { _retrieveData } from '../../backend/AsyncFuncs';



class UserProfileImage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      userId: ''
    });
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount(){
    connectFirebase();
    _retrieveData(GlobalConst.STORAGE_KEYS.userId).then((currentUserId) =>{
      this.setState({userId: currentUserId})
    });
    _retrieveData(GlobalConst.STORAGE_KEYS.userName).then((currentUserName) =>{
      this.setState({userName: currentUserName})
    });
  }


  async onPress(){
    this.props.navigation.navigate('MyProfileScreen');
  }

  render() {
    return (
        <TouchableOpacity style={[styles.container2, styles.center, styles2.marginTop(20)]}>
          <Icon
            onPress={() => this.onPress()}
            name={"user-circle"}
            color={GlobalConst.COLOR.GREY}
            size={GlobalConst.ICONSIZEBIG}
          />
          <Text style={[styles2.fontStyle(20, 'normal', GlobalConst.COLOR.BLACK), styles.selfCenter, styles2.marginTop(5), styles2.marginBottom(20)]}>{this.state.userName}</Text>
          <Text style={[styles2.fontStyle(20, 'normal', GlobalConst.COLOR.BLACK), styles.selfCenter, styles2.marginTop(5), styles2.marginBottom(20)]}>ID: {this.state.userId}</Text>
        </TouchableOpacity>

    );
  }
}

export default withNavigation(UserProfileImage);
