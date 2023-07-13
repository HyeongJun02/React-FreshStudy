import React from 'react';
import { StyleSheet, View } from 'react-native';
import PickerScreen from '../src/PickerScreen';

function ApplicationScreen() {
    return (
        <View>
            <PickerScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    block : {},
});

export default ApplicationScreen;