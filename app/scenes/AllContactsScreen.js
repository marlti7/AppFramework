import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class AllContactsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return <Text>List of all contacts</Text>;
  }
}
