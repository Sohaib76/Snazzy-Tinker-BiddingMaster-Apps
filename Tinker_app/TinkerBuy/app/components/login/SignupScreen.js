import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView,
  ActivityIndicator, Image, TextInput, BackHandler, TouchableOpacity,
  Dimensions, SafeAreaView, Text, Button, Platform
} from 'react-native';
import {_storeData, _retrieveData, _storeMultipleData} from '../../backend/AsyncFuncs';
import { connectFirebase, dataExist, saveData } from '../../backend/firebase/utility';
import GlobalConst from '../../config/GlobalConst';


export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      refererId: '123',
      name: '',
      password: '',
      loader: false,
      fromQrScanScreen: true,
    });
    this.onPress = this.onPress.bind(this);
    this.onBackFromScanScreen = this.onBackFromScanScreen.bind(this);
  }

  componentDidMount(){
    connectFirebase();
    //TODO only check on navigation back from QrScannerScreen
    this.props.navigation.addListener('willFocus', () => {
        _retrieveData(GlobalConst.STORAGE_KEYS.refererId).then((refererId) =>{
          if(this.state.fromQrScanScreen == true)
            this.setState({ refererId: refererId });
      });
    })
  }

  async onPress() {
    if(this.state.refererId == ''){
      alert('The referer Id field cannot be empty')
    }
    else{
      this.setState({loader: true});
      let callback = await dataExist('users', this.state.refererId);
      if(!callback){
        alert('No user exists with the referer Id that you just typed');
        return 0;
      }
      if(this.state.password == ''){
        alert('The password field cannot be empty');
      }
      if(callback){
        //TODO a better way to randomly generate userId
        //TODO password encryption
        //TODO initiate all required user collecions e.g. notificaitons and possibly move all initiation collections in one file
        let date = new Date();
        let userId = date.getTime().toString();
        let userDocRef = await saveData('users', userId, { userId: userId, userName: this.state.name, password: this.state.password})
        await _storeData(GlobalConst.STORAGE_KEYS.userId, userId);
        await _storeData(GlobalConst.STORAGE_KEYS.userName, this.state.name);
        await _storeData(GlobalConst.STORAGE_KEYS.hasLoggedOut, 'false');

        await _storeMultipleData([
          [GlobalConst.STORAGE_KEYS.userId, userId]
          [GlobalConst.STORAGE_KEYS.userName, this.state.name],
          [GlobalConst.STORAGE_KEYS.hasLoggedOut, 'false']
        ]);
        
        this.props.navigation.navigate('HomeScreen');
      }
      this.setState({loader: false});
    }
  }

  onBackFromScanScreen(flag){
    if(flag)
      this.setState({fromQrScanScreen: flag});
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
              <TextInput placeholder='Type or scan the referer Id' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={refererId => this.setState({ refererId })}
                value={this.state.refererId}
              />
              <TextInput placeholder='Your name' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={name => this.setState({ name })}
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
                  title="SIGN UP"
                  color={Platform.OS === 'ios' ? '#ffffff' : '#3399ff'}
                />
              </View>

              <View style={styles.loginButton}>
                <Button
                  onPress={() => navigate('QrScannerScreen', {onBackFromScanScreen: this.onBackFromScanScreen})}
                  title="SCAN"
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
