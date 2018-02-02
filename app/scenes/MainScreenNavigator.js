import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from './HomeScreen';

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>;
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  All: {
    screen: AllContactsScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
}, {
  tabBarOptions: {
    tabBarPosition: 'bottom',
    showIcon: true,
    activeTintColor: '#007AFF',
    inactiveTintColor: '#929292',
    labelStyle: {
      fontSize: 12,
    },
    indicatorStyle: {
      borderBottomColor: '#ffffff',
      borderBottomWidth: 1,
    },
    style: {
      backgroundColor: 'white',
    },
  },
  tabBarPosition: 'bottom',
  // animationEnabled: false,
  // lazy: true,
});
MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

export default MainScreenNavigator;
