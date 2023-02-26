import React from 'react';
import {
  View, 
  Image,
  SafeAreaView,
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Alert,
  ImageBackground
 } from 'react-native';
 

const createAlert=(name)=>{
  Alert.alert(
    name,
    name + "버튼 입니다.",
    [
      {text: "확인", onPress:()=>console.log("확인 버튼을 눌렀습니다")},
      {text: "취소",style: "cancel",onPress:()=> console.log("취소 버튼을 눌렀습니다")}
    ]
  )
}

const App = () =>{
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./profile/DisisProfile.png')} resizeMode='cover' style={styles.imgbackground}>
        
        <View style={styles.MainView}>
          <TouchableOpacity onPress={()=> createAlert('취소')}>
            <Image source={require('./profile/cancel.png')} style={styles.img}/>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>createAlert('선물하기')}>
              <Image source={require('./profile/gift.png')} style={styles.HeaderRightButton}/>
              </TouchableOpacity>
            <TouchableOpacity onPress={()=>createAlert('QR코드')}>
              <Image source={require('./profile/QRcode.png')} style={styles.HeaderRightButton}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>createAlert('설정')}>
              <Image source={require('./profile/ediet.png')} style={styles.img}/>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.contentView}>
          <View style={{alignItems:"center",margin:10}}>
            <TouchableOpacity onPress={()=>createAlert('프로필 사진')}>
              <Image source={require('./profile/DisisProfile.png')} style={styles.ProfileImg}/>
            </TouchableOpacity>
            <Text style={{fontSize: 20, marginTop:10}}>진예운</Text>
          </View>
        </View>
        <View style={styles.Bottom}>
          <TouchableOpacity onPress={() => createAlert('나와의 채팅')}>
            <Image source={require('./profile/chat.png')} style={styles.bottomImg}/>
            <Text style={styles.bottomText}>나와의 채팅</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => createAlert('프로필 편집')}>
            <Image source={require('./profile/ediet.png')} style={styles.bottomImg}/>
            <Text style={styles.bottomText}>프로필 편집</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => createAlert('카카오스토리')}>
            <Image source={require('./profile/kakaostory.png')} style={styles.bottomImg}/>
            <Text style={styles.bottomText}>카카오스토리</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
  
  

  img:{
    height: 25,
    width: 25,
    justifyContent:'center',
    resizeMode:'contain'
  },
  imgbackground:{
    width:'100%',
    height:'100%',
    resizeMode:"cover",
    backgroundColor:'skyblue'
  },
  MainView:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 10
  },
  HeaderRightButton : {
    margin : 5,
    height : 25,
    width : 25,
    resizeMode: 'contain'
  },
  ProfileImg:{
    height:100,
    width: 100,
    borderRadius : 35
  },
  contentView : {
    height : 600,
    flexDirection : 'column-reverse',
    alignItems : 'center',
    borderBottomColor : 'white',
    borderBottomWidth : 1
  },
  Bottom : {
    flex : 1, 
    padding : 10, 
    justifyContent : 'space-around', 
    flexDirection : 'row'
  },
  bottomImg : {
    width : 35,
    height : 35,
    alignSelf : 'center',
  },
  bottomText : {
    marginTop : 3,
    color : 'white'
  }
}
);
export default App;