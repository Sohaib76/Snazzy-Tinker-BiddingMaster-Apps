import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';


export default class LabelCheckBoxComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      isChecked: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <CheckBox
          style={{flex: this.props.distance, padding: 10}}
          onClick={() =>   this.setState({ isChecked:!this.state.isChecked }) }
          isChecked={this.state.isChecked}
          leftText={this.props.label}
          leftTextStyle={styles.text}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#71a1ed'
  },
});
