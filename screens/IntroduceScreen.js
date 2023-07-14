import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';


function IntroduceScreen() {
    return (
        <ScrollView>
            <View>
                <Text>이 어플은 폐기물 파쇄 신청 어플입니다. {"\n"}{"\n"}
                하단의 폐기 신청 탭을 활용하여 
                    파쇄 신청을 할 수 있습니다. {"\n"}{"\n"}
                
                파쇄 가능한 폐기물은 폐비닐류, 폐농약용기류를
                    제외한 영농폐기물입니다. {"\n"}{"\n"}
                </Text>
                
            </View>
        </ScrollView>
    )
}

export default IntroduceScreen;