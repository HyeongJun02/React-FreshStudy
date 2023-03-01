import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button, 
  View,
  TouchableOpacity,
  Linking
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
			"mainColor": "red"
		},
	]
}
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{fontSize:30, textAlign:'center', margin:40}}> 검색 엔진 모음</Text>
        { DATA.page.map(item=>{
          return(
            <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={{ padding: 25}} >
            <View backgroundColor={item.mainColor} style={{borderRadius: 30}}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingTop:20,
    paddingHorizontal:10
  },
  item:{
    textAlign:'center',
    margin: 10,
    padding: 40,
    fontSize:25,
    //borderRadius: 25
  }

});

export default App;