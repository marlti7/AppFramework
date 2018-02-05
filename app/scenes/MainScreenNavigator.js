import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AllContactsScreen from './AllContactsScreen';

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
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  backBehavior: 'none',
  animationEnabled: true,
  // animationEnabled: false,
  lazy: true,
});
// MainScreenNavigator.navigationOptions = {
//   header: (
//     <View
//       style={{
//         backgroundColor: '#fff',
//         height: 30,
//         borderBottomColor: '#f7f7f7',
//         borderBottomWidth: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Text>
//         my chat
//       </Text>
//     </View>
//   ),
//   gesturesEnabled: true,
// };

export default MainScreenNavigator;
