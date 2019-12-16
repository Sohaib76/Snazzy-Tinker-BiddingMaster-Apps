import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Button, Platform } from 'react-native';
import { styles2, GlobalConst, Icon, FilterHeaderComponent,
         CardImageComponent } from '../../config/imports';


export default class SearchResultsScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {title: 'Bought and shared by John', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', price: '$99.99', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared by Steward', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', price: '$49.99', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook Pro 13 inches', seller: 'Apple', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Company xyz', price: '$64.99', userTitle: 'Some description here', boughtNumber: '12'},
      {title: 'Bought and shared by John', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', price: '$99.99', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared by Steward', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', price: '$49.99', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook Pro 13 inches', seller: 'Apple', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Company xyz', price: '$64.99', userTitle: 'Some description here', boughtNumber: '12'},
      {title: 'Bought and shared by John', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', price: '$99.99', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared by Steward', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', price: '$49.99', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook Pro 13 inches', seller: 'Apple', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Company xyz', price: '$64.99', userTitle: 'Some description here', boughtNumber: '12'},
      {title: 'Bought and shared by John', seller: 'DIOR', location: 'London, United Kingdom', imageSource: require('../../photos/frok.png'), userName: 'Alex Kanova', price: '$99.99', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Shared by Steward', seller: 'Calvin', location: 'Paris, France', imageSource: require('../../photos/tv.jpeg'), userName: 'Balawal Virk', price: '$49.99', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook Pro 13 inches', seller: 'Apple', location: 'New York, USA', imageSource: require('../../photos/macbook.jpeg'), userName: 'Company xyz', price: '$64.99', userTitle: 'Some description here', boughtNumber: '12'},
    ];

    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

        <View style={styles.header}>
          <FilterHeaderComponent navigation={this.props.navigation} isRow={false}/>
        </View>

        <View style={styles.contentContainer}>
          <CardImageComponent data={data} navigation={this.props.navigation} viewRequired={'big'} SellerResultScreen={true}/>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    padding: 5,
  },
  contentContainer: {
    flex: 0.88,
    marginTop: 10,
  },
  itemsContainer: {
    flex: 1,
    marginVertical: 20,
  },
  titleText: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center'
  },
  imageStyle3:{
    flex: 1,
    width: 100,
    height: 50,
    resizeMode: 'center',
    borderRadius: 10,
    marginLeft: 5
  },
});
