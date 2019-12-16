import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import { styles, styles2, GlobalConst, Icon, ShareComponent, ModalComponent
       } from '../../config/imports';


export default class ListingDescription extends Component<Props> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles3.container}>

        <Image
          style={styles3.imageStyle}
          source={{uri: this.props.navigation.state.params.imageUrl}}
        />

        <View style={styles3.titleContainer}>
          <View style={styles3.userAvatar}>
            <Icon name="user-circle-o" color={'#71a1ed'} size={35}/>
          </View>
          <View style={styles3.title}>
            <Text style={styles3.titleText}>{this.props.navigation.state.params.name}</Text>
            <Text style={[styles3.statusText, {textAlign: 'left'}]}>{this.props.navigation.state.params.currency} {this.props.navigation.state.params.price}</Text>
          </View>
        </View>

        <View style={styles3.pickupTimeContainer}>
          <Text style={styles3.pickupText}>{this.props.navigation.state.params.seller}</Text>
          <Text style={styles3.dateText}>{this.props.navigation.state.params.market}</Text>
          <Text style={styles3.dateText}>{this.props.navigation.state.params.date.substring(4, 21)}</Text>
        </View>

        <View style={styles3.descriptionContainer}>
          <Text>{this.props.navigation.state.params.description}</Text>
        </View>

        <View style={styles3.pickupButtonContainer}>
          <Text style={styles3.websiteText}>{this.props.navigation.state.params.website}</Text>
        </View>

        <View style={styles3.pickupButtonContainer}>
          {this.props.navigation.state.params.status == 'Pending' ?
            <Text style={styles3.statusText}>Status: {this.props.navigation.state.params.status} Approval</Text>
          :
          <Button
            onPress={() => navigate('BuyDetailScreen', {sellerName: this.props.navigation.state.params.seller})}
            title="            Purchase            "
            color="#71a1ed"
          />
          }
        </View>

      </ScrollView>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.2,
    flexDirection: 'row',
    margin: 10,
  },
  userAvatar: {
    flex: 0.15,
    justifyContent: 'center',
  },
  title: {
    flex: 0.85,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 30
  },
  pickupTimeContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginBottom: 20
  },
  pickupText: {
    color: '#4f4f4f',
    fontSize: 20,
    fontWeight: "bold",
  },
  dateText: {
    color: '#333333',
    marginBottom: 5,
    marginLeft: 10,
  },
  pickupButtonContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageStyle:{
    flex: 1,
    width: null,
    height: 300,
    resizeMode: 'stretch'
  },
  statusText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#727272',
  },
  websiteText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5493ea',
  },
});
