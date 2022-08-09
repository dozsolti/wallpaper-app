import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LikeModal from "../components/LikeModal";

const renderItem = ({ item }) => {
    return (
        <View>
            <Image
                source={{
                    uri: item.uri,
                }}
                style={[commonStyles.fullScreen]}
                resizeMode="cover"
            />
        </View>
    );
};

const InterestsScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <View>
                <LinearGradient
                    pointerEvents="none"
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

                    <View style={[commonStyles.row, commonStyles.container]}>
                        <Text
                            numberOfLines={1}
                            style={[
                                commonStyles.heading3,
                                { color: colors.background },
                            ]}>
                            Sports
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={[
                        {
                            uri: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1659785814117-a9b958b06d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1659612960863-05b209f7b036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=800",
                        },
                    ]}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    pagingEnabled
                    snapToAlignment="center"
                    overScrollMode="never"
                    style={[{ flexGrow: 0 }]}
                />

                <LinearGradient
                    pointerEvents="none"
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={[
                        commonStyles.absoluteBottom,
                        commonStyles.heightQuarter,
                        { zIndex: 1 },
                    ]}
                />
                <View
                    style={[
                        commonStyles.absoluteBottom,
                        commonStyles.row,
                        commonStyles.spaceBetween,
                        commonStyles.centerRowVertical,
                        commonStyles.margin5,
                        { zIndex: 1 },
                    ]}>
                    <TouchableOpacity
                        style={[commonStyles.row, commonStyles.container]}>
                        <Image
                            source={{ uri: "https://picsum.photos/200/300" }}
                            style={[
                                commonStyles.rounded,
                                commonStyles.square(32),
                                commonStyles.marginRight5,
                            ]}
                            resizeMode="cover"
                        />
                        <Text
                            numberOfLines={1}
                            style={[
                                commonStyles.heading3,
                                { color: colors.background },
                            ]}>
                            Author name
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setIsModalVisible(true)}
                        style={[commonStyles.marginRight6]}>
                        <MaterialCommunityIcons
                            name="heart-outline"
                            size={28}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <MaterialCommunityIcons
                            name="arrow-collapse-down"
                            size={28}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <LikeModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
};

export default InterestsScreen;