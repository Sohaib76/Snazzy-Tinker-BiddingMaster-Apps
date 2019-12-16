import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { withNavigation } from 'react-navigation';
import {_storeData} from '../../backend/AsyncFuncs';
import GlobalConst from '../../config/GlobalConst';


class SignOutComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
  }

  async signout(){
    await _storeData(GlobalConst.STORAGE_KEYS.hasLoggedOut, 'true');
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <TouchableOpacity style={styles.container}
        onPress={() => this.signout() }>
         <Text style={styles.logoutText}>
          LOG OUT
         </Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
});


export default withNavigation(SignOutComponent);
