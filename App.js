import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from  'react-native';

const App = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}> 김형준바보 </Text>
    </View>
  )
}

const styles = StyleSheet.create ( { 
  mainView: {
    backgroundColor: 'yellow', 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainText: {
    backgroundColor: 'pink',
    color: 'gray',
    fontSize: 30,
  }
})

export default App;


