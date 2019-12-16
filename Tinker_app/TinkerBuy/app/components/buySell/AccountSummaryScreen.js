import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image, Button, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field';
import LabelTextComponent from '../others/LabelTextComponent';
import CardImageComponent from '../others/CardImageComponent';

export default class AccountSummaryScreen extends Component<Props> {
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

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Name'} text={'Balawal Virk'} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Email'} text={'abcxyz@hotmail.com'} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Location'} text={'London, United Kingdom'} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Phone'} text={'0031 423 123 312'} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Country'} text={'United States'} />
          </View>

          <View style={styles.fieldContainer}>
            <LabelTextComponent label={'Some other'} text={'placeholder'} />
          </View>

          <View style={styles.fieldContainer2}>
            <Text style={styles.titleText}>PRODUCTS BOUGHT</Text>
            <CardImageComponent data={data} navigation={this.props.navigation} viewRequired={'horizontalScroll'}/>
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
  contentContainer: {
    flex: 0.9,
  },
  fieldContainer: {
    flex:1,
    marginVertical: 5,
    marginHorizontal: 25,
  },
  fieldContainer2: {
    flex:1,
    marginVertical: 50,
    marginHorizontal: 25,
  },
  titleText: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center'
  },
});
