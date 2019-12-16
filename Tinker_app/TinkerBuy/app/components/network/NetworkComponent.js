import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NetworkComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>

        <View style={styles.labelContainer}>
          <Text style={[styles.labelText, {color: this.props.labelAllBlack ? '#000': '#71a1ed', fontWeight: this.props.fontWeightNormal ? 'normal' : 'bold'}]}>
            {this.props.Label1}
          </Text>
        </View>

        {this.props.hideOtherLabels ? null :
          <View style={styles.rowContainer2}>
            <View style={styles.labelContainer}>
              <Text style={[styles.numberText, {fontWeight: this.props.fontWeightNormal ? 'normal' : 'bold'}]}>
                {this.props.Label2}
              </Text>
            </View>

            <View style={styles.labelContainer}>
              <Text style={[styles.numberText, {fontWeight: this.props.fontWeightNormal ? 'normal' : 'bold'}]}>
                {this.props.Label3}
              </Text>
            </View>
          </View>
        }

        <TouchableOpacity onPress={this.props.onPressIcon} style={[styles.labelContainer, styles.iconStyle, {flex: this.props.hideOtherLabels ? 0.2 : 1}]}>
          {this.props.hideIcon ? null :
            <Icon name="chevron-right" color={'#71a1ed'} size={20}/>
          }
          {this.props.showDelete ?
            <Icon name="remove" color={'#b70000'} size={20} />
            : null
          }
          {this.props.showCheckIcon ?
            <Icon name="check" color={'#21a030'} size={20} />
            : null
          }
        </TouchableOpacity>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  labelContainer: {
    flex: 1
  },
  rowContainer2: {
    flex: 2,
    flexDirection: 'row',
  },
  labelText: {
    fontSize: 15,
  },
  numberText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  iconStyle: {
    alignItems: 'flex-end'
  }
});
