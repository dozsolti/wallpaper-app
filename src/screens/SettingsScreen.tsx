import React from "react";
import {
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<any>;
};
const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView
            overScrollMode="never"
            style={[commonStyles.screenContainer]}>
            <Text
                style={[
                    commonStyles.heading2,
                    commonStyles.textCenter,
                    commonStyles.marginTop2,
                    commonStyles.marginBottom6,
                ]}>
                Settings
            </Text>
            <TouchableOpacity>
                <Text style={[commonStyles.text, commonStyles.marginBottom6]}>
                    • Manage interests
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[commonStyles.text, commonStyles.marginBottom6]}>
                    • Clear all data
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SettingsScreen;
