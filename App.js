import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native';
// 导入stack导航组件
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

// import HomeScreen from './app/scenes/HomeScreen'
import ChatScreen from './app/scenes/ChatScreen';
import MainScreenNavigator from './app/scenes/MainScreenNavigator';
// 进行导航的注册
const defaultNavigationOptions = {
  header: null,
  gesturesEnabled: true,
  gestureResponseDistance: {
    horizontal: 100,
    vertical: 135,
  },
};
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 64 : 64 - StatusBar.currentHeight;
const tabNavigationOptions = {
  header: (
    <View
      style={{
        backgroundColor: '#79B45D',
        height: STATUSBAR_HEIGHT,
        // borderBottomColor: '#79B45D',
        // borderBottomWidth: 0,
        // borderTopWidth: 0,
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>
        my chat
      </Text>
    </View>
  ),
  gesturesEnabled: true,
};
const AppContent = StackNavigator({
  Home: { screen: MainScreenNavigator, navigationOptions: tabNavigationOptions },
  Chat: { screen: ChatScreen, navigationOptions: defaultNavigationOptions },
}, {
  headerMode: 'screen',
  transitionConfig: () => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal }),
  cardStyle: {
    opacity: 1,
    // backgroundColor: 'transparent',
  },
  // navigationOptions: {
  //   gesturesEnabled: true,
  // },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    justifyContent: 'center',
    // height: STATUSBAR_HEIGHT,
    // marginTop: STATUSBAR_HEIGHT,
  },
});
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      translucent
      hidden={false}
      networkActivityIndicatorVisible={false}
      backgroundColor={backgroundColor}
      {...props}
    />
  </View>
);
const App = () => (
  <View style={{ flex: 1 }}>
    <MyStatusBar backgroundColor="#79B45D" barStyle="dark-content" />
    <AppContent />
  </View>
);

export default App;
