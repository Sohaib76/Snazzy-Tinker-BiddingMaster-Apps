import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert, Text, Button, ActivityIndicator } from 'react-native';
import Label_Field from '../others/Label_Field';
import { connectFirebase, saveData } from '../../backend/firebase/utility';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {mainCategoriesList, subCategoriesList} from '../../backend/data/CategoriesList';

export default class AddProductCategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      subCategoriesList: [],
      mainCategoryId: '',
      subCategoryId: '',
      subCategoryTitle: ''
    });
    this.onPress = this.onPress.bind(this);
    this.getSubCateogryList = this.getSubCateogryList.bind(this);
  }

  componentDidMount(){
    connectFirebase();
  }

  async onPress(){
    if(this.state.mainCategoryId == '')
      alert('Main category should  be selected')
    if(this.state.subCategoryId == '')
      alert('Sub category should  be selected')
    else
      this.props.navigation.navigate('AddProductDetailScreen', {mainCategoryId: this.state.mainCategoryId, subCategoryId: this.state.subCategoryId, subCategoryTitle: this.state.subCategoryTitle, onlineProduct: this.props.navigation.state.params.onlineProduct});
  }

  async getSubCateogryList(mainCategoryId, mainCategoryTitle){
    await this.setState({ mainCategoryId: mainCategoryId, mainCategoryTitle: mainCategoryTitle });
    let subCategoriesListArray = [];
    for(let i=0; i<subCategoriesList.length; i++){
      if(subCategoriesList[i].mainCategoryId == this.state.mainCategoryId)
        subCategoriesListArray.push(subCategoriesList[i])
    }
    await this.setState({ subCategoriesList: subCategoriesListArray });
  }


  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

        <View style={styles.itemContainer}>
          <Text style={styles.contentText}>
            SELECT MAIN CATEGORY
          </Text>
          <SearchableDropdown
            items={mainCategoriesList}
            onTextChange={text => {}}
            onItemSelect={item => this.getSubCateogryList(item.id, item.name)}
            containerStyle={{ width: '100%', paddingHorizontal: 5, }}
            textInputStyle={{
              padding: 15,
              fontSize: 20,
              borderColor: '#bfbfbf',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
            }}
            itemTextStyle={{ color: '#222', fontSize: 16 }}
            itemsContainerStyle={{ maxHeight: 150 }}
            defaultIndex={0}
            placeholder="Search Product Category here"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.contentText}>
            SELECT SUB CATEGORY
          </Text>
          <SearchableDropdown
            items={this.state.subCategoriesList}
            onTextChange={text => {}}
            onItemSelect={item => this.setState({ subCategoryId: item.id, subCategoryTitle: item.name })}
            containerStyle={{ width: '100%', paddingHorizontal: 5, }}
            textInputStyle={{
              padding: 15,
              fontSize: 20,
              borderColor: '#bfbfbf',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
            }}
            itemTextStyle={{ color: '#222', fontSize: 16 }}
            itemsContainerStyle={{ maxHeight: 150 }}
            defaultIndex={0}
            placeholder="Search Product Category here"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.buttonContainer}>
          {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}
          <Button
            onPress={() => this.onPress()}
            title="CONTINUE"
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
    marginTop: '5%'
  },
  itemContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  contentText: {
    textAlign: 'center',
    color: '#4f4f4f',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
});
