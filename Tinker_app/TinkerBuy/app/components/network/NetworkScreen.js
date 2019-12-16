import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from './NetworkComponent';

export default class NetworkScreen extends React.Component {
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
    return(
      <View style={styles.container}>
        <ScrollView>
        <View style={[styles.contentContainer,{marginTop: 10}]}>
          <NetworkComponent Label1={''} Label3={'Earnings'} Label2={'Members'} hideIcon={true}/>
        </View>
        <View style={styles.contentContainer}>
          <NetworkComponent Label1={'Level 1'} Label3={'$32'} Label2={'43'} onPress={() => navigate('NetworkDetailsScreen', {title: 'Level 1'})}/>
        </View>
        <View style={styles.contentContainer}>
          <NetworkComponent Label1={'Level 2'} Label3={'$45'} Label2={'11'} onPress={() => navigate('NetworkDetailsScreen', {title: 'Level 2'})}/>
        </View>
        <View style={styles.contentContainer}>
          <NetworkComponent Label1={'Level 3'} Label3={'$53'} Label2={'25'} onPress={() => navigate('NetworkDetailsScreen', {title: 'Level 3'})}/>
        </View>
        <View style={styles.contentContainer}>
          <NetworkComponent Label1={'Level 4'} Label3={'$21'} Label2={'19'} onPress={() => navigate('NetworkDetailsScreen', {title: 'Level 4'})}/>
        </View>
        <View style={styles.contentContainer}>
          <NetworkComponent Label1={'Level 5'} Label3={'$67'} Label2={'07'} onPress={() => navigate('NetworkDetailsScreen', {title: 'Level 5'})}/>
        </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Grow Your Network And Earn More!</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigate('InviteFriendsScreen')}
              title="            INVITE FRIENDS            "
              color="#71a1ed"
            />
          </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderBottomColor: '#71a1ed',
    padding: 10,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  labelContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  imageStyle3:{
    flex: 1,
    width: 100,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,
    marginLeft: 5
  },
});
