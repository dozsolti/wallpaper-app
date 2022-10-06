import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    navigation: StackNavigationProp<any>;
};
const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView
            overScrollMode="never"
            contentContainerStyle={[commonStyles.fill]}>
            <Text
                style={[
                    commonStyles.heading2,
                    commonStyles.textCenter,
                    commonStyles.marginTop2,
                    commonStyles.marginBottom6,
                ]}>
                Settings
            </Text>
            <View
                style={[
                    { flexDirection: "column" }, // commonStyles.stack
                    commonStyles.spaceBetween,
                    commonStyles.fill,
                ]}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("SelectInterests", {
                            isFromSettings: true,
                        });
                    }}
                    style={[
                        commonStyles.row,
                        commonStyles.spaceBetween,
                        commonStyles.centerRowVertical,
                        commonStyles.paddingHorizontal5,
                        commonStyles.marginBottom6,
                        commonStyles.paddingVertical4,
                        { backgroundColor: colors.gray },
                    ]}>
                    <Text style={[commonStyles.heading3]}>
                        Manage interests
                    </Text>
                    <MaterialIcons name="arrow-right" size={24} color="black" />
                </TouchableOpacity>

                <Text
                    style={[
                        commonStyles.text,
                        commonStyles.paddingHorizontal4,
                        {
                            color: colors.background,
                            backgroundColor: colors.danger,
                        },
                    ]}>
                    Disclaimer: 'Every photo comes from Flickr and have a
                    Creative Commons license.'
                </Text>
            </View>
        </ScrollView>
    );
};

export default SettingsScreen;
