import { View, Text, ScrollView } from "react-native";
import React from "react";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";

const LibraryScreen = ({ navigation }) => {
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
