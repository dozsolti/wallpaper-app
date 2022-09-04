import React from "react";
import { Text, ScrollView } from "react-native";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<any>;
};
const LibraryScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView overScrollMode="never">
            <Text
                style={[
                    commonStyles.heading2,
                    commonStyles.textCenter,
                    commonStyles.marginVertical2,
                ]}>
                Library
            </Text>
            <ThumbnailCarousel title="Liked" />
            <ThumbnailCarousel
                title="Downloaded"
                style={[commonStyles.marginBottom6]}
            />
            <ThumbnailCarousel
                title="Custom group"
                onPressSeeAll={() => {
                    navigation.navigate("LibraryPhotos");
                }}
            />
            <ThumbnailCarousel title="Custom group" />
            <ThumbnailCarousel title="Custom group" />
            <ThumbnailCarousel title="Custom group" />
        </ScrollView>
    );
};

export default LibraryScreen;
