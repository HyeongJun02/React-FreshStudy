import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import PickerScreen from './PickerScreen';
import DateScreen from './DateScreen';

function ApplicationScreen() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSendData = () => {
    // 선택된 값들을 서버로 전송
    saveDataToServer(selectedCity, selectedDistrict, selectedDate).then(response => {
      // 서버 응답 처리
      console.log('서버 응답:', response);
      // 서버의 응답에 따라 추가적인 동작 수행 가능
    }).catch(error => {
      // 에러 처리
      console.error('서버 요청 실패:', error);
    });
  };

  const saveDataToServer = (city, district, date) => {
    // 서버로 전송하는 로직을 구현하세요.
    // 예시로 setTimeout을 사용하여 1초 후에 결과를 반환하는 가상의 비동기 함수입니다.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const serverResponse = {
          success: true,
          message: '데이터가 서버에 전송되었습니다.',
        };
        resolve(serverResponse);
      }, 1000);
    });
  };

  return (
    <View style={styles.block}>
      <PickerScreen onCityChange={handleCityChange} onDistrictChange={handleDistrictChange} />
      <DateScreen onDateChange={handleDateChange} />

      <Button title="데이터 전송" onPress={handleSendData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  block: {},
});

export default ApplicationScreen;
