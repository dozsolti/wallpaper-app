import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "../screens/FeedScreen";
import { NO_HEADER } from "../utils/constants";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen";
import SettingsScreen from "../screens/SettingsScreen";

interface IconsHashtableProp {
  [screenName: string]: (props: {
    color: string;
    focused: boolean;
    size: number;
  }) => React.ReactNode;
}
const icons: IconsHashtableProp = {
  FEED: ({ color, focused, size }) => (
    <MaterialCommunityIcons
      name={focused ? "home" : "home-outline"}
      color={color}
      size={size}
    />
  ),
  SEARCH: ({ color, focused, size }) => {
    return focused ? (
      <MaterialCommunityIcons name="image-search" color={color} size={size} />
    ) : (
      <MaterialIcons name="search" color={color} size={size} />
    );
  },
  LIBRARY: ({ color, focused, size }) => (
    <MaterialIcons
      name={focused ? "folder" : "folder-open"}
      color={color}
      size={size}
    />
  ),
  SETTINGS: ({ color, focused, size }) => (
    <Ionicons
      name={focused ? "settings" : "settings-outline"}
      color={color}
      size={size}
    />
  ),
};

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={NO_HEADER} initialRouteName="Feed">
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: icons.FEED,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: icons.SEARCH,
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: icons.LIBRARY,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: icons.SETTINGS,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
