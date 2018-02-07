import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native';
// 导入stack导航组件
import codePush from 'react-native-code-push';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import appStore from './app/store/index';
// import HomeScreen from './app/scenes/HomeScreen'
// import ChatScreen from './app/scenes/ChatScreen';
import chatScreenContainer from './app/containers/chatScreenContainer';
import MainScreenNavigator from './app/scenes/MainScreenNavigator';
// 进行导航的注册

const { persistor, store } = appStore();
const defaultNavigationOptions = {
  header: null,
  gesturesEnabled: true,
  gestureResponseDistance: {
    horizontal: 100,
    vertical: 135,
  },
};
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 64 : 64;
const tabNavigationOptions = {
  header: (
    <View
      style={{
        backgroundColor: '#79B45D',
        height: STATUSBAR_HEIGHT,
        // borderBottomColor: '#79B45D',
        // borderBottomWidth: 0,
        // borderTopWidth: 0,
        paddingTop: Platform.OS === 'ios' ? 20 : 20,
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
  Chat: { screen: chatScreenContainer, navigationOptions: defaultNavigationOptions },
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
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
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

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={{ flex: 1 }}>
            <MyStatusBar backgroundColor="#79B45D" barStyle="dark-content" />
            <AppContent />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
// export default codePush(codePushOptions)(App);
export default App;
