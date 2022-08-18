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

const Tab = createBottomTabNavigator();

function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={NO_HEADER} initialRouteName="Feed">
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    tabBarLabel: "Feed",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? "home" : "home-outline"}
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, focused }) =>
                        focused ? (
                            <MaterialCommunityIcons
                                name="image-search"
                                color={color}
                                size={26}
                            />
                        ) : (
                            <MaterialIcons
                                name="search"
                                color={color}
                                size={26}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarLabel: "Library",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialIcons
                            name={focused ? "folder" : "folder-open"}
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={FeedScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "settings" : "settings-outline"}
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainNavigator;
