import React, { useState} from "react";
import { SafeAreaView, SafeAreaViewProps, Text } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

function PickerComponent() {
    const [pickerValue, setPickerValue] = useState("1");

    return ( 
        <SafeAreaView>
            <Picker
            	selectedValue={pickerValue}
                onValueChange={(item) => setPickerValue(item)}
            >
				<Picker.Item label="라벨_1" value="1" />
				<Picker.Item label="라벨_2" value="2" />
				<Picker.Item label="라벨_3" value="3" />
			</Picker>        
        	<View>
            	<Text>{pickerValue}</Text>
            </View>
        </SafeAreaView>
    )
}

export default PickerComponent;