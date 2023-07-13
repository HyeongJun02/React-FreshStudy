import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function ApplicationScreen() {
    return (
        <View>
             <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />
        </View>
    )
}


export default ApplicationScreen;