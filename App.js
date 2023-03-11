import React from 'react';
import {
  SafeAreaView, 
  Image, 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Linking,
} from 'react-native';

import search from './img/search.png'
import chatPlus from './img/chatPlus.png'
import music from './img/music.png'
import setting from './img/setting.png'
import thisislogo from './img/thisislogo.png'
const DATA = {
	"page": [
		{ "profile": "" ,
			"name": "하윤지",
			"message": "다 놀았니? 할 일을 하자~~!",
      "date":"1분전"
     
		},
    {
			"name": "이태엽",
			"message": "태엽아 술 그만 마셔",
      "date":"20:28"
		},
    {
			"name": "진예운",
			"message": "안농 안농",
      "date":"17:28"
		},
    {
			"name": "정주영",
			"message": "안녕하세유..부족하지만 잘 부탁드립니다.",
      "date":"16:30"
		},
    {
			"name": "김형준",
			"message": "? 배신자",
      "date":"16:00"
		},
    {
			"name": "어쩌구",
			"message": "어쩌궁",
      "date":"어제"
		},
    {
			"name": "저쩌구",
			"message": "저쩌궁",
      "date":"3월 2일"
		},
    {
			"name": "마라탕",
			"message": "먹고싶다",
      "date":"2월 28일"
		},
    {
			"name": "마카롱",
			"message": "맛있겠다",
      "date":"1년전"
		},

    {
			"name": "끝",
			"message": "끝이다..",
      "date":"2년전"
		},
	]
}
const createAlert0=( name )=>{
  Alert.alert(
    name,
    name + " 버튼 입니다.",
    [
      {text: "확인", onPress:()=>console.log("확인 버튼을 눌렀습니다")},
      {text: "취소",style: "cancel",onPress:()=> console.log("취소 버튼을 눌렀습니다")}
    ]
  )
}
const createAlert1=( name )=>{
  Alert.alert(
    name,
    name + "님 과의 채팅 버튼입니다.",
    [
      {text: "확인", onPress:()=>console.log("확인 버튼을 눌렀습니다")},
      {text: "취소",style: "cancel",onPress:()=> console.log("취소 버튼을 눌렀습니다")}
    ]
  )
}
const url = "https://velog.io/@yun_ji"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.settingView}>
        <View style={styles.leftView}>
          <Text style={{fontSize:20, margin:12, fontWeight:'bold'}}>채팅</Text>

        </View>
        <View style={styles.rightView}></View>
          <TouchableOpacity onPress={() => createAlert0('검색')}>
            <Image source={search} style={{width: 20,height: 20,margin:10}}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => createAlert0('채팅방 생성')}>
            <Image source={chatPlus} style={{width: 20,height: 20,margin:10}}></Image>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => createAlert0('음악')}>
            <Image source={music} style={{width: 20,height: 20,margin:10}}></Image>
         </TouchableOpacity>
         <TouchableOpacity  onPress={() => createAlert0('설정')}>
            <Image source={setting} style={{width: 20,height: 20,margin:10}}></Image>
         </TouchableOpacity>
      </View>
      
      <View style={styles.profileView}>
        <ScrollView>
          <TouchableOpacity onPress={() => Linking.openURL(url)} style={{backgroundColor: '#E6E6E6', borderRadius: 20, padding: 20}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>광고 배너</Text>
          </TouchableOpacity>


        { DATA.page.map(item=>{
          return(
            <TouchableOpacity onPress={() => createAlert1(item.name)} style={{ borderRadius: 20, padding: 10}} >
            <Text style={{ fontSize:12, textAlign:"right"}}>{item.date}</Text>
            <View style={{borderRadius: 25, flexDirection:"row"}}>
              <Image source={thisislogo} style={{height: 55,width: 55,borderRadius: 15, margin:5}}></Image>
              <View style={{}}>
                <Text style={{ fontSize:22, margin:3}}>{item.name}</Text>
                <Text style={{ fontSize:13,margin:3}}>{item.message}</Text>
              </View>
            </View>
            </TouchableOpacity>
          )
        })}
          
        </ScrollView>
      </View>
      
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  settingView: {
    flex: 1,
    flexDirection: 'row',
    
  },
  leftView:{
    flex: 1,
    
  },
  rightView:{
    flex: 2,
  
  },
  
  profileView: {
    flex: 12,
    margin:10,
  },
  

 
});
export default App; 