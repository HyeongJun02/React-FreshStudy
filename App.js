import React, { Children } from 'react';
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

const ScrollContent = ({children, url, mainColor}) => {
  return (
  <TouchableOpacity onPress={() => Linking.openURL(url)} style={[styles.contentView, {backgroundColor: `${mainColor}`}]}>
    <Text style={{fontSize : 20}}>Go To {children}</Text>
  </TouchableOpacity>
  )
}

const App = () => {
	return (
		<SafeAreaView style={{flex : 1}}>
		<View style={styles.header}>
			<Text style={styles.headerText}>검색 엔진 모음</Text>
		</View>
		<ScrollView>
			{
				DATA.page.map((pageList, idx) => {
					return (
						<ScrollContent url={pageList.url} mainColor={pageList.mainColor}>{pageList.name}</ScrollContent>
					)
				})
			}
		</ScrollView>
	</SafeAreaView>
	)
}

const styles = StyleSheet.create ( { 
	header : {
		alignItems : 'center',
		margin : 30
	},

	headerText : {
		fontSize : 50
	},
	contentView : {
		height : 80,
		padding : 30,
		borderRadius : 25,
		margin : 30,
		alignItems : 'center'
		
	}
})

export default App;


