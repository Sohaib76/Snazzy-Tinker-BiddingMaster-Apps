import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';
import {Routes} from "./Routes";
import {Bookmarks, Likes, Private, Profile, Settings} from "../components";


const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsBookmarks]: {
        screen: Bookmarks,
        defaultNavigationOptions: (navigation) => {() => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="bookmark"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    [Routes.TabsLikes]: {
        screen: Likes,
        defaultNavigationOptions: (navigation) => {() => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="heart"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    MultiBar: {
        screen: () => null,
        defaultNavigationOptions: (navigation) => {({navigation}) => ({
            tabBarIcon: () => (
                <MultiBarToggle
                    navigation={navigation}
                    actionSize={30}
                    routes={[
                        {
                            routeName: Routes.OtherScreen,
                            color: '#FF8360',
                            icon: (
                                <Icon
                                    name="md-add"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#E8E288',
                            icon: (
                                <Icon
                                    name="md-add"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#7DCE82',
                            icon: (
                                <Icon
                                    name="md-add"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                    ]}
                    icon={(
                        <Icon
                            name="md-add"
                            color="#FFFFFF"
                            size={24}
                        />
                    )}
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },
    [Routes.TabsPrivate]: {
        screen: Private,
        defaultNavigationOptions: (navigation) => {() => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="lock"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    [Routes.TabsProfile]: {
        screen: Profile,
        defaultNavigationOptions: (navigation) => {() => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="user"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
    tabBarComponent: MultiBar,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
});

const BaseNavigatorContainer = createAppContainer(createStackNavigator({
    [Routes.Tabs]: TabsNavigator,
    [Routes.OtherScreen]: Settings
}, {
    headerMode: 'none'
}));

export {BaseNavigatorContainer as BaseNavigator};
