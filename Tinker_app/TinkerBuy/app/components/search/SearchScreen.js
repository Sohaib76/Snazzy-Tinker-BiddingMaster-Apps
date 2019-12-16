import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity, Button} from 'react-native';
import LabelCheckBoxComponent from '../others/LabelCheckBoxComponent';


export default class SearchScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cashback : $24.95',
      headerLeft: (
        <Image
          style={styles.imageStyle3}
          source={require('../../photos/logo.png')}
          fadeDuration={0}
        />
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.bigText}>SEARCH FOR PRODUCTS OR SERVICES</Text>
          <Text style={styles.smallText}>Type the name of the product or service that you are searching for</Text>
        </View>

        <View style={styles.contentContainer}>
          <LabelCheckBoxComponent label={'Online Seller'} distance={0.5}/>
          <LabelCheckBoxComponent label={'Offline Seller'} distance={0.5}/>
          <LabelCheckBoxComponent label={'Only in my country'} distance={0.5}/>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('SearchResultsScreen')}
            title="            FIND SELLERS            "
            color="#71a1ed"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerContainer: {
    flex: 0.3,
    alignItems: 'center',
    marginTop: '5%'
  },
  contentContainer: {
    flex: 0.25,
    alignItems: 'center',
    marginTop: '5%'
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  imageStyle3:{
    flex: 1,
    width: 100,
    height: 50,
    resizeMode: 'center',
    borderRadius: 10,
    marginLeft: 5
  },
  bigText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#71a1ed'
  },
  smallText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#71a1ed',
    marginTop: '6%'
  },
});
