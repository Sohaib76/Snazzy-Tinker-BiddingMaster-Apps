import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class NotificationComponent extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
      {this.props.show ?
        <View style={styles.contentContainer}>

          <View style={styles.row1}>
            <Text style={styles.notificationText}>{this.props.notificationText}</Text>
          </View>

          <View style={styles.row2}>
            <TouchableOpacity style={styles.buttonContianer1} onPress={this.props.onPress1}>
              <Text style={styles.buttonText}>{this.props.buttonText1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContianer2} onPress={this.props.onPress2}>
              <Text style={styles.buttonText}>{this.props.buttonText2}</Text>
            </TouchableOpacity>
          </View>

        </View>
      :
        null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 20,
    padding: 10
  },
  row1: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row2: {
    flex: 0.2,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: '#d8d8d8'
  },
  buttonContianer1: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#3f3f3f',
    paddingBottom: 5
  },
  buttonContianer2: {
    flex: 1,
    //borderBottmWidth: 1,
    borderColor: '#cccccc',
    paddingTop: 5
  },
  notificationText: {
    fontSize: 16,
    color: '#fff'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
});
