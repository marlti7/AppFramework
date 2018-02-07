import React from 'react';
import {
  Text,
  View,
  // Button,
  // StatusBar,
} from 'react-native';
import { Button, Avatar, Badge } from 'react-native-elements';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import clIconConfig from '../config/customIcon.json';
// 自定义icon http://fontello.com/ download webfont config.json 与 ttf文件
// ios中 需要在项目Xcode文件中 Add file to xiangmu, 并在info.plist中的
// fonts provided by application加入改字体文件
// android 需要在 android/app/src/main/assets/fonts文件夹下添加该ttf文件
const CLIcon = createIconSetFromFontello(clIconConfig);

// 导入stack导航组件
export default class HomeScreen extends React.Component {
  render() {
    // 这里可以是导入的其他组件
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
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
        <Badge
          value={3}
          textStyle={{ color: 'orange' }}
          containerStyle={{
            width: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          wrapperStyle={{ justifyContent: 'center', alignItems: 'center' }}
        />
        <Avatar
          small
          rounded
          title="MT"
          // onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
    );
  }
}
