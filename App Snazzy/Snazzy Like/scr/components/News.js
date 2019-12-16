import React, { Component } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Card, CardSection } from "./common";
import TrendingPost from "./TrendingPost";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
import faker from "faker";
import { Action } from "react-native-router-flux";


class News extends Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ScrollView>
          <TrendingPost navigation={this.props.navigation} />

          <TouchableOpacity
            onPress={() => navigate('MainNews')}>
            <CardSection>
              <Image
                source={require("../images/image1.webp")}
                style={styles.ImageStyle}
              />
              <View style={styles.flameStyle}>
                <Icon name="md-eye" style={styles.iconStyle} size={20} />
                <Text style={styles.ViewTextStyle}>4.5k</Text>
                <Icon name="md-flower" style={styles.iconStyle} size={20} />
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.ViewStyle} />
              <Text style={styles.DecTextStyle}>this is description Text</Text>
            </CardSection>
          </TouchableOpacity>

          <Card>
            <CardSection>
              <Image
                source={require("../images/image2.jpg")}
                style={styles.ImageStyle}
              />
              <View style={styles.flameStyle}>
                <Icon name="md-eye" style={styles.iconStyle} size={20} />
                <Text style={styles.ViewTextStyle}>4.5k</Text>
                <Icon name="md-flower" style={styles.iconStyle} size={20} />
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.ViewStyle} />
              <Text style={styles.DecTextStyle}>this is description Text</Text>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Image
                source={require("../images/image3.jpg")}
                style={styles.ImageStyle}
              />
              <View style={styles.flameStyle}>
                <Icon name="md-eye" style={styles.iconStyle} size={20} />
                <Text style={styles.ViewTextStyle}>4.5k</Text>
                <Icon name="md-flower" style={styles.iconStyle} size={20} />
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.ViewStyle} />
              <Text style={styles.DecTextStyle}>this is description Text</Text>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Image
                source={require("../images/image4.jpg")}
                style={styles.ImageStyle}
              />
              <View style={styles.flameStyle}>
                <Icon name="md-eye" style={styles.iconStyle} size={20} />
                <Text style={styles.ViewTextStyle}>4.5k</Text>
                <Icon name="md-flower" style={styles.iconStyle} size={20} />
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.ViewStyle} />
              <Text style={styles.DecTextStyle}>this is description Text</Text>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Image
                source={require("../images/image5.jpg")}
                style={styles.ImageStyle}
              />
              <View style={styles.flameStyle}>
                <Icon name="md-eye" style={styles.iconStyle} size={20} />
                <Text style={styles.ViewTextStyle}>4.5k</Text>
                <Icon name="md-flower" style={styles.iconStyle} size={20} />
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.ViewStyle} />
              <Text style={styles.DecTextStyle}>this is description Text</Text>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Image
                source={require("../images/image6.jpg")}
                style={styles.ImageStyle}
              />
              <View style={styles.flameStyle}>
                <Icon name="md-eye" style={styles.iconStyle} size={20} />
                <Text style={styles.ViewTextStyle}>4.5k</Text>
                <Icon name="md-flower" style={styles.iconStyle} size={20} />
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.ViewStyle} />
              <Text style={styles.DecTextStyle}>this is description Text</Text>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Image
                source={require("../images/image3.jpg")}
                style={styles.ImageStyle}
              />
              <View style={styles.flameStyle}>
                <Icon name="md-eye" style={styles.iconStyle} size={20} />
                <Text style={styles.ViewTextStyle}>4.5k</Text>
                <Icon name="md-flower" style={styles.iconStyle} size={20} />
              </View>
            </CardSection>

            <CardSection>
              <View style={styles.ViewStyle} />
              <Text style={styles.DecTextStyle}>this is description Text</Text>
            </CardSection>
          </Card>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  ImageStyle: {
    flex: 1,
    width: 350,
    marginTop: 0,
    marginRight: 5,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    height: 300
  },
  ViewStyle: {
    backgroundColor: "#930077",
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: -110
  },
  DecTextStyle: {
    marginTop: -50,
    marginLeft: -50,
    color: "white"
  },
  flameStyle: {
    marginLeft: -105,
    flexDirection: "row",
    height: 30,
    width: 100,
    backgroundColor: "#414141",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,

    borderRadius: 7,
    position: "relative"
  },
  ViewTextStyle: {
    marginLeft: 7,
    marginRight: 7,
    color: "#f2f2f2",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5
  },
  iconStyle: {
    marginBottom: 5,
    marginTop: 5,
    color: "#f2f2f2"
  },
  PlusButtonsStyle: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: "green",
    flexDirection: "row",
    height: 80,
    alignItems: "center"
  }
});

export default withNavigation(News);
