import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class SearchComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      text: '',
    });
  }

  render() {
    return (
        <View style={styles.container}>
          {this.props.hideIcon ? null :
            <Icon name={'search'} style={[styles.iconContainer, this.props.iconStyle]} color={'#71a1ed'} size={25}/>
          }
          <TextInput
            placeholder={this.props.placeholder}
            style={[styles.textInput, this.props.inputStyle]}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#adadad',
  },
  textInput: {
    flex: 1,
    height: 45,
    fontSize: 20,
    paddingLeft: 50,
  },
  iconContainer: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    zIndex: 100,
  },
});
