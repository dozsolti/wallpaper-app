import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "../screens/FeedScreen";
import { NO_HEADER } from "../utils/constants";

const Tab = createBottomTabNavigator();

function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={NO_HEADER} initialRouteName="Feed">
            {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            <Tab.Screen name="Feed"  component={FeedScreen} />
            <Tab.Screen name="Search"  component={FeedScreen} />
            <Tab.Screen name="Library"  component={FeedScreen} />
            <Tab.Screen name="Settings"  component={FeedScreen} />
        </Tab.Navigator>
    );
}

export default MainNavigator;
