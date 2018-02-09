import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const GET_URL = 'https://api.douban.com/v2/movie/top250';

export default class AllContactsScreen extends React.Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch(GET_URL)
    // ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
      .then(response => response.json())
      .then((responseData) => {
        console.log("responseData", responseData);

        // this.setState({
        //   data: responseData,
        // });
      })
      .done();
  }
  render() {
    const { navigation } = this.props;
    return <Text>List of all contacts</Text>;
  }
}
