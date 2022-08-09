import { View, Text, ScrollView } from "react-native";
import React from "react";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";

const FeedScreen = () => {
    return (
        <ScrollView overScrollMode="never">
            <Text
                style={[
                    commonStyles.heading1,
                    commonStyles.textCenter,
                    commonStyles.marginVertical3,
                ]}>
                Wallpapers
            </Text>
            <ThumbnailCarousel title="Art" />
            <ThumbnailCarousel title="Food" />
            <ThumbnailCarousel title="Nature" />
            <ThumbnailCarousel title="People" />
            <ThumbnailCarousel title="Technology" />
            <ThumbnailCarousel title="Travel" />
        </ScrollView>
    );
};

export default FeedScreen;
