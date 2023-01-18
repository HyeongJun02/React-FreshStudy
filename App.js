import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from  'react-native';

import img from './image/logo.png';

const V = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용"
  )
}

const W = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용",
    [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소")
      },
      {
        text: "확인",
        onPress: () => console.log("확인")
      }
    ]
  )
}

const R = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용",
    [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소")
      },
      {
        text: "확인",
        onPress: () => console.log("확인")
      },
      {
        text: "되돌아가기",
        onPress: () => console.log("되돌아가기")
      }
    ]
  )
}

const App = () => {
  return (
    <SafeAreaView style={styles.f}>

      <Image source={img} style={styles.img}></Image>

      <View style={{alignItems: 'center', margin: 10}}>
        <Text>버튼 클릭</Text>
      </View>

      <Button 
        onPress={() => console.log('버튼 클릭 됨')}
        title = 'Button'
        color = 'skyblue'
      />

      <TouchableOpacity
        onPress={() => console.log('클릭 됨')}
        style={styles.center}
      >
        <Text>눌러</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {[styles.touch, {backgroundColor: 'red'}]}
        onPress = {V}
      >
        <Text>눌러!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {[styles.touch, {backgroundColor: 'orange'}]}
        onPress = {W}
      >
        <Text style={styles.center}>눌러!!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {[styles.touch, {backgroundColor: 'yellow'}]}
        onPress = {R}
      >
        <Text style={styles.center}>눌러!!!</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create ( { 
  img: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    alignItems: 'center',
  },

  f: {
    flex: 1,
    //alignItems: 'center'
  },

  touch: {
    backgroundColor:"pink",
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 20
  },

  center: {
    alignItems: 'center',
    alignContent: 'center'
  }
})

export default App;

