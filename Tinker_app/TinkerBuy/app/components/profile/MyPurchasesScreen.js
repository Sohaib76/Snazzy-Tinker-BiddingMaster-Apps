import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Button, Platform } from 'react-native';
import { styles2, GlobalConst, Icon, FilterHeaderComponent,
         CardImageComponent, SearchComponent} from '../../config/imports';


export default class MyPurchasesScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cashback : $24.95',
      headerRight: (
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.toggleDrawer() }>
          <Icon name="navicon" color={'#71a1ed'} size={40}/>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const data = [
      {title: 'Calvin Green Shirt', date: '24/04/2019', imageSource: require('../../photos/frok.png'), seller: 'DIOR', location: 'London, United Kingdom', userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Samsung 52 inch TV', date: '03/01/2019', imageSource: require('../../photos/tv.jpeg'), seller: 'Calvin', location: 'Paris, France', userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook 13 inch 256 RAM', date: '17/10/2019', imageSource: require('../../photos/macbook.jpeg'), seller: 'Kyoto', location: 'Lahore, Pakistan', userName: 'Mana Kasa', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Calvin Green Shirt', date: '24/04/2019', imageSource: require('../../photos/frok.png'), seller: 'DIOR', location: 'London, United Kingdom', userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Samsung 52 inch TV', date: '03/01/2019', imageSource: require('../../photos/tv.jpeg'), seller: 'Calvin', location: 'Paris, France', userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook 13 inch 256 RAM', date: '17/10/2019', imageSource: require('../../photos/macbook.jpeg'), seller: 'Kyoto', location: 'Lahore, Pakistan', userName: 'Mana Kasa', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Calvin Green Shirt', date: '24/04/2019', imageSource: require('../../photos/frok.png'), seller: 'DIOR', location: 'London, United Kingdom', userName: 'Alex Kanova', userTitle: 'This dress is amazing. Get it right now from TinkerBuy NOW!', boughtNumber: '307'},
      {title: 'Samsung 52 inch TV', date: '03/01/2019', imageSource: require('../../photos/tv.jpeg'), seller: 'Calvin', location: 'Paris, France', userName: 'Balawal Virk', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
      {title: 'Macbook 13 inch 256 RAM', date: '17/10/2019', imageSource: require('../../photos/macbook.jpeg'), seller: 'Kyoto', location: 'Lahore, Pakistan', userName: 'Mana Kasa', userTitle: 'The best TV ever. TinkBuy is the place to go', boughtNumber: '67'},
    ];

    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

        <View style={styles.header}>
          <SearchComponent placeholder={'Search history...'}/>
        </View>

        <View style={styles.contentContainer}>
          <CardImageComponent data={data} navigation={this.props.navigation} viewRequired={'row'}/>
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
});
