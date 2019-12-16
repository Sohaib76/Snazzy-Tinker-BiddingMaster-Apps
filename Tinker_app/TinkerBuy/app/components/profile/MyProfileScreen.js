import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView,
  Image, Button, Dimensions, ImageBackground, ActivityIndicator, Alert, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field';
import LabelTextComponent from '../others/LabelTextComponent';
import CardImageComponent from '../others/CardImageComponent';
import ImagePickerComponent from '../others/ImagePickerComponent';
import { connectFirebase, updateData, uploadImage, getDocByObjectKey, getData } from '../../backend/firebase/utility';
import {_storeData, _retrieveData} from '../../backend/AsyncFuncs';
import GlobalConst from '../../config/GlobalConst';
import ImageResizer from 'react-native-image-resizer';



export default class MyProfileScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      loader2: false,
      oldName: '',
      oldImage: '',
      name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tinkerbuy-c8eee.appspot.com/o/loading.jpg?alt=media&token=47cc5213-ffdb-4def-b165-0343339fe206',
      imageB64String: '',
      imageName: '',
      imageType: '',
      uploadProgress: '-1'
    });
    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  componentDidMount(){
    connectFirebase();
    this.getUserData();
  }

  async getUserData(){
    await this.setState({ loader2: true });
    let userData = await getData('users', 'balawal Virk 4:50:5');

    await this.setState({
      oldName: userData.Name,
      oldImage: userData.ImageUrl,
      name: userData.Name,
      email: userData.Email,
      phone: userData.Phone,
      country: userData.Country,
      city: userData.City,
      imageUrl: userData.ImageUrl
    });

    await this.setState({ loader2: false });
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  onChange(text, identifier){
    if(identifier == 'image')
      this.setState({
        imageB64String: text.data,
        imageName: text.fileName,
        imageUrl: Platform.OS === 'ios' ? text.uri : text.path,
        imageType: text.type
      });
    else
      text.then((text) => {
        this.setState({ [identifier]: text });
      });
  }

  async onPress(){
    await this.setState({ loader: true });
    //TODO change with userId
    let docRef = await getDocByObjectKey('users', 'Name', this.state.oldName);
    this.setState({ oldName: this.state.name })

    jsonObect = {
      Name: this.state.name,
      Email: this.state.email,
      Country: this.state.country,
      City: this.state.city,
      Phone: this.state.phone,
    }

    let iteratorNum = 0;

    await updateData('users', docRef.id, jsonObect);

    if(this.state.oldImage != this.state.imageUrl){
      let resizedImage = await ImageResizer.createResizedImage(this.state.imageUrl, Dimensions.get('window').width, Dimensions.get('window').height/3, 'JPEG', 70);
        // response.uri is the URI of the new image that can now be displayed, uploaded...
        // response.path is the path of the new image
        // response.name is the name of the new image with the extension
        // response.size is the size of the new image
      await this.setState({
        imageName: resizedImage.name,
        imageUrl: resizedImage.uri,
      });

      await uploadImage(this.state.imageUrl, this.state.imageType, 'ProfilePics', this.state.imageName, 'users', docRef);
      let that = this;

      let refreshId = setInterval(function() {
        iteratorNum += 1;
        _retrieveData(GlobalConst.STORAGE_KEYS.imageUploadProgress).then((data) => {
          that.setState({uploadProgress: data});
          if(data == '100') {
            clearInterval(refreshId);
            Alert.alert( '', 'Profile is updated',
              [ {text: 'OK', onPress: () => that.props.navigation.goBack()} ] );
          }
          if(data == '-1') {
            clearInterval(refreshId);
            Alert.alert( '', 'Something went wrong',
              [ {text: 'OK', onPress: () => that.props.navigation.goBack()} ] );
          }
          if(iteratorNum == 120) {
            clearInterval(refreshId);
            Alert.alert( '', 'Picture uploading taking too long. Please upload a low resolution picture',
              [ {text: 'OK', onPress: () => that.props.navigation.goBack()} ] );
          }
        })
      }, 1000);

    }
    else {
      Alert.alert( '', 'Profile is updated',
        [ {text: 'OK', onPress: () => this.props.navigation.goBack()} ] );
    }

    await this.setState({loader: false});
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentContainer}>

          <View style={styles.imageContainer}>
            {this.state.loader2 ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            <ImageBackground style={styles.backgroundImage} resizeMode={'contain'} source={{uri: this.state.imageUrl + '?' + new Date()}}>
              <ImagePickerComponent onChange={(imageData) => this.onChange(imageData, 'image')}/>
            </ImageBackground>
            <Icon
              onPress={() => goBack()}
              name={"arrow-left"}
              style={styles.arrowContainer}
              color={'#fff'}
              size={30}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field fieldFlex={3} label={'Name'} onChange={(text) => this.onChange(text, 'name')}
              textInputHeight={50} placeholder={this.state.name}
              onSubmitEditing={() => { this.focusNextField('emailField') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field fieldFlex={3} label={'Email'} onChange={(text) => this.onChange(text, 'email')}
              textInputHeight={50} placeholder={this.state.email}
              onRef={(ref) => { this.inputs['emailField'] = ref }}
              onSubmitEditing={() => { this.focusNextField('phoneField') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field fieldFlex={3} label={'Phone Number'} onChange={(text) => this.onChange(text, 'phone')}
              textInputHeight={50} placeholder={this.state.phone}
              onRef={(ref) => { this.inputs['phoneField'] = ref }}
              onSubmitEditing={() => { this.focusNextField('cityField') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field fieldFlex={3} label={'City'} onChange={(text) => this.onChange(text, 'city')}
              textInputHeight={50} placeholder={this.state.city}
              onRef={(ref) => { this.inputs['cityField'] = ref }}
              onSubmitEditing={() => { this.focusNextField('countryField') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field fieldFlex={3} label={'Country'} onChange={(text) => this.onChange(text, 'country')}
              textInputHeight={50} placeholder={this.state.country}
              onRef={(ref) => { this.inputs['countryField'] = ref }}
            />
          </View>

          <View style={styles.fieldContainer2}>
            <Button
              onPress={() => this.onPress()}
              title="UPDATE"
              color="#71a1ed"
            />
            {this.state.uploadProgress != '-1' ? <Text style={styles.loadingText}>Upload Completed: {this.state.uploadProgress}%</Text>
              : null }
            {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
          </View>

        </ScrollView>
      </SafeAreaView>
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
  imageContainer: {
    height: Dimensions.get('window').height/3,
    width: '100%',
  },
  fieldContainer: {
    flex:1,
    marginVertical: 5,
    marginHorizontal: 25,
  },
  fieldContainer2: {
    flex:1,
    marginVertical: 25,
    marginHorizontal: 25,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  arrowContainer: {
    position: 'absolute',
    top: '5%',
    left: '3%'
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
