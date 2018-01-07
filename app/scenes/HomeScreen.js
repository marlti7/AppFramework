import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
// 导入stack导航组件
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome', // 在导航中显示的标题内容
  };
  render() {
    // 这里可以是导入的其他组件
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
