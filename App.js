import React from 'react';
import {View, Text, StyleSheet, 
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
} from  'react-native';

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

const scrollContent = ({name, url, mainColor}) => {
  return (
  <TouchableOpacity onPress={() => Linking.openURL(url)} style={{backgroundColor: `${mainColor}`}}>
    <Text>Go To + {name}</Text>
  </TouchableOpacity>
  )
}

const App = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
      <View>
        <Text>검색엔진모음</Text>
      </View>
      <ScrollView>
        <scrollContent url={DATA.page[0].url} mainColor={DATA.page[0].mainColor}>{DATA.page[0].name}</scrollContent>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create ( { 
  mainView: {
    backgroundColor: 'yellow', 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainText: {
    backgroundColor: 'pink',
    color: 'gray',
    fontSize: 30,
  }
})

export default App;


