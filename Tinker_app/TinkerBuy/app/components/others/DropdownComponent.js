import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


export default class DropdownComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.rowContainer}>
        <View style={[styles.row1, {marginTop: 30}]}>
          <Text style={styles.boldText}>{this.props.label}</Text>
        </View>
        <View style={styles.row2}>
          <Dropdown
            containerStyle={styles.dropdownStyle}
            animationDuration={0}
            rippleInsets={{top: 10, bottom: 0}}
            label={this.props.labelInBuilt}
            data={this.props.data}
            onChangeText={(value, index, data) => this.props.onChangeText(value, index, data)}
            value={this.props.value}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  rowContainer:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  row1:{
    flex: 0.5,
  },
  row2:{
    flex: 0.5,
  },
  boldText:{
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  dropdownContainer:{
    flex: 1,
    justifyContent: "center",
    borderColor: '#bfbfbf',
    marginHorizontal: 50,
  },
  dropdownStyle: {
    marginRight: 15,
    paddingHorizontal: 5,
  }
});
