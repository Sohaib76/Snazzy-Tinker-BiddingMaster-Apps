import React from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator,
  NavigationActions, createDrawerNavigator, createStackNavigator,
  createAppContainer, SafeAreaView, MaterialTopTabBar, createSwitchNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';


//auth screens
import LoginScreen from '../components/login/LoginScreen';
import AuthLoadingScreen from '../components/login/AuthLoadingScreen';
import SignupScreen from '../components/login/SignupScreen';
import SignOutComponent from '../components/others/SignOutComponent';

//friends
import FreindsScreen from '../components/friends/FreindsScreen';
import InviteFriendFromContactScreen from '../components/friends/inviteFriendFromContactScreen';
import InviteFriendsMain from '../components/friends/InviteFriendsMain';
import InviteFriendFromQrScreen from '../components/friends/inviteFriendFromQrScreen';

//network
import NetworkScreen from '../components/network/NetworkScreen';
import NetworkDetailsScreen from '../components/network/NetworkDetailsScreen';

//home
import HomeScreen from '../components/home/HomeScreen';
import ListingDescription from '../components/home/ListingDescription';
import NewListingScreen from '../components/home/NewListingScreen';

//buy
import BuySellScreen from '../components/buySell/BuySellScreen';
import BuyScreen from '../components/buySell/BuyScreen';
import BuyDetailScreen from '../components/buySell/BuyDetailScreen';
import BuyConfirmScreen from '../components/buySell/BuyConfirmScreen';
import BuyQrScreen from '../components/buySell/BuyQrScreen';

//sell
import SellScreen from '../components/buySell/SellScreen';
import AddProductScreen from '../components/buySell/AddProductScreen';
import AddProductCategoryScreen from '../components/buySell/AddProductCategoryScreen';
import AddProductDetailScreen from '../components/buySell/AddProductDetailScreen';
import MyProductsScreen from '../components/buySell/MyProductsScreen';
import SellToBuyerScreen from '../components/buySell/SellToBuyerScreen';
import SellScanScreen from '../components/buySell/SellScanScreen';
import ConfirmSaleScreen from '../components/buySell/ConfirmSaleScreen';
import ConfirmSaleDetailScreen from '../components/buySell/ConfirmSaleDetailScreen';
import SellConfirmScreen from '../components/buySell/SellConfirmScreen';
import AccountSummaryScreen from '../components/buySell/AccountSummaryScreen';
import SellerInfoScreen from '../components/buySell/SellerInfoScreen';

import SearchScreen from '../components/search/SearchScreen';
import SearchResultsScreen from '../components/search/SearchResultsScreen';

//profile
import ProfileScreen from '../components/profile/ProfileScreen';
import MyProfileScreen from '../components/profile/MyProfileScreen';
import MyEarningsScreen from '../components/profile/MyEarningsScreen';
import MyPurchasesScreen from '../components/profile/MyPurchasesScreen';
import ApprovedPurchasesScreen from '../components/profile/ApprovedPurchasesScreen';
import UnapprovedPurchasesScreen from '../components/profile/UnapprovedPurchasesScreen';
import ClearedPurchasesScreen from '../components/profile/ClearedPurchasesScreen';
import AboutScreen from '../components/profile/AboutScreen';

import LanguageScreen from '../components/language/LanguageScreen';

import ChatScreen from '../components/others/ChatScreen';
import ChatsMainScreen from '../components/others/ChatsMainScreen';
import UserProfileImage from '../components/others/UserProfileImage';
import KeywordsScreen from '../components/others/KeywordsScreen';
import KeywordRegisterScreen from '../components/others/KeywordRegisterScreen';
import NullComponent from '../components/others/NullComponent';
import QrScannerScreen from '../components/others/QrScannerScreen';

import PlaceholderScreen from '../components/PlaceholderScreen';


console.disableYellowBox = true;


//***************AUTH STACK NAVIGATOR*********************
const AuthStack = createStackNavigator({
  LoginScreen: LoginScreen,
  SignupScreen: SignupScreen,
  QrScannerScreen: QrScannerScreen
});


