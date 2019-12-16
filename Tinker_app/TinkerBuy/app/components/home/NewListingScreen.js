import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, CameraRoll, ImageBackground, Button, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field'
import DropdownFieldComponent from '../others/DropdownFieldComponent';
import ImagePickerComponent from '../others/ImagePickerComponent';
import {requestCameraPermission} from '../others/AndroidPermissions';


export default class NewListingScreen extends Component<Props> {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground style={styles.backgroundImage} source={require('../../photos/upload_image.jpg')}>
            <ImagePickerComponent />
          </ImageBackground>
        </View>
        <View style={styles.fieldsAreaContainer}>
          <View style={styles.fieldContainer}>
            <Label_Field label={'Title'} placeholder={'e.g. extra vegetables'} textInputHeight={50}/>
          </View>
          <View style={styles.fieldContainer}>
            <Label_Field label={'Descripton'} placeholder={'e.g. partially used'} textInputHeight={100}/>
          </View>

            <View>
              <View style={styles.fieldContainer}>
                <Label_Field label={'Pick up times'} placeholder={'e.g. 10am to 5pm'} textInputHeight={50}/>
              </View>
              <View style={styles.fieldContainer}>
                <Label_Field label={'Pick up location'} placeholder={'Default location'} textInputHeight={50}/>
              </View>
              <View style={styles.fieldContainer}>
                <DropdownFieldComponent label="Listing for:" />
              </View>
              <View style={styles.pickupButtonContainer}>
                <Button
                  onPress={() => alert('Shared!')}
                  title="Share"
                  color="#71a1ed"
                />
              </View>
            </View>
            
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: Dimensions.get('window').height/3,
    width: '100%',
  },
  fieldsAreaContainer:{
    flex: 0.4,
    margin: 5,
  },
  fieldContainer: {
    flex:1,
    marginVertical: 5,
  },
  pickupButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  contentText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
