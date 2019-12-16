import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView,
  ActivityIndicator, Image, TextInput, BackHandler, TouchableOpacity,
  Dimensions, SafeAreaView, Text, Button, Platform
} from 'react-native';
import {_storeData, _retrieveData, _storeMultipleData} from '../../backend/AsyncFuncs';
import { connectFirebase, getDocByObjectKey } from '../../backend/firebase/utility';
import GlobalConst from '../../config/GlobalConst';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      userId: '',
      password: '',
      loader: false,
    });
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount(){
    connectFirebase();
    _retrieveData(GlobalConst.STORAGE_KEYS.userId).then((userId) => {
      if(userId != undefined)
        this.setState({ userId: userId })
    });
  }

  async onPress() {
    if(this.state.userId == '' || this.state.password == ''){
      alert('The user Id or password field cannot be empty')
    }
    else{
      this.setState({loader: true});
      let callback = await getDocByObjectKey('users', 'userId', this.state.userId);
      this.setState({loader: false});
      if(callback._document.proto.fields.password.stringValue == this.state.password) {
        await _storeData(GlobalConst.STORAGE_KEYS.userId, callback._document.proto.fields.userId.stringValue);
        await _storeData(GlobalConst.STORAGE_KEYS.userName, callback._document.proto.fields.userName.stringValue);
        await _storeData(GlobalConst.STORAGE_KEYS.hasLoggedOut, 'false');
        // await _storeMultipleData([
        //   [GlobalConst.STORAGE_KEYS.userId, callback._document.proto.fields.userId.stringValue]
        //   [GlobalConst.STORAGE_KEYS.userName, callback._document.proto.fields.userName.stringValue],
        //   [GlobalConst.STORAGE_KEYS.hasLoggedOut, 'false']
        // ]);
        this.props.navigation.navigate('HomeScreen');
      }
      else {
        alert('Incorrect password')
      }

    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView contentContainerStyle={styles.container} style={styles.container} keyboardVerticalOffset={-64}>
        <ScrollView>

            <View style={styles.center}>
              <View style={{ paddingTop: '2%'}}>
                <Image style={styles.logo} resizeMode="contain" source={require('../../photos/logo.png')} />
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Text style={{ fontSize: 30, color: '#6b6b6b' }}></Text>
              </View>
            </View>

            <View style={styles.center}>
              <TextInput placeholder='Type your user Id' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={userId => this.setState({ userId })}
                onSubmitEditing={() => this.onPress() }
                value={this.state.userId}
              />
              <TextInput placeholder='Password' secureTextEntry returnKeyType='go'
                keyboardAppearance='default' style={styles.textbox}
                onChangeText={password => this.setState({ password })}
              />
            </View>

            <View style={styles.buttonContianer}>

              <View style={styles.loginButton}>
                <Button
                  onPress={() => this.onPress()}
                  title="SIGN IN"
                  color={Platform.OS === 'ios' ? '#ffffff' : '#3399ff'}
                />
              </View>

              <View style={styles.loginButton}>
                <Button
                  onPress={() => navigate('SignupScreen')}
                  title="SIGN UP"
                  color={Platform.OS === 'ios' ? '#ffffff' : '#3399ff'}
                />
              </View>

              {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            </View>

          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContianer: {
    flex: 0.3,
    justifyContent: 'center',
  },
  textbox: {
    fontSize: 18,
    textAlign: 'left',
    width: 320,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: '#c0c3c3',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    color: "#000000",
  },
  logo: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/5,
  },
  loginButton: {
    backgroundColor: Platform.OS === 'ios' ? '#3897f1' : 'rgba(0,0,0,0)',
    borderRadius: 5,
    height: 45,
    marginHorizontal: Dimensions.get('window').width/10,
    marginTop: 20
  },
});
