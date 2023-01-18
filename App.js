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

const App = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.container0}>
        <View style={styles.subContainer0_0}></View>
        <View style={styles.subContainer0_1}></View>
      </View>
      <View style={styles.container1}>
        <View style={styles.subContainer1_0}></View>
        <View style={styles.subContainer1_1}>
          <View style={styles.subContainer1_1_0}></View>
          <View style={styles.subContainer1_1_1}></View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.subContainer2_0}></View>
        <View style={styles.subContainer2_1}></View>
        <View style={styles.subContainer2_2}></View>
      </View>
    </View>
  )
}

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
        text: "확인",
        onPress: () => console.log("확인")
      },
      {
        
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소")
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
        text: "확인",
        onPress: () => console.log("확인")
      },
      {
        
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소")
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
  },
  container0: {
    flex: 1,
  flexDirection: 'row'
 },
subContainer0_0: {
  flex: 2,
  backgroundColor: 'black'
},
subContainer0_1: {
  flex: 3,
  backgroundColor: 'blue'
},

 container1: {
    flex: 2,
  flexDirection: 'column'
 },
subContainer1_0: {
  flex: 2,
  backgroundColor: 'white'
},
subContainer1_1: {
  flex: 6,
  backgroundColor: 'orange',
  flexDirection: 'row'
},
subContainer1_1_0: {
  flex: 3,
  backgroundColor: 'pink'
},
subContainer1_1_1: {
  flex: 5,
  backgroundColor: 'purple'
},

 container2: {
    flex: 1,
  flexDirection: 'row'
 },
subContainer2_0: {
  flex: 2,
  backgroundColor: 'yellow'
},
subContainer2_1: {
  flex: 3,
  backgroundColor: 'green'
},
subContainer2_2: {
  flex: 3,
  backgroundColor: 'lightgreen'
},

mainView: {
  backgroundColor: 'pink',
  flex: 1,
  //alignItems: 'center', // 좌우 정렬
  //justifyContent: 'center' // 상하 정렬
},
mainText: {
  //backgroundColor: 'red',
  //color: 'white',
  fontSize: 30
}
})

export default App;

