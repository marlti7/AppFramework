import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class CustomHeader extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          backgroundColor: '#79B45D',
          height: Platform.OS === 'ios' ? 64 : 64,
          paddingTop: Platform.OS === 'ios' ? 20 : 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome
            name="angle-left"
            size={26}
            style={{ color: 'white' }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginRight: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>
            my chat
          </Text>
        </View>
      </View>
    );
  }
}
