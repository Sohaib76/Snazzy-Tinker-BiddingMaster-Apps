import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image, Button, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field';
import LabelTextComponent from '../others/LabelTextComponent';
import CardImageComponent from '../others/CardImageComponent';

export default class ProfileScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      visibility: false,
    });
  }

  render() {
    const data = [
      {title: 'Bought and shared', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared this item', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Selling this item', seller: 'Sponsored', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Company xyz', userTitle: 'Buy from us', boughtNumber: '12'},
      {title: 'Bought and shared', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared this item', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Bought and shared', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared this item', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Bought and shared', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared this item', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
    ];

    const { navigate, goBack } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentContainer}>

          <View style={styles.imageContainer}>
            <Image style={styles.backgroundImage} source={require('../../photos/trump.jpg')}>
            </Image>
            <Icon
              onPress={() => goBack()}
              name={"arrow-left"}
              style={styles.arrowContainer}
              color={'#fff'}
              size={30}
            />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Name'} text={this.props.navigation.state.params.name} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Email'} text={'abcxyz@hotmail.com'} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Location'} text={this.props.navigation.state.params.location} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Phone Number'} text={'0031 423 123 312'} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Country'} text={'United States'} />
          </View>

          <View style={styles.fieldContainer2}>
            <Button
              onPress={() => alert('Updated!')}
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
});
