import React from 'react';
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Dimensions, Platform, Text, Button } from 'react-native';
import NetworkComponent from '../network/NetworkComponent';
import { Icon } from '../../config/imports';
import Label_Field from './Label_Field';


export default class KeywordsScreen extends React.Component {
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
      {keyword: 'Tappy'},
      {keyword: 'Laptop'},
      {keyword: 'Computer'},
      {keyword: 'Hotel'},
      {keyword: 'Makeup'},
      {keyword: 'Laptop'},
      {keyword: 'Computer'},
      {keyword: 'Hotel'},
      {keyword: 'Makeup'},
    ]
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={[styles.contentContainer, {flex: 0.3, marginTop: '10%'}]}>
          <Label_Field hideLabel={true} placeholder={'Search keywords'} textInputHeight={50} />
        </View>

        <View style={[styles.contentContainer, {flex: 0.4}]}>
          <Button
            onPress={() => navigate('KeywordRegisterScreen')}
            title="CHECK AVAILABILITY OF KEYWORD"
            color="#71a1ed"
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.text}>My Keywords</Text>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>
              <View style={styles.contentContainer2}>
                <NetworkComponent Label1={item.keyword} hideIcon={true} showDelete={true}/>
              </View>
            }
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
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 25,
  },
  contentContainer2: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#71a1ed',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
