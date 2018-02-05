import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  // TouchableOpacity,
} from 'react-native';
import {
  CustomHeader,
} from '../components';

export default class ChatScreen extends React.Component {
  componentDidMount() {
    const { chatAdd } = this.props;
    this.props.chatAdd();
  }
  render() {
    const { navigation, chatSum } = this.props;
    return (
      <View>
        <CustomHeader navigation={navigation} />
        <View>
          <Text>{chatSum.chatNum}</Text>
        </View>
      </View>
    );
  }
}
ChatScreen.defaultProps = {
  navigation: {},
  chatSum: {},
  chatAdd: () => {},
};

ChatScreen.propTypes = {
  navigation: PropTypes.object,
  chatSum: PropTypes.object,
  chatAdd: PropTypes.func,
};
