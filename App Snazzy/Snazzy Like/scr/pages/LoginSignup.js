import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
import IMAGES from '../common/images';
import { Button, Icon } from 'native-base';
import COLORS from '../common/colors';
const {height:screenHeight, width:screenWidth} = Dimensions.get('window');

export default class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
      this.state = {

      };
    } static defaultNavigationOptions = {
      header: null,
      };

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <ImageBackground source = { IMAGES.BACKGROUND} style={{flex:1}}>
          <View style={{flex:0.4}}>
            <Button
                onPress={() => {this.props.navigation.navigate('App')}}
                style={{alignSelf:'flex-end',width:80,height:30, margin:20, borderWidth:0.7, borderColor:COLORS.WHITE, backgroundColor:'transparent'}} iconLeft rounded>
              <Image source={IMAGES.FORWARD} style={{padding:10,borderRadius:20,backgroundColor:'white',width:10,height:10, marginRight:12,marginLeft:10}} />
              <Text style={{fontSize:14, color:COLORS.WHITE}}>Skip</Text>
            </Button>
          </View>
          <View style={{flex:0.6,alignItems:'center',justifyContent:'flex-end',marginTop:10}}>
            <Text style={{marginBottom:30,fontSize:50,fontFamily:'italic', color:COLORS.WHITE, fontWeight:'bold'}}>
              Snazzy
            </Text>
            <Button style={{marginTop:20,alignSelf:'center',width:screenWidth * 0.8,height:50,backgroundColor:COLORS.FBBLUE}} iconLeft rounded>
                <Image source={IMAGES.FBICON} style={{width:20,height:20, marginRight:12,marginLeft:10}} />
              <Text style={{fontSize:14, color:COLORS.WHITE}}>Facebook</Text>
            </Button>
            <Button style={{marginTop:20,alignSelf:'center',width:screenWidth * 0.8,height:50,backgroundColor:COLORS.GRED}} iconLeft rounded>
                <Image source={IMAGES.GOOGLEICON} style={{width:23,height:23, marginRight:12,marginLeft:10}} />
              <Text style={{fontSize:14, color:COLORS.WHITE}}>Google</Text>
            </Button>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Button
                  onPress={() => {this.props.navigation.navigate('Register')}}
                  style={{marginTop:20,alignSelf:'flex-end',width:100,height:35, margin:20, borderWidth:0.7, borderColor:COLORS.WHITE, backgroundColor:'transparent'}} iconLeft rounded>
                <Image source={IMAGES.FORWARD} style={{padding:10,borderRadius:20,backgroundColor:'white',width:10,height:10, marginRight:12,marginLeft:10}} />
                <Text style={{fontSize:14, color:COLORS.WHITE}}>Signup</Text>
              </Button>
              <Button
                  onPress={() => {this.props.navigation.navigate('Login')}}
                  style={{marginTop:20,alignSelf:'flex-end',width:100,height:35, margin:20, borderWidth:0.7, borderColor:COLORS.WHITE, backgroundColor:'transparent'}} iconLeft rounded>
                <Image source={IMAGES.MAIL} style={{backgroundColor:'white',width:17,height:17, marginRight:12,marginLeft:10}} />
                <Text style={{fontSize:14, color:COLORS.WHITE}}>Login</Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
