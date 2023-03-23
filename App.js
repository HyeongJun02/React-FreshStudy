import React from 'react';
import { 
    SafeAreaView, 
    Text, 
    FlatList,
    Linking,
    TouchableOpacity,
    View,
    StyleSheet, 
    Alert,
    Image,
    StatusBar,
} from 'react-native';

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


const createAlert=(name)=>{
    Alert.alert(
        name,
        name + " 버튼 입니다. ",
        [
            {text:"확인",onPress:()=>console.log("확인 버튼을 눌렀습니다")},
            {text:"취소", style:"cancel",onPress:()=>console.log("취소 버튼을 눌렀습니다")}
        ]
    )
}
const createAlert1=(name)=>{
    Alert.alert(
        name,
        name + " 님과의 채팅 버튼 입니다.",
        [
            {text:"확인",onPress:()=>console.log("확인 버튼을 눌렀습니다")},
            {text:"취소", style:"cancel",onPress:()=>console.log("취소 버튼을 눌렀습니다")}
        ]
    )
}
const url="https://www.naver.com"

const renderItem=({item})=>(
    <TouchableOpacity onPress={()=>createAlert1(item.title)}>
        <View style={{flexDirection:'row',marginRight:8}}>
            <Image source={require('./Img/Disislogo.png')} style={{height:55,width:55,borderRadius:15,margin:10,}}/>
            <View style={{flexDirection:'row',flex:5}}>
                <View style={{flex:4}}>
                    <Text style={{fontSize:25,fontWeight:'450',color:'black'}}>{item.title}</Text>
                    <Text style={{fontSize:18,color:'black'}}>{item.description}</Text>
                </View>
                <View style={{flex:2,alignItems:'flex-end'}}>
                    <Text style={{padding:10,textAlign:'right',fontSize:18,color:'black'}}>{item.date}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const App = () => {
  return (
      <SafeAreaView style={styles.HeaderView}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'800',color:'black',fontSize:30,textAlign:'center'}}>Kakaochat</Text>
        </View>
            
        <View style={styles.MainView}>
            <Text style={{ flex:1,fontSize:25,color:'black',fontWeight:'450',margin:10}}>채팅</Text>
            <View style={{flexDirection:'row',margin:8}}>
                <TouchableOpacity onPress={()=>createAlert('검색하기')}>
                    <Image source={require('./Img/search.png')} style={{height: 25,width: 25,justifyContent:'center',resizeMode:'contain',margin:3}}/>
                </TouchableOpacity>   
                <TouchableOpacity onPress={()=>createAlert('오픈채팅')}>
                    <Image source={require('./Img/openchat.png')} style={{height: 25,width: 25,justifyContent:'center',resizeMode:'contain',margin:3}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>createAlert('프로필 뮤직')}>
                    <Image source={require('./Img/music.png')} style={{height: 25,width: 25,justifyContent:'center',resizeMode:'contain',margin:3}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>createAlert('세팅')}>
                    <Image source={require('./Img/setting.png')} style={{height: 25,width: 25,justifyContent:'center',resizeMode:'contain',margin:3}}/>
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.contentView}>
            <FlatList
            ListHeaderComponent={
                <View>
                    <TouchableOpacity onPress={()=>Linking.openURL(url)}>
                     <Text style={{backgroundColor:"gray",color:'white',textAlign:'center',borderRadius:15,fontSize:20}}>광고배너</Text>
                    </TouchableOpacity>
                </View>
            }
            data={DATA} 
            renderItem={(renderItem)}
            keyExtractor={item => item.id}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
HeaderView:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
},
MainView : {
    flexDirection : 'row',
    alignItems : 'center',
    borderBottomColor : 'black',
    borderBottomWidth : 1
},
contentView:{
    flex: 12,
    borderRadius:15,
    margin:10,
},
});

export default App;