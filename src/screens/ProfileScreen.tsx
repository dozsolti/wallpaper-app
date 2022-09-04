import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LikeModal from "../components/LikeModal";
import Author from "../components/Author";
import Tabs from "../components/Tabs";
import Thumbnail from "../components/Thumbnail";
import { ScrollView } from "react-native-gesture-handler";
import { ListPhotos } from "../components/ListPhotos";
import { ListCollections } from "../components/ListCollections";

const ProfileScreen = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <ScrollView nestedScrollEnabled={true}>
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

            <ImageBackground
                style={[
                    commonStyles.centerHorizontal,
                    commonStyles.paddingTop6,
                ]}
                source={{ uri: "https://picsum.photos/200" }}
                resizeMode="cover"
                blurRadius={10}>
                <Image
                    source={{ uri: "https://picsum.photos/200" }}
                    style={[commonStyles.rounded, commonStyles.square(150)]}
                />

                <Text
                    style={[
                        commonStyles.heading2,
                        commonStyles.marginVertical2,
                        { color: colors.background },
                    ]}>
                    User name
                </Text>

                <TouchableOpacity>
                    <Text
                        style={[
                            commonStyles.text,
                            { color: colors.background },
                        ]}>
                        https://yourlink.com/username
                    </Text>
                </TouchableOpacity>

                <Tabs
                    tabs={[
                        { text: "Photos" },
                        { text: "Collections" },
                        { text: "Liked" },
                    ]}
                    value={selectedIndex}
                    onChange={setSelectedIndex}
                    containerStyle={[
                        commonStyles.paddingBottom3,
                        commonStyles.marginTop3,
                    ]}
                />
            </ImageBackground>
            <View style={[commonStyles.fill]}>
                {selectedIndex === 0 ? <ListPhotos /> : null}
                {selectedIndex === 1 ? <ListCollections /> : null}
                {selectedIndex === 2 ? <ListPhotos /> : null}
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;
