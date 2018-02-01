import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import clIconConfig from '../config/customIcon.json';
// 自定义icon http://fontello.com/ download webfont
const CLIcon = createIconSetFromFontello(clIconConfig);

// 导入stack导航组件
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Recent', // 在导航中显示的标题内容
  };
  render() {
    // 这里可以是导入的其他组件
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <CLIcon
          name="seer-contacts"
          size={26}
          style={{ color: 'red' }}
        />
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
