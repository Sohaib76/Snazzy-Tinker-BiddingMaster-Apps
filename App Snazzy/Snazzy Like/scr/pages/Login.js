import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import IMAGES from '../common/images';
import { Button, Icon, Input, Form, Item, Label } from 'native-base';
import COLORS from '../common/colors';
const {height:screenHeight, width:screenWidth} = Dimensions.get('window');

export default class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        forgotPassword: false
      };
    } static defaultNavigationOptions = {
      header: null,
      };

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <ImageBackground source={IMAGES.BACKGROUND} style={{flex:1}}>
          <Button
            onPress={() => {this.props.navigation.goBack()}}
            style={{alignSelf:'flex-start',width:70,height:70,margin:10, backgroundColor:'none'}} rounded>
            <Image source={IMAGES.BACKICON} style={{alignSelf:'center',width:30,height:30,borderRadius:20, marginRight:12,marginLeft:10}} />
          </Button>
          {this.state.forgotPassword ?
          <View style={{alignSelf:'center',marginTop:50,width:screenWidth * 0.9, height:screenHeight * 0.25,borderRadius:10, backgroundColor:COLORS.WHITE}}>
            <TouchableOpacity
                onPress={() => {this.setState({ forgotPassword : false})}}
                style={{position:'absolute', top:-35, left:10, width:'30%',height:'30%'}}>
              <Image source= {IMAGES.BACKWHITE} style={{width:35,height:40}} />
            </TouchableOpacity>
            <Form style={{paddingHorizontal:15, paddingVertical:35}}>
              <Item>
                <Input
                  placeholder='Email'
                />
              </Item>
            </Form>
            <TouchableOpacity
                onPress={() => { Alert.alert('Email has been sent!')}}
                style={{position:'absolute', bottom:-20,alignSelf:'center'}}>
              <Image source = {IMAGES.FORWARDGREY} style={{width:60,height:60, zIndex:1}} />
            </TouchableOpacity>
          </View>
            :
          <View style={{alignSelf:'center',marginTop:50,width:screenWidth * 0.9, height:screenHeight * 0.38,borderRadius:10, backgroundColor:COLORS.WHITE}}>
            <Form style={{paddingHorizontal:15, paddingVertical:35}}>
              <Item>
                <Input
                  placeholder='Email'
                />
              </Item>
              <Item>
                <Input
                  placeholder='Password'
                />
              </Item>
            </Form>
            <TouchableOpacity onPress={() => {this.setState({ forgotPassword: true})}}>
              <Text style={{fontSize:13, fontWeight:'bold', color:COLORS.GRED, alignSelf:'flex-end', marginRight:20}}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{position:'absolute', bottom:-20,alignSelf:'center'}}>
              <Image source = {IMAGES.FORWARDGREY} style={{width:60,height:60, zIndex:1}} />
            </TouchableOpacity>
          </View> }
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
