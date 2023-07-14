import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IntroduceScreen from "./IntroduceScreen";
import ApplicationScreen from "./ApplicationScreen";
import MyScreen from "./MyScreen";

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator initialRouteName={ApplicationScreen}>
            <Tab.Screen name="소개공간" component={IntroduceScreen}/>
            <Tab.Screen name="파쇄 신청" component={ApplicationScreen}/>
            <Tab.Screen name="내 정보" component={MyScreen}/>
        </Tab.Navigator>
    );
}

export default MainTab;