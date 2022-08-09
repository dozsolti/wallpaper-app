import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SelectInterestsScreen from "../screens/SelectInterestsScreen";

import { DefaultTheme } from "@react-navigation/native";
import { NO_HEADER } from "../utils/constants";
import { colors } from "../utils/colors";
import PhotoScreen from "../screens/PhotoScreen";
import InterestsScreen from "../screens/InterestsScreen";
import MainNavigator from "./MainNavigator";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors,
    },
};

const Stack = createNativeStackNavigator();

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
                <Stack.Screen name="Photo" component={PhotoScreen} />
                <Stack.Screen name="Interests" component={InterestsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StartNavigator;
