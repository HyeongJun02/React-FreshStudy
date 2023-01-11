import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const App = () => {

return (
  <View style={styles.mainView}> 
      <Text style={styles.mainText}> 넵</Text> 
    </View>
  )
}

const styles = StyleSheet.create ({
  mainView: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

    
  },
  mainText: {
    color: 'white',
    backgroundColor: 'gray',
    fontSize: 30
    
  }
})
export default App; 