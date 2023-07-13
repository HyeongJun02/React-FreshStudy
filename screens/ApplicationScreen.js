import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Calendar} from "react-native-calendars";
import { FullWindowOverlay } from 'react-native-screens';

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
            <Calendar style={styles.calendar}></Calendar>
        </View>
        
    )
}

const styles = StyleSheet.create({
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
});

export default ApplicationScreen;