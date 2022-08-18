import React from "react";
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
} from "@expo/vector-icons";
import Thumbnail from "../components/Thumbnail";

const renderItem = ({ item, index }) => {
    return (
        <Thumbnail
            style={[
                commonStyles.marginTop5,
                index % 2 == 0 ? commonStyles.marginRight5 : {},
                commonStyles.fill,
            ]}
        />
    );
};

const LibraryPhotosScreen = ({ navigation }) => {
    return (
        <FlatList
            data={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
            ]}
            keyExtractor={(item) => item.toString()}
            renderItem={renderItem}
            numColumns={2}
            style={[commonStyles.screenContainer]}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
                <View
                    style={[commonStyles.row, commonStyles.centerRowVertical]}>
                    <TouchableOpacity
                        style={[
                            { position: "absolute" },
                            // commonStyles.bordered,
                            commonStyles.padding2,
                        ]}
                        onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Text
                        style={[
                            commonStyles.heading2,
                            commonStyles.textCenter,
                            commonStyles.fill,
                            commonStyles.marginVertical2,
                        ]}>
                        Custom group 1
                    </Text>
                </View>
            )}
        />
    );
};

export default LibraryPhotosScreen;
