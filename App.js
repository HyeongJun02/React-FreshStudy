import React, { Children } from 'react';
import {
  View, 
  Image,
  SafeAreaView,
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Alert,
  ImageBackground,
  Touchable,
  ScrollView,
  Linking
 } from 'react-native';


const Engine = ({ children, color, url }) => {
  return(
    <TouchableOpacity onPress={() => Linking.openURL('${children}')} style ={{backgroundColor: ('${color}'), borderRadius: 20, padding: 20}}>
      <Text style = {{fontSize : 20, color: 'black'}}>{children}</Text>
    </TouchableOpacity>
  )
}

const App = () =>{
  return (
    <SafeAreaView style ={{flex:1}}>
      <ScrollView>
        <View style = {styles.title}>
          <Text style ={{fontSize : 20}}>검색 엔진 모음</Text>
        </View>

        <Engine color = {DATA.page[0].mainColors}>{DATA.page[0].name}</Engine>

        <TouchableOpacity onPress={() => Linking.openURL(DATA.page[0].url)} style ={[styles.button, {backgroundColor: DATA.page[0].mainColor}]}>
          <Text style = {styles.text}>{DATA.page[0].name}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(DATA.page[1].url)} style ={[styles.button, {backgroundColor: DATA.page[1].mainColor}]}>
          <Text style = {styles.text}>{DATA.page[1].name}</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => Linking.openURL(DATA.page[2].url)} style ={[styles.button, {backgroundColor: DATA.page[2].mainColor}]}>
          <Text style = {styles.text}>{DATA.page[2].name}</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => Linking.openURL(DATA.page[3].url)} style ={[styles.button, {backgroundColor: DATA.page[3].mainColor}]}>
          <Text style = {styles.text}>{DATA.page[3].name}</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => Linking.openURL(DATA.page[4].url)} style ={[styles.button, {backgroundColor: DATA.page[4].mainColor}]}>
          <Text style = {styles.text}>{DATA.page[4].name}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(DATA.page[5].url)} style ={[styles.button, {backgroundColor: DATA.page[5].mainColor}]}>
          <Text style = {styles.text}>{DATA.page[5].name}</Text>
        </TouchableOpacity>

        

      </ScrollView>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  title: {
    flex : 10,
    justifyContent : "center",
    alignItems : "center",
    padding: 20,
    margin: 20
  },
  
  button: {
    borderRadius: 20, 
    padding: 20,
    margin: 40
  },

  text: {
    fontSize : 20,
    textAlign: 'center'
  }
  
}
);

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
export default App;