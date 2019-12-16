import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import LabelTextComponent from './LabelTextComponent';

export default class KeywordRegisterScreen extends React.Component {
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
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.contentText2}>Some Keyword</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.contentText}>
              The keyword 'Some Keyword' is available
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('Registered!')}
            title="REGISTER THIS KEYWORD"
            color="#71a1ed"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('Checking...')}
            title="CHECK ANOTHER KEYWORD"
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
    backgroundColor: '#ffffff',
    marginHorizontal: 25,
    marginTop: '10%'
  },
  contentContainer: {
    flex: 0.9,
    justifyContent: 'space-evenly',
    padding: 10,
  },
  textContainer: {
    flex: 0.25,
    marginHorizontal: '10%'
  },
  buttonContainer: {
    flex: 0.1,
    marginVertical: 3,
    marginHorizontal: 25,
  },
  contentText: {
    textAlign: 'center',
    color: '#00b706',
    fontSize: 17,
    fontWeight: "bold",
  },
  contentText2: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
    fontWeight: "bold",
  },
});
