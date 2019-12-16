import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Platform } from 'react-native';
import ModalComponent from './ModalComponent';
import SearchComponent from './SearchComponent';


export default class FilterHeaderComponent extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>

          <View style={styles.row1}>
            <View style={styles.filterTextContainer}>
              <View>
                <Text>Sort By: Trending</Text>
              </View>
              <View>
                <Text>Groups selected: All</Text>
              </View>
            </View>
            <View style={styles.createButtonContainer}>
              <SearchComponent placeholder={'Search...'} />
            </View>
          </View>

          <View style={styles.row2}>
            <ModalComponent iconName={'sort-amount-desc'} _flex={0.5} filter_1={'Sort By:'} filter_2={'Groups:'}/>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  row1:{
    flex: 0.7,
  },
  row2:{
    flex: 0.3,
    alignItems: 'flex-end',
    margin: 10
  },
  filterTextContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  createButtonContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: Platform.OS === 'ios' ? 0 : 0,
    borderColor: '#adadad',
    margin: 5,
  },
});
