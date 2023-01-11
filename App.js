import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  mainView: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center', // 좌우 정렬
    justifyContent: 'center' // 상하 정렬
  },
  mainText: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 30
  }
})

export default App;