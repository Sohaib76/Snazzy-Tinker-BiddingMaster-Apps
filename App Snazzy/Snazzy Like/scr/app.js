import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import PAGES from './pages';
import Brand from "../scr/components/Brand";
import News from "../scr/components/News";
import MainNews from "../scr/components/MainNews";
import CelbFeeds from "../scr/components/CelbFeeds";
import { AddButton } from "../scr/components/common";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  MaterialTopTabBar
} from "react-navigation";
import { ScreenStack } from "../scr/components/Brand";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SideMenu from "../scr/components/SideMenu";
import Profile from "../scr/components/Profile";
import TrendingPost from "../scr/components/TrendingPost";

const AuthStack = createStackNavigator({
  LoginSignup: PAGES.LoginSignup,
  Login: PAGES.Login,
  Register: PAGES.Register
});

let NewsStack = createStackNavigator(
  {
    News: { screen: News },
    Profile: { screen: Profile },
    Brand: { screen: Brand }
  },
  {
    initialRouteName: "News",
    headerMode: "none"
  }
);
export const TopTabs = createMaterialTopTabNavigator(
  {
    HOME: {
      screen: NewsStack,
      navigationOptions: {
        TabBarLable: "Celebs",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-contacts" color={tintColor} size={20} />
        )
      }
    },
    CELEBS: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: "Spotted",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-camera" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    activeTintColor: "black",
    shifting: false
  }
);




//***************XPERIENCE Tab NAVIGATOR*********************
  const SafeAreaMaterialTopTabBar = ({ ...props }) => (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );

  const options = {
    initialRouteName: 'MainNews',
    swipeEnabled: true,
    tabBarOptions: {
      activeBackgroundColor: '#0047ba',
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      pressColor: '#aaa',
      style: {
          backgroundColor: '#fff' // TabBar background
      },
      labelStyle: {
        fontSize: 11,
        fontWeight: 'bold',
      },
    },
    tabBarComponent: props => (<SafeAreaMaterialTopTabBar {...props} indicatorStyle={{ backgroundColor: '#aaa' }} />),
  };

  const NewsTopTab = createMaterialTopTabNavigator({
    MainNews: {
      screen: MainNews,
      navigationOptions: {
        title: 'Main News',
      },
    },
    News: {
      screen: News,
      navigationOptions: {
        title: 'News',
      },
    }
  }, options);




export const BottomStack = createMaterialBottomTabNavigator(
  {
    Celebs: {
      screen: NewsTopTab,//MainNews,
      navigationOptions: {
        TabBarLable: "Celebs",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-contacts" color={tintColor} size={20} />
        )
      }
    },
    Spotted: {
      screen: News,
      navigationOptions: {
        TabBarLable: "Spotted",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-camera" color={tintColor} size={20} />
        )
      }
    },
    Adding: {
      screen: () => null, // Empty screen
      navigationOptions: () => ({
        tabBarIcon: <AddButton /> // Plus button component
      })
    },

    Brands: {
      screen: Brand,
      navigationOptions: {
        TabBarLable: "Brands",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-pricetags" color={tintColor} size={20} />
        )
      }
    },
    Notifications: {
      screen: Profile,
      navigationOptions: {
        TabBarLable: "Notifications",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-notifications" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    tabBarComponent: props => {
      const {
        navigation: {
          state: { index, routes }
        },
        style,
        activeTintColor,
        inactiveTintColor,
        renderIcon,
        jumpTo
      } = props;
      return (
        <ViewOverflow
          style={{
            flexDirection: "row",
            height: 50,
            width: "100%",
            ...style
          }}
        >
          {routes.map((route, idx) => (
            <ViewOverflow
              key={route.key}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableWithoutFeedback onPress={() => jumpTo(route.key)}>
                {renderIcon({
                  route,
                  focused: index === idx,
                  tintColor: index === idx ? activeTintColor : inactiveTintColor
                })}
              </TouchableWithoutFeedback>
            </ViewOverflow>
          ))}
        </ViewOverflow>
      );
    },
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "Black",
      inactiveTintColor: "Black",
      style: {
        backgroundColor: "white"
      },
      tabStyle: {}
    }
  }
);





let DrawerAppNavigator = createDrawerNavigator(
  {
    BottomStack: BottomStack
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
    drawerPosition: "left",
    lazy: true
  }
);

let MainStack = createStackNavigator(
  {
    DrawerAppNavigator: DrawerAppNavigator
  },
  {
    initialRouteName: "DrawerAppNavigator",
    headerMode: "none"
  }
);

export const AppStack = createStackNavigator(
  {
    MainStack: MainStack
  },
  {
    initialRouteName: "MainStack",
    headerMode: "none",
    animationEnabled: true
  }
);

const AppNavigator  = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: PAGES.Splash,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default createAppContainer(AppNavigator);
