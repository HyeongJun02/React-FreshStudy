import React from 'react';
import {
  View, 
  Image,
  SafeAreaView,
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Alert,
  ImageBackground,
  Touchable
 } from 'react-native';
 

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

const App = () =>{
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={require('./image/taeyeop.jpg')} resizeMode='cover' style={styles.imgbackground}>

        <View style={styles.headerView}>

          <TouchableOpacity onPress={() => createAlert('취소')}>
            <Image source={require('./image/cancel.png')} style={styles.img}/>
          </TouchableOpacity>

          <View style={{flexDirection : 'row'}}>
            <TouchableOpacity onPress={() => createAlert('선물하기')}>
              <Image source={require('./image/gift.png')} style={styles.headerRightButton}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => createAlert('QR코드')}>
              <Image source={require('./image/qr.png')} style={styles.headerRightButton}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => createAlert('설정')}>
              <Image source={require('./image/setting.png')} style={styles.headerRightButton}/>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.contentView}>

          <View style={{alignItems : 'center', margin : 10}}>
            <TouchableOpacity onPress={() => createAlert('프로필 사진')}>
              <Image source={require('./image/profile.jpg')} style={styles.profileImage}/>
            </TouchableOpacity>
            <Text style={{fontSize : 20, marginTop : 10, color : 'white'}}>이태엽</Text>
          </View>

        </View>

        <View style={styles.footer}>

          <TouchableOpacity onPress={() => createAlert('나와의 채팅')}>
            <Image source={require('./image/chat.png')} style={styles.footerImg}/>
            <Text style={styles.footerText}>나와의 채팅</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => createAlert('프로필 편집')}>
            <Image source={require('./image/pencil.png')} style={styles.footerImg}/>
            <Text style={styles.footerText}>프로필 편집</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => createAlert('카카오스토리')}>
            <Image source={require('./image/story.png')} style={styles.footerImg}/>
            <Text style={styles.footerText}>카카오스토리</Text>
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
    backgroundColor:'skyblue',
  },
  headerView : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 10
  },
  headerRightButton : {
    margin : 5,
    height : 25,
    width : 25,
    resizeMode: 'contain'
  },
  profileImage : {
    height : 100,
    width : 100,
    borderRadius : 35
  },
  contentView : {
    height : 650,
    flexDirection : 'column-reverse',
    alignItems : 'center',
    borderBottomColor : 'white',
    borderBottomWidth : 1
  },
  footer : {
    flex : 1, 
    padding : 10, 
    justifyContent : 'space-around', 
    flexDirection : 'row'
  },
  footerImg : {
    width : 20,
    height : 20,
    alignSelf : 'center',
  },
  footerText : {
    marginTop : 3,
    color : 'white'
  }
  
}
);
export default App;