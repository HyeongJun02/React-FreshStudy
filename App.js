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
        id:1,
        title: "진예운",
        Message: "화이팅",
        date: "어제"
    },
    {   
        id:2,
        title: "정주영",
        Message: "열심히 하겠습니다!",
        date: "20:28"
    },
    {
        id:3,
        title: "이태엽",
        Message: "과제 다했니?",
        date: "3월 10일"
    },
    {
        id:4,
        title: "하윤지",
        Message: "잘부탁해",
        date: "19:20"
    },
    {
        id:5,
        title: "친구1",
        Message: "메롱",
        date: "19:08"
    },
    {
        id:6,
        title:"동생",
        Message:"밥 먹자",
        date:"20:30"
    },
    {
        id:7,
        title:"친구2",
        Message:"ㅋㅋㅋ",
        date:"21:30"
    },
    {
        id:8,
        title:"친구3",
        Message:"ㅋㅋㅋㅋ",
        date:"22:30"
    },
    {
        id:9,
        title:"친구4",
        Message:"ㅋㅋㅋㅋ",
        date:"19:30"
    },
    {
        id:10,
        title:"엄마",
        Message:"밥먹자 나와라",
        date:"18:30"
    },
    {
        id:11,
        title:"아빠",
        Message:"집 가고있다",
        date:"18:30"
    },
    {
        id:12,
        title:"친구7",
        Message:"과제 하기싫다",
        date:"24:30"
    },
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

const App = () => {
  return (
      <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <View style={styles.Headerview}>
            <Text style={{fontWeight:'900',color:'black',fontSize:30,textAlign:'center'}}>Kakaochat</Text>
        </View>
            
        <View style={styles.MainView}>
            <Text style={{ flex:1,fontSize:25,color:'black',fontWeight:'450'}}>채팅</Text>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>createAlert('검색하기')}>
                    <Image source={require('./Img/search.png')} style={styles.img}/>
                </TouchableOpacity>   
                <TouchableOpacity onPress={()=>createAlert('오픈채팅')}>
                    <Image source={require('./Img/openchat.png')} style={styles.img}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>createAlert('프로필 뮤직')}>
                    <Image source={require('./Img/music.png')} style={styles.img}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>createAlert('세팅')}>
                    <Image source={require('./Img/setting.png')} style={styles.img}/>
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
            renderItem={({item})=>(
                <View style={{flexDirection:'row'}}>
                  <Image source={require('./Img/Disislogo.png')} style={{height:55,width:55,borderRadius:15,margin:10,}}/>
                    <View style={{flexDirection:'column',margin:5,alignContent:'space-between'}}>
                        <TouchableOpacity onPress={()=>createAlert1(item.title)}>
                            <Text style={styles.itemTitleText}>{item.title}</Text>
                        </TouchableOpacity>
                        <Text style={styles.itemMessageText}>{item.Message}</Text>
                    </View>
                    <View>
                        <Text style={styles.itemDateText}>{item.date}</Text>
                    </View>
                </View>
                )}
                keyExtractor={item => item.id}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
HeaderView:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 10
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
container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
},
item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
},
img:{
    height: 25,
    width: 25,
    justifyContent:'center',
    resizeMode:'contain'
},
itemTitleText:{
    fontSize:25,
    fontWeight:'450',
    color:'black'
},
itemMessageText:{
    fontSize:18,
    color:'black'
},
itemDateText:{
    padding:10,
    textAlign:'right',
    fontSize:18,
    color:'black'
}
});

export default App;