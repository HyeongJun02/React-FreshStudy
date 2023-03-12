import React from 'react';
import {
 SafeAreaView,
 Text,
 ScrollView,
 Linking,
 TouchableOpacity,
 View,
 StyleSheet,
 Alert,
 Image,
} from 'react-native';

const DATA = {
	"page": [
		
		{
			"name": "NAVER",
			"url": "https://www.naver.com/",
			"mainColor": "yellowgreen"
		},
    ],
    "IDcard": [
        
            {
                name: "진예운",
                Message: "화이팅",
                date: "어제"
            },
            {
                name: "정주영",
                Message: "열심히 하겠습니다!",
                date: "20:28"
            },
            {
                name: "이태엽",
                Message: "과제 다했니?",
                date: "3월 10일"
            },
            {
                name: "하윤지",
                Message: "잘부탁해",
                date: "19:20"
            },
            {
                name: "친구1",
                Message: "메롱",
                date: "19:08"
            },
            {
                name:"동생",
                Message:"밥 먹자",
                date:"20:30"
            },
            {
                name:"친구2",
                Message:"ㅋㅋㅋ",
                date:"21.50"
            },
            {
                name:"친구3",
                Message:"뭐하냐 ㅋㅋㅋㅋㅋㅋ",
                date:"22.10"
            }
        ]
} 

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
        name + "님과의 채팅 버튼 입니다.",
        [
            {text:"확인",onPress:()=>console.log("확인 버튼을 눌렀습니다")},
            {text:"취소", style:"cancel",onPress:()=>console.log("취소 버튼을 눌렀습니다")}
        ]
    )
}

const Ttext = ({children,color})=>{
    return (
        <View style={[styles.Container,{backgroundColor:`${color}`}]}>
            <Text style={styles.Ttext}>{children}</Text>
        </View>
    )
}

const App = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <View style={styles.Headerview}>
            <Text style={styles.word}>Kakaochat</Text>
        </View>
            
        <View style={styles.MainView}>
            <Text style={styles.word2}>채팅</Text>
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
            <ScrollView>
                <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[0].url)}>
                     <Ttext color={(DATA.page[0].mainColor)}>광고배너</Ttext>
                </TouchableOpacity>

                {DATA.IDcard.map(item=>{
                    return(
                        <TouchableOpacity onPress={()=>createAlert1(item.name)} style={styles.SubView}>
                        <Text style={{fontSize:15,textAlign:'right'}}>{item.date}</Text>
                        <View style={styles.SubView2}>
                            <Image source={require("./Img/Disislogo.png")} style={styles.img2}/>
                            <View>
                                <Text style={{fontSize:15,margin:2,color:'black'}}>{item.name}</Text>
                                <Text style={{fontSize:15,margin:2,color:'black'}}>{item.Message}</Text>
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
    HeaderView:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
    },
    MainView : {
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomColor : 'black',
        borderBottomWidth : 1
    },
    contentView:{
        flex: 12,
        margin:10,
    },
    img:{
        height: 25,
        width: 25,
        justifyContent:'center',
        resizeMode:'contain'
    },
    img2:{
        height:55,
        width:55,
        borderRadius:15, 
        margin:5
    },
    word:{
        fontWeight:'900',
        color:'black',
        fontSize:30,
        textAlign:'center',
    },
    word2:{
        flex:1,
        fontSize:25,
        color:'black',
        fontWeight:'450',
    },
    SubView:{
        borderRadius: 20, 
        padding: 10
    },
    SubView2:{
        borderRadius: 25, 
        flexDirection:"row"
    },
    Container:{
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    Ttext:{
        fontSize:25,
        marginVertical:10,
        marginHorizontal:20,
        color:'black'
    }
    }
)

export default App;