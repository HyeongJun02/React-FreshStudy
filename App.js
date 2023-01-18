import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const createThreeButtonAlert = () => {
  Alert.alert(
    "Alert 제목",
    "Alert 내용",
    [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소..")
      },
      {
        text: "확인",
        onPress: () => console.log("확인..")
      },
      {
        text: "오잉?",
        onPress: () => console.log("오잉??")
      },
    ]
  )
}

const App = () => {
  return (
   <View style={styles.mainView}>

      <View style={styles.container0}>
        <View style={styles.subContainer0_0}><Text style={styles.mainText}>black</Text></View>
        <View style={styles.subContainer0_1}><Text style={styles.mainText}>yellow</Text></View>
        <View style={styles.subContainer0_2}><Text style={styles.mainText}>green</Text></View>
      </View>

      <View style={styles.container1}>
        <View style={styles.subContainer1_0}><Text style={styles.mainText}>white</Text></View>

        <View style={styles.subContainer1_1}>
          <View style={styles.subContainer1_1_0}><Text style={styles.mainText}>pink</Text></View>
          <View style={styles.subContainer1_1_1}><Text style={styles.mainText}>purple</Text></View>
          <View style={styles.subContainer1_1_2}><Text style={styles.mainText}>blue</Text></View>
            <View style={styles.subContainer1_1_2_0}><Text style={styles.mainText}>brown</Text></View>
        </View>

        <View style={styles.subContainer1_2}>
          <View style={styles.subContainer1_2_0}><Text style={styles.mainText}>red</Text></View>
          <View style={styles.subContainer1_2_1}><Text style={styles.mainText}>skyblue</Text></View>
        </View>
      </View>

      <View style={styles.container2}>

        <View style={styles.subContainer2_0}>

          <View style={styles.subContainer2_0_1}>
            <View style={styles.subContainer2_0_1_0}><Text style={styles.mainText}>white</Text></View>
            <View style={styles.subContainer2_0_1_1}><Text style={styles.mainText}>black</Text></View>
          </View>

          <View style={styles.subContainer2_0_2}>
            <View style={styles.subContainer2_0_2_0}><Text style={styles.mainText}>white</Text></View>
            <View style={styles.subContainer2_0_2_1}><Text style={styles.mainText}>black</Text></View>
          </View>

        </View>

        <View style={styles.subContainer2_1}><Text style={styles.mainText}>skyblue</Text></View>

        <View style={styles.subContainer2_2}>
          <View style={styles.subContainer2_2_0}><Text style={styles.mainText}>lightgreen</Text></View>
          <View style={styles.subContainer2_2_1}><Text style={styles.mainText}>green</Text></View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create ({
  touch: {
    backgroundColor:"pink",
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 20
  },

  container0: {
    flex: 1,
    flexDirection: 'row'
  },
  subContainer0_0: {
    flex: 2,
    backgroundColor: 'black'
  },
  subContainer0_1: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  subContainer0_2: {
    flex: 1,
    backgroundColor: 'green'
  },

  container1: {
    flex: 2,
    flexDirection: 'row'
   },
  subContainer1_0: {
    flex: 2,
    backgroundColor: 'white'
  },
  subContainer1_1: {
    flex: 6,
    backgroundColor: 'orange',
    flexDirection: 'column'
  },
  
  subContainer1_1_0: {
    flex: 3,
    backgroundColor: 'pink'
  },
  subContainer1_1_1: {
    flex: 5,
    backgroundColor: 'purple'
  },
  subContainer1_1_2: {
    flex: 4,
    backgroundColor: 'blue'
  },
  subContainer1_1_2_0: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'brown'
  },
  subContainer1_2: {
    flex: 3,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  subContainer1_2_0: {
    flex: 4,
    backgroundColor: 'red',
  },
  subContainer1_2_1: {
    flex: 4,
    backgroundColor: 'skyblue',
  },
  
  container2: {
    flex: 1,
    flexDirection: 'row'
   },
  subContainer2_0: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection: 'column'
  },
  subContainer2_0_1: {
    flex: 4,
    backgroundColor: 'brown',
    flexDirection: 'row'
  },
  subContainer2_0_1_0: {
    flex: 3,
    backgroundColor: 'white'
  },
  subContainer2_0_1_1: {
    flex: 3,
    backgroundColor: 'black'
  },
  subContainer2_0_2: {
    flex: 3,
    backgroundColor: 'pink',
    flexDirection: 'column'
  },
  subContainer2_0_2_0: {
    flex: 3,
    backgroundColor: 'white'
  },
  subContainer2_0_2_1: {
    flex: 3,
    backgroundColor: 'black'
  },

  subContainer2_1: {
    flex: 3,
    backgroundColor: 'skyblue'
  },
  subContainer2_2: {
    flex: 3,
    backgroundColor: 'lightgreen',
    flexDirection: 'column'
  },
  subContainer2_2_0: {
    flex: 4,
    backgroundColor: 'lightgreen',
  },
  subContainer2_2_1: {
    flex: 2,
    backgroundColor: 'green',
  },

  mainView: {
    backgroundColor: 'pink',
    flex: 1,
    //alignItems: 'center', // 좌우 정렬
    //justifyContent: 'center' // 상하 정렬
  },
  mainText: {
    //backgroundColor: 'orange',
    flex: 1,
    color: 'white',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center' 
  }
})

export default App;