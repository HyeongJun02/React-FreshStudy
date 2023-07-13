import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드

export default class MainScreen extends Component {

  // navigationOptions 코드 추가
  static navigationOptions = {
    headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
    title: 'Instagram',
    headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});