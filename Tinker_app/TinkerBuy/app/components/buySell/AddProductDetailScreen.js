import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ImageBackground, Alert, TouchableOpacity,
  ScrollView, Image, Button, Dimensions, Platform, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field';
import LabelTextComponent from '../others/LabelTextComponent';
import ModalComponent from '../others/ModalComponent';
import DropdownComponent from '../others/DropdownComponent';
import ImagePickerComponent from '../others/ImagePickerComponent';
import ImageResizer from 'react-native-image-resizer';
import { connectFirebase, addToArray, uploadImage, getData } from '../../backend/firebase/utility';
import { GlobalConst } from '../../config/imports';
import { _retrieveData } from '../../backend/AsyncFuncs';


export default class AddProductDetailScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.state = ({
      loader: false,
      name: '',
      price: '',
      keywords: '',
      website: '',
      description: '',
      market: '',
      currency: '',
      language: '',
      imageSelected: false,
      uploadProgress: '-2'
    });
    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  componentDidMount(){
    connectFirebase();
    _retrieveData(GlobalConst.STORAGE_KEYS.userId).then((userId) => this.setState({currentUserId: userId}) );
  }

  async onPress(){
    this.setState({ loader: true });

    let currentUserName = await _retrieveData(GlobalConst.STORAGE_KEYS.userName);
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    let date = new Date();

    let jsonObject = {
      name: this.state.name,
      price: this.state.price,
      keywords: this.state.keywords,
      website: this.state.website,
      description: this.state.description,
      market: this.state.market,
      language: this.state.language,
      currency: this.state.currency,
      imageUrl: '',
      status: 'Pending',
      mainCategoryId: this.props.navigation.state.params.mainCategoryId,
      subCategoryId: this.props.navigation.state.params.subCategoryId,
      subCategoryTitle: this.props.navigation.state.params.subCategoryTitle,
      onlineProduct: this.props.navigation.state.params.onlineProduct,
      userId: currentUserId,
      userName: currentUserName,
      date: date.toString()
    }

    if(this.state.imageSelected){
      let docRef  = await addToArray('products', this.state.currentUserId, 'products', jsonObject);
      await this.uploadImage(docRef);
    }
    else {
      alert('A product image is required')
    }

    this.setState({ loader: false });
  }

  async uploadImage(docRef){
    let resizedImage = await ImageResizer.createResizedImage(this.state.imageUrl, Dimensions.get('window').width, Dimensions.get('window').height/3, 'JPEG', 80);

    await this.setState({
      imageName: resizedImage.name,
      imageUrl: resizedImage.uri,
    });

    await uploadImage(this.state.imageUrl, this.state.imageType, 'products/' + this.state.imageName,
    this.state.imageName, 'products', docRef, true);

    let that = this;
    let iteratorNum = 0;

    //show uploading progress after every second
    let refreshId = setInterval(async function() {
      iteratorNum += 1;
      let data = await _retrieveData(GlobalConst.STORAGE_KEYS.imageUploadProgress);
      that.setState({uploadProgress: data});
      if(data == '100') {
        clearInterval(refreshId);
        Alert.alert( '', 'Your product has  been submitted for approval',
          [ {text: 'OK', onPress: () => that.props.navigation.navigate('SellScreen')} ] );
      }
      if(data == '-1') {
        clearInterval(refreshId);
        Alert.alert( '', 'Something went wrong. The image could not be uploaded',
          [ {text: 'OK', onPress: () => that.props.navigation.goBack()} ] );
      }
      if(iteratorNum == 90) {
        clearInterval(refreshId);
        Alert.alert( '', 'Image uploading taking too long. Please upload a low resolution picture',
          [ {text: 'OK', onPress: () => that.props.navigation.goBack()} ] );
      }
    }, 1000);
  }

  onChange(text, identifier){
    text.then((text) =>{
      this.setState({ [identifier]: text })
    })
  }

  onChangeImage(imageData){
    this.setState({
      imageSelected: true,
      imageB64String: imageData.data,
      imageName: imageData.fileName,
      imageUrl: Platform.OS === 'ios' ? imageData.uri : imageData.path,
      imageType: imageData.type
    });
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    const marketData = [
      {value: 'UK'}, {value: 'USA'}, {value: 'France'},
    ]
    const currencyData = [
      {value: '€'}, {value: '£'}, {value: '$'},
    ]
    const languageData = [
      {value: 'English'}, {value: 'German'}, {value: 'French'},
    ]

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentContainer}>

          <ImageBackground style={styles.imageContainer} source={require('../../photos/upload_image.jpg')}>
            <ImagePickerComponent onChange={(imageData) => this.onChangeImage(imageData)}/>
          </ImageBackground>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'PRODUCT NAME'}
              placeholder={''}
              textInputHeight={50}
              onChange={(text) => this.onChange(text, 'name')}
              onSubmitEditing={() => { this.focusNextField('price') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'PRICE'}
              placeholder={''}
              textInputHeight={50}
              onChange={(text) => this.onChange(text, 'price')}
              keyboardType={'number-pad'}
              onRef={(ref) => { this.inputs['price'] = ref }}
              onSubmitEditing={() => {  }}
            />
          </View>

{/*          <View style={styles.fieldContainer2}>
            <Text style={styles.labelText}>MARKET</Text>
            <ModalComponent iconName={'th-list'} _flex={0.8} filter_1={'MARKETS LIST'} filter_2={''}/>
          </View>*/}

          <View style={styles.fieldContainer}>
            <DropdownComponent label={'MARKET'}
              data={marketData}
              labelInBuilt={this.state.market == '' ? 'Select' : ''}
              onChangeText={(value, index, data) => this.setState({ market: data[index].value })}
              value={this.state.market}
            />
          </View>

          <View style={styles.fieldContainer}>
            <DropdownComponent label={'CURRENCY'}
              data={currencyData}
              labelInBuilt={this.state.currency == '' ? 'Select' : ''}
              onChangeText={(value, index, data) => this.setState({ currency: data[index].value })}
              value={this.state.currency}
            />
          </View>

          <View style={styles.fieldContainer}>
            <DropdownComponent label={'LANGUAGE'}
              data={languageData}
              labelInBuilt={this.state.language == '' ? 'Select' : ''}
              onChangeText={(value, index, data) => this.setState({ language: data[index].value })}
              value={this.state.language}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'PRODUCT DESCRIPTION'}
              placeholder={''}
              textInputHeight={100}
              onChange={(text) => this.onChange(text, 'description')}
              multiline={true}
              onRef={(ref) => { this.inputs['description'] = ref }}
              onSubmitEditing={() => { this.focusNextField('keywords') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'KEYWORDS'}
              placeholder={''}
              textInputHeight={100}
              onChange={(text) => this.onChange(text, 'keywords')}
              multiline={true}
              onRef={(ref) => { this.inputs['keywords'] = ref }}
              onSubmitEditing={() => { this.focusNextField('website') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'PRODUCT WEBSITE'}
              placeholder={''}
              textInputHeight={50}
              onChange={(text) => this.onChange(text, 'website')}
              onRef={(ref) => { this.inputs['website'] = ref }}
              onSubmitEditing={() => { }}
            />
          </View>

          <View style={styles.fieldContainer3}>
            {this.state.uploadProgress != '-2' ? <Text style={styles.loadingText}>Upload Completed: {this.state.uploadProgress}%</Text>
              : null }
            <Button
              onPress={() => this.onPress()}
              title="SUBMIT FOR APPROVAL"
              color="#71a1ed"
            />
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
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 25,
  },
  fieldContainer3: {
    flex:1,
    marginVertical: 15,
    marginHorizontal: 35,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  labelText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: '28%',
    marginHorizontal: 5,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
