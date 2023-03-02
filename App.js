import React from 'react';
import {
 SafeAreaView,
 Text,
 ScrollView,
 Linking,
 TouchableOpacity,
 View,
 StyleSheet,
} from 'react-native';

const DATA = {
	"page": [
		{
			"name": "GOOGLE",
			"url": "https://www.google.com/",
			"mainColor": "red"
		},
		{
			"name": "NAVER",
			"url": "https://www.naver.com/",
			"mainColor": "yellowgreen"
		},
		{
			"name": "DAUM",
			"url": "https://www.daum.net/",
			"mainColor": "orange"
		},
		{
			"name": "YAHOO",
			"url": "https://www.yahoo.com/",
			"mainColor": "mediumpurple"
		},
		{
			"name": "BING",
			"url": "https://www.bing.com/",
			"mainColor": "green"
		},
		{
			"name": "ZUM",
			"url": "https://zum.com/",
			"mainColor": "skyblue"
		},
		{
			"name": "NATE",
			"url": "https://www.nate.com/",
			"mainColor": "yellow"
		},
	]
} 

const TestText = ({children,color})=>{
    return (
        <View style={[styles.testContainer,{backgroundColor:`${color}`}]}>
            <Text style={styles.TestText}>{children}</Text>
        </View>
    )
}

const App = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <ScrollView>
            <Text style={styles.word}>검색 엔진 모음</Text>
            <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[0].url)}>
                <TestText color={(DATA.page[0].mainColor)}>Go to Google</TestText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[1].url)}>
                <TestText color={(DATA.page[1].mainColor)}>Go to Naver</TestText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[2].url)}>
                <TestText color={(DATA.page[2].mainColor)}>Go to DAUM</TestText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[3].url)}>
                <TestText color={(DATA.page[3].mainColor)}>Go to YAHOO</TestText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[4].url)}>
                <TestText color={(DATA.page[4].mainColor)}>Go to BING</TestText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[5].url)}>
                <TestText color={(DATA.page[5].mainColor)}>Go to ZUM</TestText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[6].url)}>
                <TestText color={(DATA.page[6].mainColor)}>Go to NATE</TestText>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    word:{
        flex:1,
        fontSize:30,
        margin:20,
        color:'black',
        fontWeight:'900',
        textAlign:'center'
    },
    testContainer:{
        borderRadius:30,
        margin:30,
        justifyContent:'center',
        alignItems:'center'
    },
    TestText:{
        fontSize:25,
        marginVertical:10,
        marginHorizontal:20,
        color:'black'
    },
    
}
)

export default App;