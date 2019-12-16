import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';


export default class Label_Field extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      fieldValue: '',
    });
    this.changeCallback = this.changeCallback.bind(this);
  }

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this)
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus()
  }

  async changeCallback(text){
    await this.setState({fieldValue: text});
    return this.state.fieldValue;
  }

  render() {
    return (
      <View style={[styles.container, {flexDirection: this.props._flexDirection}]}>
        <View style={[styles.labelContainer, {flex: this.props.labelFlex}]}>
          <Text style={styles.labelText}>{this.props.label}</Text>
        </View>
        <View style={[styles.fieldContainer, {flex: this.props.fieldFlex}]}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderColor}
            style={[styles.textInput, {height: this.props.textInputHeight}]}
            multiline = {this.props.multiline}
            numberOfLines = {this.props.noOfLines}
            onChangeText={(fieldValue) =>  this.props.onChange( this.changeCallback(fieldValue) )}
            value={this.state.fieldValue}
            ref={input => this.textInput = input}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
            keyboardType={this.props.keyboardType}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  },
  labelContainer: {
    flex: 1,
  },
  fieldContainer: {
    flex: 1,
  },
  textInput: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
    textAlignVertical: "top",
    fontSize: 16
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
