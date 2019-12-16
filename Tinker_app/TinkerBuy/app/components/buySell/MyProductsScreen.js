import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Button, Platform, ActivityIndicator } from 'react-native';
import { styles2, GlobalConst, Icon, FilterHeaderComponent,
         CardImageComponent } from '../../config/imports';
 import { connectFirebase, getData, saveData } from '../../backend/firebase/utility';
 import { _retrieveData } from '../../backend/AsyncFuncs';



export default class MyProductsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      currentUserId: '',
      data: [],
    });
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    connectFirebase();
    this.getData();
  }

  async getData(){
    this.setState({ loader: true });
    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    let productsData = await getData('products', currentUserId);
    await this.setState({ currentUserId: currentUserId, data: productsData, loader: false });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

        {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

        {this.state.data.products == undefined ?
          <View style={[styles.container, {marginHorizontal: 20}]}>
            <Text>Nothing to show</Text>
          </View>
        : null
        }

        <View style={styles.contentContainer}>
          <CardImageComponent data={this.state.data.products} navigation={this.props.navigation} viewRequired={'big'} myProducts={true}/>
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
