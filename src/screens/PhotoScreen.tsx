import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import LikeModal from "../components/LikeModal";
import { SharedElement } from "react-navigation-shared-element";
import Author from "../components/Author";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<any>;
    route: any
};

const PhotoScreen: React.FC<Props>  = ({ navigation, route }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { item } = route.params;

    return (
        <>
            <View style={[commonStyles.fullScreen]}>
                <LinearGradient
                    colors={["rgba(0,0,0,0.8)", "transparent"]}
                    style={[
                        commonStyles.absoluteTop,
                        commonStyles.heightQuarter,
                        { zIndex: 1 },
                    ]}
                />
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
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>

                    <Author name="Author" />

                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <MaterialCommunityIcons
                            name="heart-outline"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                <SharedElement
                    id={`item.${item.id}.photo`}
                    style={[commonStyles.container]}>
                    <Image
                        source={{
                            uri: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                        }}
                        style={[commonStyles.container]}
                        resizeMode="cover"
                    />
                </SharedElement>
            </View>
            <LikeModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
};

export default PhotoScreen;
