import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Button, Platform } from 'react-native';
import { styles2, GlobalConst, Icon, FilterHeaderComponent,
         CardImageComponent, SearchComponent} from '../../config/imports';
import { connectFirebase, getData } from '../../backend/firebase/utility';
import { _retrieveData } from '../../backend/AsyncFuncs';



export default class UnapprovedPurchasesScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.state = ({
      loader: false,
      data: []
    });
    this.getData = this.getData.bind(this);
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

  componentDidMount(){
    connectFirebase();
    this.props.navigation.addListener('willFocus', () => {
      this.getData();
    })
  }

  async getData(){
    this.setState({ loader: true });

    let currentUserId = await _retrieveData(GlobalConst.STORAGE_KEYS.userId);
    await this.setState({ currentUserId: currentUserId });

    let unapprovedPurchases = await getData('purchases', this.state.currentUserId, 'unapproved');
    await this.setState({ data: unapprovedPurchases });

    this.setState({ loader: false });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

      {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

      {this.state.data == false ?
        <Text>No Unapproved Purchases Found</Text>
        :
        <View style={styles.contentContainer}>
          <CardImageComponent data={this.state.data} navigation={this.props.navigation} viewRequired={'row'}
            extraData={this.state} onRefresh={() => this.getData()} refreshing={this.state.loader}
          />
        </View>
      }

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
