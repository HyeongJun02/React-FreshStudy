import React from 'react';
import {
  SafeAreaView, 
  Image, 
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';

import img from './img/logo.png'

const createAlert0 = () => {
  Alert.alert(
    "Alert TITLE",
    "Alert CONTENTS",
    [
      {
        text: "cancel",
        style: "cancel",
        onPress: () => console.log('Button cancel')
      },
      {
        text: "confirm",
        onPress: () => console.log('Button confirm')
      }
    ]
    
  )
}

const createAlert1 = () => {
  Alert.alert(
    "Alert 타이틀",
    "Alert 내용",
    [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log('버튼 취소')
      },
      {
        text: "확인",
        onPress: () => console.log('버튼 확인')
      }
    ]
  )
}
const createAlert2 = () => {
  Alert.alert(
    "근데",
    "있잖아",
    [
      {
        text: "근데",
        style: "cancel",
        onPress: () => console.log('근데')
      },
      {
        text: "있잖아",
        onPress: () => console.log('있잖아')
      }
    ]
  )
}
const createAlert3 = () => {
  Alert.alert(
    "조금",
    "힘들고",
    [
      {
        text: "조금",
        style: "cancel",
        onPress: () => console.log('조금')
      },
      {
        text: "힘들고",
        onPress: () => console.log('힘들고')
      }
    ]
  )
}
const createAlert4 = () => {
  Alert.alert(
    "많이",
    "귀찮은듯 해",
    [
      {
        text: "많이",
        style: "cancel",
        onPress: () => console.log('에휴')
      },
      {
        text: "귀찮은듯 해",
        onPress: () => console.log('후하')
      }
    ]
  )
}
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={img} style={styles.img}></Image>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text>글씨</Text>
      </View>
      <Button
        onPress={() => console.log('버튼 클릭됨')}
        title = "Button"
        color="#D8CEF6"
      />

      <TouchableOpacity
        onPress={()=> console.log("TouchableOpacity")}
      >
        <Text>눌러</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touch,styles.containerone]}
        onPress = {createAlert0}
      >
      </TouchableOpacity>
      <View style={styles.trash0}>
      
        <TouchableOpacity
          style= {[styles.touch,styles.containertwo]}
          onPress = {createAlert1}
        >
        </TouchableOpacity>
        <TouchableOpacity
          style= {[styles.touch,styles.containerthree]}
          onPress = {createAlert2}
        ><TouchableOpacity
        style= {[styles.touch,styles.containerfour]}
        onPress = {createAlert3}
      >
      </TouchableOpacity>
      <TouchableOpacity
        style= {[styles.touch,styles.containerfive]}
        onPress = {createAlert4}
      >
      </TouchableOpacity>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create ({
  img: {
    height:208,
    width:200,
    resizeMode: 'contain'
  },
  container: {
    flex: 1
  },
  containerone: {
    flex: 1,
    backgroundColor: '#F8E0E0',
    flexDirection: "row"

  },
  trash0: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:"row",
  },
  containertwo: {
    flex: 1,
    backgroundColor: '#A9F5A9'
  
  },
  containerthree: {
    flex: 5, 
    backgroundColor: '#E0F2F7'

  },
  trash1: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:"column"
  },
  containerfour: {
    flex: 2,
    backgroundColor: '#F5A9E1'
  
  },
  containerfive: {
    flex: 1, 
    backgroundColor: '#0174DF'

  },
  touch: {
    backgroundcolor: 'red',
    paddingHorizontal: 50,
    paddingVertical: 20,
    //margin: 10

  }
})
export default App; 