//***************APP STACK NAVIGATOR*********************
export const HomeScreenStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  },
  ListingDescription: {
    screen: ListingDescription,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  NewListingScreen: {
    screen: NewListingScreen,
    navigationOptions: {
      title: 'Share',
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  MyProfileScreen: {
    screen: MyProfileScreen,
    navigationOptions: {
      title: 'My Profile',
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  BuyDetailScreen: {
    screen: BuyDetailScreen,
    navigationOptions: {
      title: 'BUY',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  BuyConfirmScreen: {
    screen: BuyConfirmScreen,
    navigationOptions: {
      title: 'Purchase Completed',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  BuyQrScreen: {
    screen: BuyQrScreen,
    navigationOptions: {
      title: 'Confirm Purchase',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  }
});

export const NetworkScreenStack = createStackNavigator({
  NetworkScreen: {
    screen: NetworkScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  },
  NetworkDetailsScreen: {
    screen: NetworkDetailsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ListingDescription: {
    screen: ListingDescription,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  NewListingScreen: {
    screen: NewListingScreen,
    navigationOptions: {
      title: 'Share',
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  BuyDetailScreen: {
    screen: BuyDetailScreen,
    navigationOptions: {
      title: 'Buy',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  BuyConfirmScreen: {
    screen: BuyConfirmScreen,
    navigationOptions: {
      title: 'Purchase Completed',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
    BuyQrScreen: {
      screen: BuyQrScreen,
      navigationOptions: {
        title: 'Confirm Purchase',
        headerStyle: {
          backgroundColor: '#0873BE'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          flex:1,
          textAlign:"center",
          fontWeight: 'bold',
        },
      },
    }
  }
});

export const BuySellScreenStack = createStackNavigator({
  BuySellScreen: {
    screen: BuySellScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    }
  },
  BuyScreen: {
    screen: BuyScreen,
    navigationOptions: {
      title: 'BUY',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  BuyDetailScreen: {
    screen: BuyDetailScreen,
    navigationOptions: {
      title: 'Buy',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  BuyConfirmScreen: {
    screen: BuyConfirmScreen,
    navigationOptions: {
      title: 'Purchase Completed',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  BuyQrScreen: {
    screen: BuyQrScreen,
    navigationOptions: {
      title: 'Confirm Purchase',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  SellScreen: {
    screen: SellScreen,
    navigationOptions: {
      title: 'Seller Account',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  SellToBuyerScreen: {
    screen: SellToBuyerScreen,
    navigationOptions: {
      title: 'Sell',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  AddProductScreen: {
    screen: AddProductScreen,
    navigationOptions: {
      title: 'Add Products or services',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  AddProductCategoryScreen: {
    screen: AddProductCategoryScreen,
    navigationOptions: {
      title: 'Add Product Category',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  AddProductDetailScreen: {
    screen: AddProductDetailScreen,
    navigationOptions: {
      title: 'Add Products Details',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  MyProductsScreen: {
    screen: MyProductsScreen,
    navigationOptions: {
      title: 'My Products',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  SellScanScreen: {
    screen: SellScanScreen,
    navigationOptions: {
      title: 'Sell to Buyer',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  ConfirmSaleScreen: {
    screen: ConfirmSaleScreen,
    navigationOptions: {
      title: 'Account Summary',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ConfirmSaleDetailScreen: {
    screen: ConfirmSaleDetailScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  SellConfirmScreen: {
    screen: SellConfirmScreen,
    navigationOptions: {
      title: 'Account Summary',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  SellerInfoScreen: {
    screen: SellerInfoScreen,
    navigationOptions: {
      title: 'Seller Info',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  AccountSummaryScreen: {
    screen: AccountSummaryScreen,
    navigationOptions: {
      title: 'Account Summary',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  QrScannerScreen: {
    screen: QrScannerScreen,
    navigationOptions: {
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ListingDescription: {
    screen: ListingDescription,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
});


export const SearchScreenStack = createStackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  },
  SearchResultsScreen: {
    screen: SearchResultsScreen,
    navigationOptions: {
      title: 'FIND SELLERS',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  },
  BuyDetailScreen: {
    screen: BuyDetailScreen,
    navigationOptions: {
      title: 'Buy',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  BuyConfirmScreen: {
    screen: BuyConfirmScreen,
    navigationOptions: {
      title: 'Purchase Completed',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  BuyQrScreen: {
    screen: BuyQrScreen,
    navigationOptions: {
      title: 'Confirm Purchase',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ListingDescription: {
    screen: ListingDescription,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
});

export const FreindsScreenStack = createStackNavigator({
  FreindsScreen: {
    screen: FreindsScreen,
    navigationOptions: {
      title: 'Friends',
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
  ListingDescription: {
    screen: ListingDescription,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
});

export const inviteFriendFromContactScreenStack = createStackNavigator({
  InviteFriendsMain: {
    screen: InviteFriendsMain,
    navigationOptions: {
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  InviteFriendFromContactScreen: {
    screen: InviteFriendFromContactScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  InviteFriendFromQrScreen: {
    screen: InviteFriendFromQrScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
});

export const MyEarningsScreenStack = createStackNavigator({
  MyEarningsScreen: {
    screen: MyEarningsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  },
  ListingDescription: {
    screen: ListingDescription,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
});

export const MyPurchasesScreenStack = createStackNavigator({
  MyPurchasesScreen: {
    screen: MyPurchasesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  },
  ListingDescription: {
    screen: ListingDescription,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
});

export const ApprovedPurchasesScreenStack = createStackNavigator({
  ApprovedPurchasesScreen: {
    screen: ApprovedPurchasesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  }
});

export const UnapprovedPurchasesScreenStack = createStackNavigator({
  UnapprovedPurchasesScreen: {
    screen: UnapprovedPurchasesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  }
});

export const ClearedPurchasesScreenStack = createStackNavigator({
  ClearedPurchasesScreen: {
    screen: ClearedPurchasesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  }
});

export const AboutScreenStack = createStackNavigator({
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  },
});

export const KeywordsScreenStack = createStackNavigator({
  KeywordsScreen: {
    screen: KeywordsScreen,
    navigationOptions: {
      title: 'Search Keywords',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  KeywordRegisterScreen: {
    screen: KeywordRegisterScreen,
    navigationOptions: {
      title: 'Register Keywords',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
});

export const ChatsMainScreenStack = createStackNavigator({
  ChatsMainScreen: {
    screen: ChatsMainScreen,
    navigationOptions: {
      title: 'Chats',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      header: null,
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'bold',
      },
    }
  },
});

export const LanguageScreenStack = createStackNavigator({
  LanguageScreen: {
    screen: LanguageScreen,
    navigationOptions: {
      title: 'Select Language',
      headerStyle: {
        backgroundColor: '#0873BE'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex:1,
        textAlign:"center",
        fontWeight: 'normal',
      },
    },
  },
});










//***************FRIENDS Top Tab NAVIGATOR*********************
const SafeAreaMaterialTopTabBar = ({ ...props }) => (
  <SafeAreaView>
    <MaterialTopTabBar {...props} />
  </SafeAreaView>
);

const options = {
  initialRouteName: 'Freinds',
  swipeEnabled: true,
  tabBarOptions: {
    indicatorStyle: { backgroundColor: '#fff' },
    activeTintColor: '#71a1ed', // active icon color
    style: {
        backgroundColor: '#0873BE' // TabBar background
    },
    labelStyle:{
      fontSize: 20,
    }
  },
  tabBarComponent: props => (<SafeAreaMaterialTopTabBar {...props} />),
};

const FriendsTopTab = createMaterialTopTabNavigator({
  Freinds: {
  screen: FreindsScreenStack
  },
  Invite: {
  screen: inviteFriendFromContactScreenStack
  },
}, options);

FreindsScreenStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};


//***************PURCHASES Top Tab NAVIGATOR*********************
const SafeAreaPurchasesTopTabBar = ({ ...props }) => (
  <SafeAreaView>
    <MaterialTopTabBar {...props} />
  </SafeAreaView>
);

const optionsPurchases = {
  initialRouteName: 'Unapproved',
  swipeEnabled: true,
  tabBarOptions: {
    indicatorStyle: { backgroundColor: '#fff' },
    inactiveTintColor: '#71a1ed', // inactive icon color
    activeTintColor: '#fff', // active icon color
    style: {
        backgroundColor: '#0873BE' // TabBar background
    },
    labelStyle:{
      fontSize: 13,
    }
  },
  tabBarComponent: props => (<SafeAreaPurchasesTopTabBar {...props} />),
};

const PurchasesTopTab = createMaterialTopTabNavigator({
  Unapproved: {
  screen: UnapprovedPurchasesScreenStack
  },
  Approved: {
  screen: ApprovedPurchasesScreenStack
  },
  Cleared: {
  screen: ClearedPurchasesScreenStack
  },
}, optionsPurchases);

PurchasesTopTab.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};






//***************DRAWER NAVIGATOR*********************
const DrawerNavigator = createDrawerNavigator({
  ProfilePicture: {
    screen: HomeScreenStack,
    navigationOptions: {
      drawerLabel: <UserProfileImage />,
    },
  },
  Home: {
    screen: HomeScreenStack,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Chat: {
    screen: ChatsMainScreenStack,
    navigationOptions: {
      drawerLabel: 'Inbox (3)',
    },
  },
  Earnings: {
    screen: MyEarningsScreenStack,
    navigationOptions: {
      drawerLabel: 'Earnings',
    },
  },
  Purchases: {
    screen: PurchasesTopTab,
    navigationOptions: {
      drawerLabel: 'Purchases',
    },
  },
  Keywords: {
    screen: KeywordsScreenStack,
    navigationOptions: {
      drawerLabel: 'Keywords',
    },
  },
  Language: {
    screen: LanguageScreenStack,
    navigationOptions: {
      drawerLabel: 'Language',
    },
  },
  About: {
    screen: AboutScreenStack,
    navigationOptions: {
      drawerLabel: 'About',
    },
  },
  Logout:{
    screen: SignOutComponent,
    navigationOptions: {
      drawerLabel: <SignOutComponent />,
    },
  }
},{
  drawerPosition: 'left',
  contentOptions: {
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 16
    }
  },
});








//***************TAB NAVIGATOR (ROOT)*********************
const AppNavigator = createBottomTabNavigator({
  Home: { screen: DrawerNavigator,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" color={tintColor} size={20}
        />
      )
    })
  },
  Buy: { screen: BuySellScreenStack,
    navigationOptions: () => ({
      tabBarLabel: 'Buy/Sell',
      tabBarIcon: ({tintColor}) => (
        <Icon name="dollar" color={tintColor} size={20}
        />
      )
    })
  },
  Search: { screen: SearchScreenStack,
    navigationOptions: () => ({
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
        <Icon name="search" color={tintColor} size={20}
        />
      )
    })
  },
  Network: { screen: NetworkScreenStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="users" color={tintColor} size={20}
        />
      )
    })
  },
  Friends: { screen: FriendsTopTab,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="address-book" color={tintColor} size={20}
        />
      )
    })
  },
}, {
  initialRouteName: 'Home',
  swipeEnabled: true,
  tabBarOptions: {
        inactiveTintColor: '#71a1ed', // inactive icon color
        activeTintColor: '#fff', // active icon color
        style: {
            backgroundColor: '#0873BE' // TabBar background
        },
        labelStyle:{
          fontSize: 15,
        }
    }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    
     
    App: AppNavigator,
    Auth: AuthStack,
    
  },

  
  
  {
    initialRouteName: 'App',
  }
));
