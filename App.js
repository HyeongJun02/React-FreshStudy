import React from 'react';
import {
  SafeAreaView, 
  Image, 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
  FlatList
} from 'react-native';

import search from './img/search.png'
import chatPlus from './img/chatPlus.png'
import music from './img/music.png'
import setting from './img/setting.png'
import thisislogo from './img/thisislogo.png'

const DATA = [
  {
      id: 1,
      title: "박경민",
      description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
      date: "어제"
  },
  {
      id: 2,
      title: "정주영",
      description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
      date: "20:28"
  },
  {
      id: 3,
      title: "한재희",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
      date: "3월 10일"
  },
  {
      id: 4,
      title: "김재원",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
      date: "19:20"
  },
  {
      id: 5,
      title: "이호준",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
      date: "19:08"
  },
  {
      id: 6,
      title: "김예나",
      description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
      date: "18:59"
  },
  {
      id: 7,
      title: "조영훈",
      description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
      date: "18:50"
  },
  {
      id: 8,
      title: "김예빈",
      description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
      date: "18:46"
  },
  {
      id: 9,
      title: "황은화",
      description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
      date: "18:31"
  },
  {
      id: 10,
      title: "박경민",
      description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
      date: "어제"
  },
  {
      id: 11,
      title: "정주영",
      description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
      date: "20:28"
  },
  {
      id: 12,
      title: "한재희",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
      date: "3월 10일"
  },
  {
      id: 13,
      title: "김재원",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
      date: "19:20"
  },
  {
      id: 14,
      title: "이호준",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
      date: "19:08"
  },
  {
      id: 15,
      title: "김예나",
      description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
      date: "18:59"
  },
  {
      id: 16,
      title: "조영훈",
      description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
      date: "18:50"
  },
  {
      id: 17,
      title: "김예빈",
      description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
      date: "18:46"
  },
  {
      id: 18,
      title: "황은화",
      description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
      date: "18:31"
  },
  {
      id: 19,
      title: "박경민",
      description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
      date: "어제"
  },
  {
      id: 20,
      title: "정주영",
      description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
      date: "20:28"
  },
  {
      id: 21,
      title: "한재희",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
      date: "3월 10일"
  },
  {
      id: 22,
      title: "김재원",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
      date: "19:20"
  },
  {
      id: 23,
      title: "이호준",
      description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
      date: "19:08"
  },
  {
      id: 24,
      title: "김예나",
      description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
      date: "18:59"
  },
  {
      id: 25,
      title: "조영훈",
      description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
      date: "18:50"
  },
  {
      id: 26,
      title: "김예빈",
      description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
      date: "18:46"
  },
  {
      id: 27,
      title: "황은화",
      description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
      date: "18:31"
  }
];

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
const createAlert1=( title )=>{
  Alert.alert(
    title,
    title + "님 과의 채팅 버튼입니다.",
    [
      {text: "확인", onPress:()=>console.log("확인 버튼을 눌렀습니다")},
      {text: "취소",style: "cancel",onPress:()=> console.log("취소 버튼을 눌렀습니다")}
    ]
  )
}

const renderItem = ({item}) => {
  return (
    
    <TouchableOpacity onPress={() => createAlert1(item.title)} style={{ borderRadius: 20, padding: 10}} >
    
    <View style={{borderRadius: 25, flexDirection:"row"}}>
      <Image source={thisislogo} style={{height: 60,width: 60,borderRadius: 15, margin:5}}></Image>
      <View style={{flex: 5, flexDirection: 'row'}}>
      <View style={{flex: 4}}>

       
        <Text style={{ fontSize:22, margin:2}}>{item.title}</Text>
        <Text style={{ fontSize:13,margin:1}}>{item.description}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
          
      <Text style={{ fontSize:12}}>{item.date}</Text>
       
      </View>
      </View>
    </View>
    </TouchableOpacity>
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
        <FlatList
        ListHeaderComponent={
          <TouchableOpacity onPress={() => Linking.openURL(url)} style={{backgroundColor: '#E6E6E6', borderRadius: 20, padding: 20}}>
       <Text style={{fontSize: 20, textAlign: 'center'}}>광고 배너</Text>
     </TouchableOpacity>}
          

        data = {DATA}
        renderItem = {renderItem}
        
        />
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