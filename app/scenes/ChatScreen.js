import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  CustomHeader,
} from '../components';

export default class ChatScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <CustomHeader navigation={navigation} />
    );
  }
}
