import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const cities = ['부산광역시', '서울특별시', '대구광역시'];
const districts = {
  '부산광역시': ['중구', '서구', '동구'],
  '서울특별시': ['강남구', '강서구', '서초구'],
  '대구광역시': ['중구', '동구', '남구']
};

function PickerScreen () {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedDistrict(null); // Reset district when city changes
  };

  return (
    <View>
      <Picker
        selectedValue={selectedCity}
        onValueChange={handleCityChange}
      >
        {cities.map((city) => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>

      {selectedCity && (
        <Picker
          selectedValue={selectedDistrict}
          onValueChange={(district) => setSelectedDistrict(district)}
        >
          {districts[selectedCity].map((district) => (
            <Picker.Item key={district} label={district} value={district} />
          ))}
        </Picker>
      )}
    </View>
  );
};

export default PickerScreen;