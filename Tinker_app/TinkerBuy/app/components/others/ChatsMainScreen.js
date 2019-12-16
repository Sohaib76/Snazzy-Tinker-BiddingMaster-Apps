import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image} from 'react-native';
import FilterHeaderComponent from '../others/FilterHeaderComponent';
import CardFriendComponent from '../others/CardFriendComponent';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ChatsMainScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.toggleDrawer() }>
          <Icon name="navicon" color={'#71a1ed'} size={40}/>
        </TouchableOpacity>
      ),
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
    const data = [
      {name: 'Kavok Dnian', location: 'Cardiff, Wales', messageHeadline: 'Hello developer...', messageDate: '04: 04' },
      {name: 'Surav lokal', location: 'Dublin, Ireland', messageHeadline: 'Hello developer...', messageDate: '12: 32' },
      {name: 'Fred Johnson', location: 'Newport, UK', messageHeadline: 'Hello developer...', messageDate: 'yesterday' },
      {name: 'Kavok Dnian', location: 'Cardiff, Wales', messageHeadline: 'Hello developer...', messageDate: 'yesterday' },
      {name: 'Surav lokal', location: 'Dublin, Ireland', messageHeadline: 'Hello developer...', messageDate: 'Wed' },
      {name: 'Fred Johnson', location: 'Newport, UK', messageHeadline: 'Hello developer...', messageDate: '12/03/2019' },
      {name: 'Fred Johnson', location: 'Newport, UK', messageHeadline: 'Hello developer...', messageDate: '03/02/2019' },
      {name: 'Kavok Dnian', location: 'Cardiff, Wales', messageHeadline: 'Hello developer...', messageDate: '01/01/2019' },
      {name: 'Surav lokal', location: 'Dublin, Ireland', messageHeadline: 'Hello developer...', messageDate: '12/12/2018' },
    ]
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.contentContainer}>
          <CardFriendComponent data={data} chatMainScreen={true} navigation={this.props.navigation}/>
        </View>

        <View style={styles.footerContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('FreindsScreen')}
            title="                    New Chat                    "
            color="#71a1ed"
          />
        </View>

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
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  footerContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
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
