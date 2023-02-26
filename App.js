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
  ImageBackground,
  Touchable
} from 'react-native';

import img from './img/bp.png'
import xLogo from './img/x.png'
import presentLogo from './img/present.png'
import qrLogo from './img/qr.png'
import preferenceLogo from './img/preference.png'
import pp from './img/pp.png'
import chat from './img/chat.png'
import edit from './img/edit.png'
import story from './img/story.png'

const createAlert=( name )=>{
  Alert.alert(
    name,
    name + " 버튼 입니다.",
    [
      {text: "확인", onPress:()=>console.log("확인 버튼을 눌렀습니다")},
      {text: "취소",style: "cancel",onPress:()=> console.log("취소 버튼을 눌렀습니다")}
    ]
  )
}


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={img} style={{width: '100%', height: '100%'}}>
      <View style={styles.settingView}>
        <View style={styles.leftView}>
          <TouchableOpacity  onPress={() => createAlert('취소')}>
            <Image source={xLogo} style={{width: 20,height: 20,margin:10}}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.rightView}></View>
          <TouchableOpacity  onPress={() => createAlert('선물하기')}>
            <Image source={presentLogo} style={{width: 20,height: 20,margin:10}}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => createAlert('QR코드')}>
            <Image source={qrLogo} style={{width: 20,height: 20,margin:10}}></Image>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => createAlert('설정')}>
            <Image source={preferenceLogo} style={{width: 20,height: 20,margin:10}}></Image>
         </TouchableOpacity>
        </View>

      <View style={styles.profileView}>
        <View style={styles.topView}>
          <TouchableOpacity onPress={() => createAlert('프로필 사진')}>
            <Image source={pp} style={{resizeMode: 'contain',height: 80,width: 80,borderRadius: 25}}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}></View>
          <TouchableOpacity onPress={() => createAlert('이름')}>
            <Text style={{margin:20}}>하윤지</Text>
          </TouchableOpacity>
      </View>
      
      <View style={styles.editView}>
        <TouchableOpacity  onPress={() => createAlert('나와의 채팅')}>
          <Image source={chat} style={{width: 20,height: 20,margin:20}}></Image>
          <Text style={{ color: 'white'}}>나와의 채팅</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => createAlert('프로필 편집')}>
          <Image source={edit} style={{width: 20,height: 20,margin:20}}></Image>
          <Text style={{ color: 'white'}}>프로필 편집</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => createAlert('카카오스토리')}>
          <Image source={story} style={{width: 20,height: 20,margin:20}}></Image>
          <Text style={{ color: 'white'}}>카카오스토리</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  settingView: {
    flex: 8,
    flexDirection: 'row',
  },
  leftView:{
    flex: 1,
  },
  rightView:{
    flex: 8,
    flexDirection: 'row'
  },
  profileView: {
    flex: 2,
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    borderBottomColor : 'white',
    borderBottomWidth : 0.5
  },
  topView:{
    flex: 1,
  },
  bottomView:{
    flex: 1,
  },
  editView: {
    flex: 1.5,
    justifyContent:'space-around',
    flexDirection: 'row'
  },

 
});
export default App; 