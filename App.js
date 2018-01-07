import React from 'react';
import {
  Text,
} from 'react-native';
// 导入stack导航组件
import { StackNavigator } from 'react-navigation';

// import HomeScreen from './app/scenes/HomeScreen'
import ChatScreen from './app/scenes/ChatScreen'
import MainScreenNavigator from './app/scenes/MainScreenNavigator'
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome', // 在导航中显示的标题内容
//   };
//   render() {
//     // 这里可以是导入的其他组件
//     return <Text>Hello, Navigation!</Text>;
//   }
// }
// 进行导航的注册
const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

export default App;
