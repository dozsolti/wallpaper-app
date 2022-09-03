import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LikeModal from "../components/LikeModal";
import Author from "../components/Author";

const ProfileScreen = ({ navigation }) => {
    return (
        <>
            <View
                style={[
                    commonStyles.absoluteTop,
                    commonStyles.row,
                    commonStyles.spaceBetween,
                    commonStyles.centerRowVertical,
                    commonStyles.margin5,
                    { zIndex: 1 },
                ]}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={[commonStyles.row, commonStyles.marginRight6]}>
                    <MaterialCommunityIcons name="arrow-left" size={24} />
                </TouchableOpacity>
            </View>

            <View
                style={[
                    commonStyles.centerHorizontal,
                    commonStyles.paddingVertical6,
                    {
                        backgroundColor: "#FFE7E7",
                    },
                ]}>
                <Image
                    source={{ uri: "https://picsum.photos/200" }}
                    style={[commonStyles.rounded, commonStyles.square(150)]}
                    resizeMode="cover"
                />
                <Text
                    style={[
                        commonStyles.heading2,
                        commonStyles.marginVertical2,
                    ]}>
                    User name
                </Text>
                <TouchableOpacity>
                    <Text style={[commonStyles.text, { color: "#707070" }]}>
                        https://yourlink.com/username
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default ProfileScreen;
