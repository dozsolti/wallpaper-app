import {
    View,
    Text,
    ScrollView,
    Touchable,
    TouchableOpacity,
} from "react-native";
import React from "react";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";

const SettingsScreen = ({ navigation }) => {
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
                <Text
                    style={[commonStyles.text, commonStyles.marginBottom6]}>
                    • Manage interests
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text
                    style={[commonStyles.text, commonStyles.marginBottom6]}>
                    • Clear all data
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SettingsScreen;
