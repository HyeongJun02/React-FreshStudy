import React, { useState} from "react";
import { SafeAreaView, SafeAreaViewProps, Text, View } from "react-native-safe-area-context";
import RNPickerSelect from 'react-native-picker-select';

export default function PickerScreen() {
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      marginBottom: 200,
      alignItems: 'center',
    },
});

export default PickerScreen;