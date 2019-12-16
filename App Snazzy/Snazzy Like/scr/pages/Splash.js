import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Image
} from 'react-native';
import IMAGES from '../common/images';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'MainStack' : 'Auth');
  };

  componentWillMount(){
    setTimeout(() => {
          this.props.navigation.navigate('MainStack');
       }, 1500)
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image style={{height:"100%", width:"100%"}} source={IMAGES.SPLASH} />
      </View>
    );
  }
}
