import React, { Children } from 'react';
import {
  View, 
  Image,
  SafeAreaView,
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Alert,
  Linking,
  FlatList
 } from 'react-native';

const url = "http://naver.com"

const createAlert = (name) => {
  Alert.alert(
    name,
    name + " 버튼 입니다.",
    [
      {text: "확인", onPress:()=>console.log("확인 버튼을 눌렀습니다")},
      {text: "취소", style: "cancel", onPress: () => console.log("취소 버튼을 눌렀습니다")}
    ]
  )
}

const renderItem = ({item}) => {
  return (
    <View style = {styles.tak}>
      <View>
        <Image source = {require("./image/search.png")} style = {styles.profile}/>
      </View>

      <View style = {styles.content}>
        <View style = {styles.nameDate}>
          <Text style = {styles.text}>  {item.title}</Text>
          <Text>{item.date}</Text>
        </View> 

        <Text>    {item.description}</Text>
      </View>
    </View>
  )
}

const App = () =>{
  return (
    <SafeAreaView style ={{flex:1, backgroundColor: 'gray'}}>
      <View style = {styles.title}>
        <TouchableOpacity onPress = {() => createAlert("뒤로가기")}>
          <Image source = {require("./image/cancel.png")} style = {styles.img}/>
        </TouchableOpacity>
        <Text style ={{fontSize : 20}}>    KakaoChat</Text>
      </View>
        
      <View style = {styles.header}>

        <View style = {styles.container}>
          <Text style = {{fontSize : 20, color : 'black', textAlign: 'left'}}>채팅</Text>
        </View>

        <View style = {styles.containerIcon}>
          <TouchableOpacity onPress = {() => createAlert("검색")}>
            <Image source = {require("./image/search.png")} style = {styles.containerImg}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => createAlert("추가")}>
            <Image source = {require("./image/add.png")} style = {styles.containerImg}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => createAlert("뮤직")}>
            <Image source = {require("./image/music.png")} style = {styles.containerImg}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => createAlert("설정")}>
            <Image source = {require("./image/setting2.png")} style = {styles.containerImg}/>
          </TouchableOpacity>
        </View>

      </View>

      <FlatList
        ListHeaderComponent = { 
            <TouchableOpacity onPress={() => Linking.openURL(url)} style = {styles.ad}>
              <Text style = {styles.text}>광 고 배 너</Text>
            </TouchableOpacity>
        }
        data = {DATA}
        renderItem = {renderItem}
        keyExtractor = {(item) => String(item.id)}
        ItemSeparatorComponent = {() => <View style = {styles.tak} />}

      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    padding: 10,
    margin: 1
  },

  text: {
    fontSize: 20,
    textAlign: 'center'
  },

  ad: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
  },

  img: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    resizeMode: 'contain',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  container: {
    flex: 1,
    margin: 3,
  },

  containerIcon: {
    height: 20,
    width: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 4
  },

  containerImg: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    resizeMode: 'contain',
    margin: 4
  },

  
  tak: {
    padding: 10,
    flexDirection: 'row',
  },

  profile: {
    height: 60,
    width: 60,
    borderRadius:20,
    backgroundColor: 'white',
    resizeMode: 'contain'
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  nameDate: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  }
}
);

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

export default App;