import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IntroduceScreen from "./IntroduceScreen";
import ApplicationScreen from "./ApplicationScreen";
import MyScreen from "./MyScreen";

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Introduce" component={IntroduceScreen}/>
            <Tab.Screen name="Application" component={ApplicationScreen}/>
            <Tab.Screen name="My" component={MyScreen}/>
        </Tab.Navigator>
    );
}

export default MainTab;