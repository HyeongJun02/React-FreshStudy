import React, { useState} from "react";
import { SafeAreaView, SafeAreaViewProps, Text, View } from "react-native-safe-area-context";
import RNPickerSelect from 'react-native-picker-select';

function PickerScreen() {
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
    );
}


export default PickerScreen;