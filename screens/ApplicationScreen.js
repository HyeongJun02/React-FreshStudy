import React from 'react';
import { StyleSheet, View } from 'react-native';
import PickerComponent from '../src/PickerComponent';

function ApplicationScreen() {
    return (
        <View>
            <PickerComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    block : {},
});

export default ApplicationScreen;