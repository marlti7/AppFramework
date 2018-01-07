import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'


class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>;
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: HomeScreen },
  All: { screen: AllContactsScreen },
});
MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

export default MainScreenNavigator;
