import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, ScrollView, Button, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field';
import LabelTextComponent from '../others/LabelTextComponent';
import CardImageComponent from '../others/CardImageComponent';
import DropdownFieldComponent from '../others/DropdownFieldComponent';
import DropdownComponent from '../others/DropdownComponent';
import {countriesList} from '../../backend/data/CountriesList';
import { connectFirebase, getData, saveData } from '../../backend/firebase/utility';
import { GlobalConst } from '../../config/imports';
import { _retrieveData } from '../../backend/AsyncFuncs';



export default class SellerInfoScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.state = ({
      loader: false,
      currentUserId: '',
      companyName: '',
      contactPerson: '',
      telephone: '',
      email: '',
      shopDescription: '',
      shopAddress: '',
//      companySizeId: '',
      companySize: '',
      countryName: '',
      currency: ''
    });
    this.getData = this.getData.bind(this);
    this.onPress = this.onPress.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  componentDidMount(){
    connectFirebase();
    this.getData();
  }

  async getData(){
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    await this.setState({ currentUserId: currentUserId });
    let sellerInfo = await getData('sellers', this.state.currentUserId);
    await this.setState({
      companyName: sellerInfo.companyName,
      contactPerson: sellerInfo.contactPerson,
      telephone: sellerInfo.telephone,
      email: sellerInfo.email,
      shopDescription: sellerInfo.shopDescription,
      shopAddress: sellerInfo.shopAddress,
//      companySizeId: sellerInfo.companySize,
      companySize: sellerInfo.companySize,
      countryName: sellerInfo.country,
      currency: sellerInfo.currency
    });
  }

  async onPress(){
    this.setState({ loader: true });

    let jsonObject = {
      companyName: this.state.companyName,
      contactPerson: this.state.contactPerson,
      telephone: this.state.telephone,
      email: this.state.email,
      shopDescription: this.state.shopDescription,
      shopAddress: this.state.shopAddress,
      companySize: this.state.companySize,
      country: this.state.countryName,
      currency: this.state.currency
    }

    await saveData('sellers', this.state.currentUserId, jsonObject);
    Alert.alert( '', 'Your company details have been saved',
      [ {text: 'OK', onPress: () => this.props.navigation.navigate('AddProductCategoryScreen')} ] );

    this.setState({ loader: false });
  }

  validate(){
    if(this.state.companyName == '' || this.state.companyName == undefined)
      alert('Company name cannot be empty');
    else if(this.state.contactPerson == '' || this.state.contactPerson == undefined)
      alert('Contact name cannot be empty');
    else if(this.state.telephone == '' || this.state.telephone == undefined)
      alert('Telephone name cannot be empty');
    else if(this.state.email == '' || this.state.email == undefined)
      alert('Email address cannot be empty');
    else if(this.state.shopAddress == '' || this.state.shopAddress == undefined)
      alert('Shop Address cannot be empty');
    else if(this.state.shopDescription == '' || this.state.shopDescription == undefined)
      alert('Shop Description cannot be empty');
    else if(this.state.companySize == '' || this.state.companySize == undefined)
      alert('company Size cannot be empty');
    else if(this.state.countryName == '' || this.state.countryName == undefined)
      alert('Country name cannot be empty');
    else if(this.state.currency == '' || this.state.currency == undefined)
      alert('Currency cannot be empty');
    else {
      this.onPress();
    }
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  onChange(text, identifier){
    text.then((text) =>{
      this.setState({ [identifier]: text })
    })
  }


  render() {
    const { navigate, goBack } = this.props.navigation;
    const companySizeData = [
      {id: 0, value:'0 - 10'}, {id: 1, value:'10 - 50'}, {id: 2, value:'50 - 300'}, {id: 3, value:'300+'}
    ]
    currencyList = [
      {id: 0, value:'$'}, {id: 1, value:'£'}, {id: 2, value:'€'}
    ]

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentContainer}>

          <View style={styles.fieldContainer}>
            <Label_Field label={'COMPANY NAME'}
              placeholder={this.state.companyName}
              placeholderColor={'#3f3f3f'}
              textInputHeight={50}
              onChange={(text) => this.onChange(text, 'companyName')}
              onSubmitEditing={() => { this.focusNextField('contact') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field label={'CONTACT PERSON'}
              placeholder={this.state.contactPerson}
              placeholderColor={'#3f3f3f'}
              textInputHeight={50}
              onChange={(text) => this.onChange(text, 'contactPerson')}
              onRef={(ref) => { this.inputs['contact'] = ref }}
              onSubmitEditing={() => { this.focusNextField('telephone') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'CONTACT TELEPHONE'}
              placeholder={this.state.telephone}
              placeholderColor={'#3f3f3f'}
              textInputHeight={50}
              onChange={(text) => this.onChange(text, 'telephone')}
              keyboardType={'number-pad'}
              onRef={(ref) => { this.inputs['telephone'] = ref }}
              onSubmitEditing={() => { this.focusNextField('email') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'CONTACT EMAIL'}
              placeholder={this.state.email}
              placeholderColor={'#3f3f3f'}
              textInputHeight={50}
              onChange={(text) => this.onChange(text, 'email')}
              onRef={(ref) => { this.inputs['email'] = ref }}
              onSubmitEditing={() => { this.focusNextField('description') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'SHOP DESCRIPTION'}
              placeholder={this.state.shopDescription}
              placeholderColor={'#3f3f3f'}
              textInputHeight={100}
              onChange={(text) => this.onChange(text, 'shopDescription')}
              onRef={(ref) => { this.inputs['description'] = ref }}
              onSubmitEditing={() => { this.focusNextField('address') }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Label_Field
              label={'SHOP ADDRESS'}
              placeholder={this.state.shopAddress}
              placeholderColor={'#3f3f3f'}
              textInputHeight={100}
              onChange={(text) => this.onChange(text, 'shopAddress')}
              onRef={(ref) => { this.inputs['address'] = ref }}
              onSubmitEditing={() => {  }}
            />
          </View>

          <View style={styles.fieldContainer}>
            <DropdownComponent label={'COMPANY SIZE'}
              data={companySizeData}
              labelInBuilt={this.state.companySize == '' ? 'Select' : ''}
              onChangeText={(value, index, data) => this.setState({ companySize: data[index].value })}
              value={this.state.companySize}
            />
          </View>

          <View style={styles.fieldContainer}>
            <DropdownComponent label={'COUNTRY'}
              data={countriesList}
              labelInBuilt={this.state.countryName == '' ? 'Select' : ''}
              onChangeText={(value, index, data) => this.setState({ countryName: data[index].value })}
              value={this.state.countryName}
            />
          </View>

          <View style={styles.fieldContainer}>
            <DropdownComponent label={'CURRENCY'}
              data={currencyList}
              labelInBuilt={this.state.currency == '' ? 'Select' : ''}
              onChangeText={(value, index, data) => this.setState({ currency: data[index].value })}
              value={this.state.currency}
            />
          </View>



          <View style={styles.fieldContainer2}>
            {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            <Button
              onPress={() => this.validate()}
              title="UPDATE"
              color="#71a1ed"
            />
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
    flex: 1,
    marginTop: 10
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
  }
});
