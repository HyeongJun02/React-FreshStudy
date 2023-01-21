import React from 'react'
import {
  SafeAreaView,
  Image,
  StyleSheet,

  Button,
  Text,
  View,

  TouchableOpacity,
  
  Alert,

  ScrollView
} from 'react-native'

import reactImg from './img/logo.png'

const createAlert = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용",
    [
      {
        text: "확인",
        onPress: () => console.log("확인 버튼을 눌렀습니다."),
      }
    ]
  )
}

const createTwoButtonAlert = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용",
    [
      {
        text: "취소",
        onPress: () => console.log("취소 버튼을 눌렀습니다."),
        style: "cancel"
      },
      {
        text: "확인",
        onPress: () => console.log("확인 버튼을 눌렀습니다.")
      }
    ]
  )
}

const createThreeButtonAlert = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용",
    [
      {
        text: "나중에 알림",
        onPress: () => console.log("나중에 알림 버튼을 눌렀습니다.")
      },
      {
        text: "취소",
        onPress: () => console.log("취소 버튼을 눌렀습니다.")
      },
      {
        text: "확인",
        onPress: () => console.log("확인 버튼을 눌렀습니다.")
      },
    ]
  )
}

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Image source={require('./img/logo.png')} style={styles.img}/>
        <Image source={reactImg} style={styles.img}/>

        <View style={{alignItems: 'center', margin: 10}}>
          <Text style={{fontSize: 20}}>버튼을 클릭해보세요</Text>
        </View>
        <Button
          onPress={() => console.log('버튼을 클릭했습니다.')}
          title="BUTTON"
          color="#191919"
        />

        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => console.log("눌렀습니다")}
        >
          <Text style={styles.text}>누르세요</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchContainer, {backgroundColor: '#191919'}]}
          onPress={createAlert}
        >
          <Text style={styles.text}>1버튼</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchContainer, {backgroundColor: 'red'}]}
          onPress={createTwoButtonAlert}
        >
          <Text style={styles.text}>2버튼</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchContainer, {backgroundColor: 'green'}]}
          onPress={createThreeButtonAlert}
        >
          <Text style={styles.text}>3버튼</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  
  touchContainer: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 20,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})

export default App