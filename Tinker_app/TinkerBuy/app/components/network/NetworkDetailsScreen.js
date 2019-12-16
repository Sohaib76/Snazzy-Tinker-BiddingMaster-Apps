import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import FilterHeaderComponent from '../others/FilterHeaderComponent';
import CardFriendComponent from '../others/CardFriendComponent';


export default class NetworkDetailsScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  render() {
    const data = [
      {name: 'Kavok Dnian', location: 'Cardiff, Wales' },
      {name: 'Surav lokal', location: 'Dublin, Ireland' },
      {name: 'Fred Johnson', location: 'Newport, UK' },
      {name: 'Kavok Dnian', location: 'Cardiff, Wales' },
      {name: 'Surav lokal', location: 'Dublin, Ireland' },
      {name: 'Fred Johnson', location: 'Newport, UK' },
      {name: 'Kavok Dnian', location: 'Cardiff, Wales' },
      {name: 'Surav lokal', location: 'Dublin, Ireland' },
      {name: 'Fred Johnson', location: 'Newport, UK' },
    ]
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.contentContainer}>
          <CardFriendComponent data={data} navigation={this.props.navigation}/>
        </View>

        <View style={styles.footerContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('InviteFriendsScreen')}
            title="            INVITE FRIENDS            "
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
});
