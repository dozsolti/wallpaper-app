import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import SelectInterestsScreen from "../screens/SelectInterestsScreen";

import { DefaultTheme } from "@react-navigation/native";
import { NO_HEADER } from "../utils/constants";
import { colors } from "../utils/colors";
import PhotoScreen from "../screens/PhotoScreen";
import InterestsScreen from "../screens/InterestsScreen";
import MainNavigator from "./MainNavigator";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors,
    },
};


const StartNavigator = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={NO_HEADER}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen
                    name="SelectInterests"
                    component={SelectInterestsScreen}
                />
                <Stack.Screen name="Main" component={MainNavigator} />
                <Stack.Screen
                    name="Photo"
                    component={PhotoScreen}
                    
                    sharedElements={(route, otherRoute, showing) => {
                        const { item } = route.params;
                        return [`item.${item.id}.photo`];
                    }}
                />
                <Stack.Screen name="Interests" component={InterestsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StartNavigator;