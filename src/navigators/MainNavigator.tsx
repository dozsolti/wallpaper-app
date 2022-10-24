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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Tab.Navigator screenOptions={NO_HEADER} initialRouteName="Feed">
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: t("screens.feed.name"),
          tabBarIcon: icons.FEED,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: t("screens.search.name"),
          tabBarIcon: icons.SEARCH,
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: t("screens.library.name"),
          tabBarIcon: icons.LIBRARY,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: t("screens.settings.name"),
          tabBarIcon: icons.SETTINGS,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
